const queries = require('./queries')

module.exports = (app) => {
  app.route('/api').get((req, res) => {
    res.send('<h1>Server is run</h1>')
  })

  app.route('/api/tasks')
    .get(queries.getTasks)
    .post(queries.insertTask)
    .options(queries.getOptions)

  app
    .route('/api/tasks/:uid')
    .delete(queries.deleteTask)
    .put(queries.updateTask)
}
