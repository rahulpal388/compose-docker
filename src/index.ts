import { PrismaClient } from "@prisma/client"
import express from "express"
import { skipPartiallyEmittedExpressions } from "typescript"

const app = express()

const client = new PrismaClient()


app.get("/", async (req, res) => {
    const data = await client.user.findMany()
    res.json({
        data
    })
})


app.post("/", async (req, res) => {
    await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        }
    })
    res.json({
        message: "post end point of the express server"
    })
})


app.listen(3000, () => {
    console.log("listening on port 3000.......")
})