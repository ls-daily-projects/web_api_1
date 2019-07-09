import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { withRouter } from "react-router-dom"

const User = ({ id, name, bio, created_at, history }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`/api/users/${id}`)
            history.push("/")
        } catch (error) {
            alert(`Can't delete ${name} broooo!`)
            console.log(error)
        }
    }
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
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default withRouter(User)
