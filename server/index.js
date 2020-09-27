const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a user
app.post("/users", async (req, res) => {
    try {
        const { name } = req.body;
        const newUser = await pool.query("INSERT INTO users (name) VALUES ($1)", [name]);

        res.json(newUser.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//get user
app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//get questions
app.get("/questions", async (req, res) => {
    try {
        const questions = await pool.query("SELECT * FROM questions ORDER BY RANDOM() LIMIT 5"); 

        res.json(questions.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//get duplicate question types
app.get("/question_types", async (req, res) => {
    try {
        const types = await pool.query("SELECT * FROM question_types ORDER BY RANDOM() LIMIT 2")

        res.json(types.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//create/insert a result
app.post("/results/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const { score } = req.body;
        const newResult = await pool.query("INSERT INTO results (user_id, score) VALUES ($1, $2)", [userId, score])

        res.json(newResult.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//get result
app.get("/results/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await pool.query("SELECT * FROM results WHERE user_id = $1", [userId]);

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//get quiz type
app.get("/quiz_types", async (req, res) => {
    try {
        const type = await pool.query("SELECT * FROM quiz_types ORDER BY RANDOM() LIMIT 1") // This query takes a long time for large tables

        res.json(type.rows);
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});