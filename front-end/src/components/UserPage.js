import React, { useEffect, useState } from "react"
import axios from "axios"

import User from "./User"
import LoadingIndicator from "./LoadingIndicator"

const UserPage = ({ match }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        axios
            .get(`/api/users/${match.params.id}`)
            .then(({ data }) => {
                setUser(data)
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
            .finally(() => setIsLoading(false))
    }, [match.params.id])

    if (isLoading) {
        return <LoadingIndicator />
    }

    if (!user) {
        return (
            <>
                <h1>{error.name}</h1>
                <p>{error.message}</p>
            </>
        )
    }

    return (
        <>
            <User {...user} />
        </>
    )
}

export default UserPage
