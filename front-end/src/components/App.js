import React, { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
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

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(({ id, name, bio, created_at }) => (
                    <li key={id}>
                        <h3>{name}</h3>
                        <p>{bio}</p>
                        <small>
                            <span>Created on </span>
                            {new Date(created_at).toLocaleDateString()}
                        </small>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
