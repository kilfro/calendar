const { Pool } = require('pg')
const pool = new Pool({
  host: 'localhost',
  database: 'calendar',
  user: 'postgres',
  password: 'killer91',
})

function getBetweenParams(year, month) {
  const from = `${year}-${month}-1`
  let to
  if (month === '12') {
    to = `${Number(year) + 1}-1-1`
  } else {
    to = `${year}-${Number(month) + 1}-1`
  }

  return [from, to]
}

const getTasks = (req, res) => {
  const { year, month } = req.query
  const betweenParams = getBetweenParams(year, month)

  pool.query(
    'SELECT * FROM tasks WHERE "from" BETWEEN $1 AND $2',
    [...betweenParams],
    (error, result) => {
      if (error) {
        console.error(error)
        res.status(500).send()
      } else {
        res.set('Access-Control-Allow-Origin', '*')
        res.status(200).json(JSON.stringify(result.rows))
      }
    }
  )
}

const insertTask = (req, res) => {
  const { uid, from, to, color, title, description } = req.body

  pool.query(
    `INSERT INTO tasks (uid, 'from', 'to', color, title, description)
      VALUES(?, ?, ?, ?, ?, ?)`,
    [uid, from, to, color, title, description],
    (error) => {
      if (error) {
        console.error(error)
        res.status(500).body(error)
      } else {
        res.status(200).send()
      }
    }
  )
}

const updateTask = (req, res) => {
  const { from, to, color, title, description } = req.body
  const { uid } = req.params

  pool.query(
    `UPDATE tasks SET 
      'from' = ?, 
      'to' = ?, 
      color = ?, 
      title = ?, 
      description = ? 
    WHERE uid = ?`,
    [from, to, color, title, description, uid],
    (error) => {
      if (error) {
        console.error(error)
        res.status(500).body(error)
      } else {
        res.status(204).send()
      }
    }
  )
}

const deleteTask = (req, res) => {
  const { uid } = req.params

  pool.query('DELETE FROM tasks WHERE uid = $1', [uid], (error) => {
    if (error) {
      console.error(error)
      res.status(500).body(error)
    } else {
      res.set('Access-Control-Allow-Origin', '*')
      res.status(204).send()
    }
  })
}

module.exports = {
  getTasks,
  insertTask,
  updateTask,
  deleteTask,
}
