import express from "express"
import {prismaClient} from "db/client"

const app = express()

app.use(express.json())

app.get("/users", async (req, res) => {
    try {
        const users = await prismaClient.user.findMany({
            include: {
                todos: true
            }
        })
        res.json(users)
    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
})

app.post("/users", async (req , res) => {
    try {
        const { task, userId } = req.body
        const todo = await prismaClient.todo.create({ 
            data: { task, userId }
        })
        res.json(todo)
    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})