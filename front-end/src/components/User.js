import React from "react"
import { Link } from "react-router-dom"

const User = ({ id, name, bio, created_at }) => {
    return (
        <li>
            <Link to={`/users/${id}`}>
                <h3>{name}</h3>
                <p>{bio}</p>
                <small>
                    <span>Created on </span>
                    {new Date(created_at).toLocaleDateString()}
                </small>
            </Link>
        </li>
    )
}

export default User
