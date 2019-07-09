import React, { useState } from "react"

const UserForm = ({ user, onSubmit }) => {
    const [{ name, bio }, setUser] = useState({
        name: user.name,
        bio: user.bio
    })

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit({ name, bio })
    }

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <form>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
            />
            <input type="text" name="bio" value={bio} onChange={handleChange} />
            <button onClick={handleSubmit}>Done</button>
        </form>
    )
}

export default UserForm
