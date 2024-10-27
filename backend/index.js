// index.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); // นำเข้า authRoutes

const app = express();
app.use(express.json()); // เพื่อให้สามารถอ่าน JSON จาก request body ได้

// เชื่อมต่อ MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// ใช้ routes
app.use('/api', authRoutes); // ตั้งค่า base URL สำหรับ routes

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
