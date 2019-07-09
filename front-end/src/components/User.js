import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { withRouter } from "react-router-dom"

import UserForm from "./UserForm"

const User = ({ id, name, bio, created_at, history }) => {
    const [user, setUser] = useState({ id, name, bio, created_at })
    const [isEditMode, setIsEditMode] = useState(false)

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/users/${id}`)
            history.push("/")
        } catch (error) {
            alert(`Can't delete ${name} broooo!`)
            console.log(error)
        }
    }

    const handleEdit = () => {
        setIsEditMode(true)
    }

    const handleUpdated = async newUser => {
        setIsEditMode(false)

        try {
            const { data } = await axios.put(`/api/users/${id}`, newUser)
            setUser(data)
        } catch (error) {
            setUser(user)
            alert(`Can't update ${name} broooo!`)
            console.log(error)
        }
    }

    if (isEditMode) {
        return <UserForm user={user} onSubmit={handleUpdated} />
    }

    return (
        <li>
            <Link to={`/users/${id}`}>
                <h3>{user.name}</h3>
                <p>{user.bio}</p>
                <small>
                    <span>Created on </span>
                    {new Date(user.created_at).toLocaleDateString()}
                </small>
            </Link>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default withRouter(User)
