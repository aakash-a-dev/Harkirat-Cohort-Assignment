const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        msg:"Initialised"
    })
})
app.post("/todo", async(req, res) => {

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You entered wrong input"
        })
        return
    }

   await todo.create({
        title: createPayload.title,
       description: createPayload.description,
        completed: false
   })
    
    res.json({
        msg: "Todo Created"
    })
})

app.get("/todos", async(req, res) => {
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed", async(req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    
    if (!paresedPayload.success) {
        res.status(411).json({
            msg: "You entered wrong input"
        })
        return
    }
    await todo.update({
        __id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo Marked as Completed"
    })
})

app.listen(3000, () => {
    console.log("Started port on 3000");
});