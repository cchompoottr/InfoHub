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
    <img src="/Microsoft_logo.png" alt="Microsoft Logo" className="mt-10 mb-10 w-[120px] h-auto"/>
    <h2 className="text-4xl font-bold">สร้างบัญชี</h2>
    <p className='mt-10'>หากคุณลงชื่อเข้าใช้พีซีที่ใช้ Windows แท็บเล็ต หรือโทรศัพท์ Xbox Live, Outlook.com หรือ OneDrive อยู่แล้ว <br/>
    ให้ใช้อีเมลแอดเดรสนั้นเพื่อ<span className='text-blue-600'>ลงชื่อเข้าใช้</span>หรือสร้างอีเมลแอดเดรส Outlook.com ใหม่</p>

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-3/4">
        {/* ชื่อจริง */}
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">ชื่อจริง</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        {/* นามสกุล */}
        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">นามสกุล</label>
          <div class="mt-2">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        {/* ชื่อผู้ใช้ */}
        <div class="sm:col-span-6">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">ชื่อผู้ใช้</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" placeholder=" อีเมลใหม่                                                                                                                                                                           @outlook.co.th" class="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        {/* ประเทศ */}
        <div class="sm:col-span-6">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">ประเทศ/ภูมิภาค</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class="w-[800px] block border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>Thailand</option>
            </select>
          </div>
        </div>
        {/* วัน เดือน ปีเกิด */}
        <div className="sm:flex space-x-4 w-[800px]"> 
            <div className="flex-1">
                <label htmlFor="birth-day" className="block text-sm font-medium leading-6 text-gray-900">วันเกิด</label> 
                <div className="mt-2">
                    <select 
                        name="birth-day" 
                        id="birth-day" 
                        defaultValue="" 
                        className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option value="" disabled>วันที่</option>
                        {[...Array(31)].map((_, index) => (
                            <option key={index} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex-1">
                <div className="mt-8">
                    <select 
                        name="birth-month" 
                        id="birth-month" 
                        defaultValue="" 
                        className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option value="" disabled>เดือน</option>
                        {[
                            "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", 
                            "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", 
                            "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
                        ].map((month, index) => (
                            <option key={index} value={index + 1}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex-1">
                <div className="mt-8">
                    <select 
                        name="birth-year" 
                        id="birth-year" 
                        defaultValue="" 
                        className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option value="" disabled>ปี</option>
                        {[...Array(100)].map((_, index) => (
                            <option key={index} value={new Date().getFullYear() - index}>
                                {new Date().getFullYear() - index}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>







    </div>
</div>

  );
};

export default Register;
