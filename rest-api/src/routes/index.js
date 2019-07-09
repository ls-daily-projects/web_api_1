import { Router } from "express"
import { NotFound } from "http-errors"

import { find, findById } from "../model"

const apiRouter = Router()

apiRouter.get("/users/:id", async (req, res, next) => {
    try {
        const user = await findById(req.params.id)
        if (!user) {
            return next(
                NotFound("The user with the specified ID does not exist.")
            )
        }
        return res.json(user)
    } catch (error) {
        next(error)
    }
})

apiRouter.get("/users", async (_req, res, next) => {
    try {
        const users = await find()
        res.json(users)
    } catch (error) {
        next(error)
    }
})

export default apiRouter
