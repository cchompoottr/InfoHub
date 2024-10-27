const User = require('../models/User'); // นำเข้าตัวแบบผู้ใช้ (User model)

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, birthDay, birthMonth, birthYear, gender } = req.body;
        
        // ตรวจสอบและบันทึกผู้ใช้ใหม่
        const newUser = new User({ firstName, lastName, email, password, phone, birthDay, birthMonth, birthYear, gender });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed!' });
    }
};



module.exports = { registerUser };

