import { dbUri } from "./config"

export const development = {
    client: "sqlite3",
    connection: { filename: dbUri },
    useNullAsDefault: true,
    migrations: {
        directory: "./data/migrations",
        tableName: "dbmigrations"
    },
    seeds: { directory: "./data/seeds" }
}
