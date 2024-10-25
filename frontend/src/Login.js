import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

    <div className='flex items-center justify-center w-full h-screen bg-gray-200'
    style={{ backgroundImage: 'url(/login_screen.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className='flex flex-col items-center justify-center bg-white p-10'>
            <img src="/Microsoft_logo.png" alt="Microsoft Logo" className="mt-5 mb-10 w-[120px] h-auto"/>
            <h2 className="text-4xl font-bold mb-2">ลงชื่อเข้าใช้</h2>
            <p className='mb-10 text-inherit'>ใช้บัญชี Microsoft ของคุณ</p>
             {/* อีเมล */}
            <div class="sm:col-span-6">
                <div class="mt-2 w-[350px]">
                    <input id="email" name="email" type="email" autocomplete="email" placeholder=" someone@example.com" className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
            {/* รหัสผ่าน */}
            <div className="sm:col-span-6">
                <div className="mt-2 w-[350px]">
                    <input
                        id="password" 
                        name="password"
                        type="password"
                        autoComplete="current-password" 
                        placeholder=" รหัสผ่าน"
                        className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            {/* ปุ่มลงชื่อเข้าใช้ */}
            <button 
                type="submit" 
                className="w-[350px] bg-blue-500 mt-5 mb-10 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
            >
                ลงชื่อเข้าใช้
            </button>
            <p className='mb-5'>ยังไม่มีบัญชีหรอ
                <a href="/register" className='text-blue-600'> สร้างได้เลย</a>
            </p>
        </div>
    </div>
    );
};

export default Login; 