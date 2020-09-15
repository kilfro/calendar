const { database } = require('./database')

const getTasks = (req, res) => {
  const { date } = req.query
  database.all('SELECT * FROM tasks WHERE date_string = ?', [date], function (
    err,
    rows
  ) {
    if (err) {
      console.error(err)
      res.status(500).body(err)
    } else {
      res.status(200).json(JSON.stringify(rows))
    }
  })
}

const insertTask = (req, res) => {
  const { uid, date_string, from, to, color, title, description } = req.body

  try {
    database.run(
      `INSERT INTO tasks (uid, date_string, 'from', 'to', color, title, description)
      VALUES(?, ?, ?, ?, ?, ?, ?)`,
      [uid, date_string, from, to, color, title, description]
    )
    res.status(200).send()
  } catch (e) {
    console.error(e)
    res.status(500).body(e)
  }
}

const updateTask = (req, res) => {
  const { date_string, from, to, color, title, description } = req.body
  const { uid } = req.params

  try {
    database.run(
      `UPDATE tasks SET 
      date_string = ?, 
      'from' = ?, 
      'to' = ?, 
      color = ?, 
      title = ?, 
      description = ? 
    WHERE uid = ?`,
      [date_string, from, to, color, title, description, uid]
    )
    res.status(204).send()
  } catch (e) {
    res.status(500).body(e)
  }
}

const deleteTask = (req, res) => {
  const { uid } = req.params

  try {
    database.run('DELETE FROM tasks WHERE uid = ?', [uid])
    res.status(204).send()
  } catch (e) {
    res.status(500).body(e)
  }
}

module.exports = {
  getTasks,
  insertTask,
  updateTask,
  deleteTask,
}
