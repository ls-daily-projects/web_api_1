import db from "../data"

export const find = () => db("users")

export const findById = id =>
    db("users")
        .where({ id: Number(id) })
        .first()

export const insert = user =>
    db("users")
        .insert(user)
        .then(ids => ({ id: ids[0] }))

export const update = (id, user) =>
    db("users")
        .where("id", Number(id))
        .update(user)

export const remove = id =>
    db("users")
        .where("id", Number(id))
        .del()
