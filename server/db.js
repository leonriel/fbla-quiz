const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "dl6859",
    host: "localhost",
    port: 5432,
    database: "fbla_quiz_generator"
});

module.exports = pool;