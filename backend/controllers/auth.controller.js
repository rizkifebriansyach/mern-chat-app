import bcrypt from "bcryptjs"

import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const signUp = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body

        if (password !== confirmPassword) {
            res.status(400).json({ error: "Password don't match!" })
        }

        const user = await User.findOne({ username })

        if (user) {
            res.status(400).json({ error: "Username already exist" })
        }

        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            // generate JWT Token
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json("Invalid user data!")
        }
    } catch (error) {
        console.log("Error in Signup controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }

}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" })
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: username,
            profilePic: user.profilePic
        })
    } catch (error) {
        console.log("Error in Login controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
        console.log("Error in Logout controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
    console.log("logoutUser")
}