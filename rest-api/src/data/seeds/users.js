export const seed = knex =>
    knex("users")
        .truncate()
        .then(() =>
            knex("users").insert([
                {
                    name: "Samwise Gamgee",
                    bio: "Gardener and poet. Married to Rose Cotton"
                },
                {
                    name: "Frodo Baggins",
                    bio: "The ring bearer"
                }
            ])
        )
