import db from "../data"

const users = db("users")

export const find = () => users
export const findById = id => users.where({ id: Number(id) }).first()
export const insert = user => users.insert(user).then(ids => ({ id: ids[0] }))
export const update = (id, user) => users.where("id", Number(id)).update(user)
export const remove = id => users.where("id", Number(id)).del()
