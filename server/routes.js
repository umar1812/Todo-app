const express = require('express');
const router = express.Router();
const User = require('./db/model/userSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            password: req.body.password
        })
        const newUser = await user.save()
        console.log(newUser);
        res.status(201).send("New user added successfully")
    } catch (err) {
        res.status(500).send()
    }
})

router.post('/login', async (req, res) => {
    console.log(req.body)
    try {
        const check = await User.findOne({ name: req.body.name })
        if (check) {
            let match = await bcrypt.compare(req.body.password, check.password)
            if (match) {
                const token = jwt.sign({ name: check.name }, process.env.SECRET_KEY);
                console.log("Logged in")
                res.status(200).send(token);
            } else {
                res.status(401).send("Invalid password")
            }
        } else {
            res.status(400).send("Invalid credentials")
        }

    } catch (error) {
        res.status(401).send(error.message)
    }
})




module.exports = router;