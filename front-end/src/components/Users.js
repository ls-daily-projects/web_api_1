import React, { useState, useEffect } from "react"
import axios from "axios"

import User from "./User"
import LoadingIndicator from "./LoadingIndicator"

const Users = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get("/api/users")
            .then(({ data }) => {
                setUsers(data)
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    if (isLoading) {
        return <LoadingIndicator />
    }
    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <User key={user.id} {...user} />
                ))}
            </ul>
        </>
    )
}

export default Users
