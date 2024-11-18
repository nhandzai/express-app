const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../models');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: 'User registered successfully.', user });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: 'Email already in use.' });
        }
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

module.exports = router;
