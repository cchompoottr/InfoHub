// src/Register.js
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });



  return (
    <div className="flex flex-col items-start justify-start h-screen w-3/4 bg-white m-10">
        <h2 className="text-2xl font-bold">สร้างบัญชี</h2>
        <p className='mt-10'>หากคุณลงชื่อเข้าใช้พีซีที่ใช้ Windows แท็บเล็ต หรือโทรศัพท์ Xbox Live, Outlook.com หรือ OneDrive อยู่แล้ว <br/>
        ให้ใช้อีเมลแอดเดรสนั้นเพื่อ <span className='text-blue-600'>ลงชื่อเข้าใช้</span>หรือสร้างอีเมลแอดเดรส Outlook.com ใหม่</p>
    </div>

  );
};

export default Register;
