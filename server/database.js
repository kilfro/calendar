var sqlite3 = require('sqlite3').verbose()
var database = new sqlite3.Database('./base.db', createTable)

function createTable() {
  database.run(`
        CREATE TABLE IF NOT EXISTS tasks (
            uid TEXT PRIMARY_KEY NOT NULL,
            date_string TEXT NOT NULL,
            'from' TEXT,
            'to' TEXT, 
            color TEXT,
            title TEXT NOT NULL,
            description TEXT
        )
    `)
}

module.exports = { database }
