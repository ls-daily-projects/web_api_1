import { Router } from "express"
import { NotFound, BadRequest } from "http-errors"

import { find, findById, remove, update } from "../model"

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

apiRouter.delete("/users/:id", async (req, res, next) => {
    try {
        const user = await remove(req.params.id)
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

apiRouter.put("/users/:id", async (req, res, next) => {
    const { name, bio } = req.body

    if (!name || !bio) {
        return next(BadRequest("Please provide name and bio for the user."))
    }

    try {
        const isSuccess = await update(req.params.id, { name, bio })

        if (!isSuccess) {
            return next(
                NotFound("The user with the specified ID does not exist.")
            )
        }

        const user = await findById(req.params.id)
        return res.json(user)
    } catch (error) {
        next(error)
    }
})

export default apiRouter
