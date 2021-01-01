/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreatePage = async ({ page, actions: { createPage } }) => {
  /*
   * The dashboard  and other pages (account,settings, my insights)
   * (which lives under `/dashboard` and `/*`) are client-only route.
   *  That means that we don’t want to build them server-side because it depends
   * on data that we won’t have until a user logs in. By using `matchPath`,
   * we’re able to specify the entire `/dashboard` path as a client-only section,
   * which means Gatsby will skip any `/dashboard/*`  and `/* /*` pages during
   * the build step.
   *
   * Take a look at `src/pages/dashboard.js` for more details.
   */
  if (page.path === `/`) {
    page.matchPath = `/*`
    createPage(page)
  }
}
