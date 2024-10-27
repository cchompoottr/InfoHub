// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// จัดการคำขอ OPTIONS สำหรับเส้นทางลงทะเบียน
router.options('/register', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});

// ตัวอย่างเส้นทางสำหรับลงทะเบียนผู้ใช้
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, phone, birthDay, birthMonth, birthYear, gender } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'อีเมลนี้ถูกใช้แล้ว' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName, lastName, email, password: hashedPassword, phone, birthDay, birthMonth, birthYear, gender
        });

        await newUser.save();
        res.status(201).json({ message: 'ลงทะเบียนสำเร็จ!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการลงทะเบียน' });
    }
});

module.exports = router;
