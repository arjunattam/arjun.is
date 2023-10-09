const fs = require('fs');
const path = require("path");
const { access, writeFile } = require("fs/promises");
const { Octokit } = require("@octokit/rest");
require('dotenv').config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPOSITORY_OWNER = "arjunattam";
const GITHUB_REPOSITORY_NAME = "arjun.is";
const ISSUE_LABEL_PUBLISHED = 'meta:published';

// cwd for the script is `repo/scripts` due to changeCwd()
const CACHED_DATA_FILE = '.cached-issues.json';
const POSTS_DIR = path.join('..', 'posts');
const GITIGNORE_PATH = path.join('..', '.gitignore');

const octokit = new Octokit({
    auth: GITHUB_TOKEN,
});

function hasPublishedLabel(issue) {
    return issue.labels.filter(label => label.name === ISSUE_LABEL_PUBLISHED).length > 0;
}

function getPassthroughLabels(issue) {
    return issue.labels.filter(label => label.name.indexOf(`meta:`) < 0).map(label => label.name);
}

function filtered(issues) {
    return issues.filter(issue => {
        return hasPublishedLabel(issue) && issue.author_association === "OWNER" && !issue.pull_request
    })
}

async function getIssues() {
    const cachedIssuesPath = CACHED_DATA_FILE;
    try {
        await access(cachedIssuesPath);
        console.log(`Using cached issues...`);
        return require(path.join('..', cachedIssuesPath));
    } catch (error) {
        console.log(`Looking for issues...`);
        const { data } = await octokit.issues.listForRepo({
            owner: GITHUB_REPOSITORY_OWNER,
            repo: GITHUB_REPOSITORY_NAME,
        });
        const publishableIssues = filtered(data);
        await writeFile(cachedIssuesPath, JSON.stringify(publishableIssues, null, 2));
        return publishableIssues;
    }
}

function slugify(title) {
    let slug = title.toLowerCase().replace(/\s+/g, '-');
    slug = slug.replace(/[^a-z0-9-]/g, '');
    slug = slug.replace(/--+/g, '-');
    slug = slug.replace(/^-+|-+$/g, '');
    return slug;
}

function createFrontmatter(title, date, tags, issueUrl) {
    let yyyy = date.getFullYear();
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let dd = String(date.getDate()).padStart(2, '0');
    let formattedDate = yyyy + '-' + mm + '-' + dd;
    return `---\ntitle: "${title.replaceAll('"', '')}"\ndate: ${formattedDate}\ntags: ${JSON.stringify(tags)}\nsource: github\nissueUrl: ${issueUrl}\n---\n`;
}

function changeCwd() {
    const scriptDirectory = path.dirname(process.argv[1]);
    process.chdir(scriptDirectory);
}

async function convertIssueIntoPost() {
    const issues = await getIssues();
    const filesWritten = [];

    issues.forEach(issue => {
        const date = new Date(issue.updated_at);
        const year = date.getFullYear();
        const tags = getPassthroughLabels(issue);
        const newPath = path.join(POSTS_DIR, `${year}`, `${slugify(issue.title)}.md`);

        const fm = createFrontmatter(issue.title, date, tags, issue.html_url);
        console.log(fm);
        // TODO: this requires the year dir to exist => solved by `posts/2023/.gitkeep`
        fs.writeFileSync(newPath, `${fm}\n${issue.body}`.replace(/\r\n/gm, "\n"));
        filesWritten.push(newPath);

        // TODO: handle meta:og image for posts (pick up the first image?)
    });

    return filesWritten;
}

async function main() {
    changeCwd();
    const filesWritten = await convertIssueIntoPost();
}

main();
