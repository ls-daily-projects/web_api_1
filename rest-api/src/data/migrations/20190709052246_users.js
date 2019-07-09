export const up = knex =>
    knex.schema.createTable("users", users => {
        users.increments()
        users.string("name", 255).notNullable()
        users.text("bio")
        users.timestamps(true, true)
    })

export const down = knex => knex.schema.dropTableIfExists("users")
