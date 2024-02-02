const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {

    const createPayload = req.body;
    const paresdPayload = createTodo.safeParse(createPayload);

    if (!paresedPayload.success) {
        res.status(411).json({
            msg: "You entered wrong input"
        })
        return
    }
})

app.get("/todos", (req, res) => {
    
})

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    
    if (!paresedPayload.success) {
        res.status(411).json({
            msg: "You entered wrong input"
        })
        return
    }
})