const {getIssues} = require('./utils/getGitHubIssues');

function slugify(title) {
  let slug = title.toLowerCase().replace(/\s+/g, '-');
  slug = slug.replace(/[^a-z0-9-]/g, '');
  slug = slug.replace(/--+/g, '-');
  slug = slug.replace(/^-+|-+$/g, '');
  return slug;
}

module.exports = async function(collection) {
  const issues = await getIssues();
  return issues
    .filter(issue => issue.author_association === "OWNER" && !issue.pull_request)
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
          tags: [ 'gh', 'books' ],
        },
        tags: ['one', 'two']
      };
    });
};
