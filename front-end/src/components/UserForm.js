import React, { useState } from "react"

const UserForm = ({ user, onSubmit }) => {
    const [name, setName] = useState(user ? user.name : "")
    const [bio, setBio] = useState(user ? user.bio : "")

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit({ name, bio })
        setName("")
        setBio("")
    }

    const handleChange = e => {
        const value = e.target.value
        switch (e.target.name) {
            case "name":
                setName(value)
                break
            case "bio":
                setBio(value)
            default:
                break
        }
    }

    return (
        <form>
            <input
                type="text"
                placeholder="What's the user's name?"
                name="name"
                value={name}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="What's the user's bio?"
                name="bio"
                value={bio}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Done</button>
        </form>
    )
}

export default UserForm
