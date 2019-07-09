import { Router } from "express"
import { find } from "../model"

const apiRouter = Router()

apiRouter.get("/users", async (_req, res, next) => {
    try {
        const users = await find()
        res.json(users)
    } catch (error) {
        next(error)
    }
})

export default apiRouter
