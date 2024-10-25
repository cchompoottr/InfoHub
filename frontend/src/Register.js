import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });



  return (
<div className='flex items-center justify-center w-full'>
    <div className="flex flex-col items-start justify-start h-screen w-3/4 bg-white m-10 ml-[340px]">
        <img src="/Microsoft_logo.png" alt="Microsoft Logo" className="mt-10 mb-10 w-[120px] h-auto"/>
        <h2 className="text-4xl font-bold">สร้างบัญชี</h2>
        <p className='mt-10'>
            หากคุณลงชื่อเข้าใช้พีซีที่ใช้ Windows แท็บเล็ต หรือโทรศัพท์ Xbox Live, Outlook.com หรือ OneDrive อยู่แล้ว <br />
            ให้ใช้อีเมลแอดเดรสนั้นเพื่อ 
            <Link to="/login" className='text-blue-600'>ลงชื่อเข้าใช้</Link>
            หรือสร้างอีเมลแอดเดรส Outlook.com ใหม่
        </p>

        
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
            <input id="email" name="email" type="email" autocomplete="email" placeholder=" อีเมลใหม่" className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        {/* รหัสผ่าน */}
        <div className="sm:col-span-6">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">รหัสผ่าน</label>
            <div className="mt-2">
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    autoComplete="new-password" 
                    placeholder="" 
                    className="w-[800px] block border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <p className="mt-1 text-sm text-gray-500">อย่างน้อย 8 ตัวอักษรและตัวพิมพ์ใหญ่-เล็กต้องตรงกัน</p>
        </div>
        {/* คอนเฟิร์มรหัสผ่าน */}
        <div className="sm:col-span-6">
            <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">ป้อนรหัสผ่านอีกครั้ง</label>
            <div className="mt-2">
                <input 
                    type="password" 
                    id="confirm-password" 
                    name="confirm-password" 
                    autoComplete="new-password" 
                    placeholder="" 
                    className="w-[800px] block border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                        className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-gray-400"
                        defaultValue="" 
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
                        className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue="" 
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
                        className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue="" 
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
        {/* เพศ */}
        <div className="sm:col-span-6">
            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">เพศ</label>
            <div className="mt-2">
                <select 
                    id="gender" 
                    name="gender" 
                    autoComplete="gender" 
                    className="w-[800px] block border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-gray-400"
                    defaultValue=""  
                >
                    <option value="" disabled>เลือก...</option> 
                    <option value="male">ชาย</option>
                    <option value="female">หญิง</option>
                    <option value="other">อื่นๆ</option>
                </select>
            </div>
        </div>
        {/* รหัสประเทศ */}
        <div className="sm:col-span-6">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">รหัสประเทศ</label>
            <div className="mt-2">
                <select 
                    id="country" 
                    name="country" 
                    autoComplete="country" 
                    className="w-[800px] block border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue=""  
                >
                    <option value="" disabled></option> 
                    <option value="thailand">ไทย (+66)</option>
                </select>
            </div>
        </div>
        {/* หมายเลขโทรศัพท์ */}
        <div className="sm:col-span-6">
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">หมายเลขโทรศัพท์</label>
            <div className="mt-2">
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    autoComplete="tel" 
                    className="w-[800px] block border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    </div>
    <p className='mt-10'>การคลิก<b>สร้างบัญชี</b>หมายความว่าคุณยอมรับ<span className='text-blue-600'>ข้อตกลงการใช้บริการของ Microsoft</span>และ<span className='text-blue-600'>คำชี้แจงสิทธิส่วนบุคคลและคุกกี้</span></p>
    <div className="sm:col-span-6">
        <button 
            type="submit" 
            className="w-[800px] bg-blue-600 mt-5 mb-10 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
        >
            สร้างบัญชี
        </button>
        </div>
    </div>
</div>

  );
};

export default Register;
