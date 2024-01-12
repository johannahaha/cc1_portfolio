// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const jobs = require('./src/data/jobs.json');

module.exports = function (api) {
  api.loadSource(async actions => {
  
      const collection = actions.addCollection({
        typeName: 'Jobs'
      })
  
      for (const job of jobs) {
        collection.addNode({
          year: job.year,
          content: job.content,
          category: job.category
        });
      }
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

}
