const { join } = require("path");
const { access, writeFile } = require("fs/promises");
const { Octokit } = require("@octokit/rest");
require('dotenv').config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPOSITORY_OWNER = "arjunattam";
const GITHUB_REPOSITORY_NAME = "arjun.is";

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

function slugify(title) {
  // Convert the title to lowercase and replace spaces with hyphens
  let slug = title.toLowerCase().replace(/\s+/g, '-');

  // Remove any characters that are not alphanumeric or hyphens
  slug = slug.replace(/[^a-z0-9-]/g, '');

  // Remove any duplicate hyphens
  slug = slug.replace(/--+/g, '-');

  // Trim any leading or trailing hyphens
  slug = slug.replace(/^-+|-+$/g, '');

  return slug;
}

async function getIssues() {
  const cachedIssuesPath = join(__dirname, "..", "_data", ".cached-issues.json");
  try {
    await access(cachedIssuesPath);
    console.log(`Using cached issues...`);
    return require(cachedIssuesPath);
  } catch (error) {
    console.log(`Looking for issues...`);
    const { data } = await octokit.issues.listForRepo({
      owner: GITHUB_REPOSITORY_OWNER,
      repo: GITHUB_REPOSITORY_NAME,
    });
    // Cache posts locally...
    await writeFile(cachedIssuesPath, JSON.stringify(data, null, 2));
    return data;
  }
}

module.exports = async function () {
  const issues = await getIssues();
  return issues
    .filter((issue) => {
      return issue.author_association === "OWNER" && !issue.pull_request;
    })
    .map((issue) => {
      const id = parseInt(issue.html_url.split("/").at(-1), 10);
      const date = new Date(issue.updated_at);
      const year = date.getFullYear();

      return {
        date,
        url: `/posts/${year}/${slugify(issue.title)}`,
        data: {
          id: id,
          year,
          title: issue.title,
          slug: slugify(issue.title),
          body: issue.body,
          tags: [ 'gh' ],
        }
      };
    });
};