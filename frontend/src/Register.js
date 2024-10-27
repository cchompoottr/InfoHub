//register
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      gender: '',
 
    });

    const [loading, setLoading] = useState(false); // สถานะการโหลด
    const [error, setError] = useState(null); // สถานะข้อผิดพลาด

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        console.log(formData);
        
        try {
            const response = await fetch('http://localhost:5001/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                    phone: formData.phone,
                    birthDay: formData.birthDay,
                    birthMonth: formData.birthMonth,
                    birthYear: formData.birthYear,
                    gender: formData.gender,

                }),
            });

            if (response.ok) {
                navigate('/profile'); // ไปยังหน้าโปรไฟล์หลังจากสมัครสมาชิกสำเร็จ
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Registration failed'); // จัดการข้อผิดพลาด
            }
        } catch (error) {
            setError('Error: ' + error.message);
        } finally {
            setLoading(false); // สิ้นสุดการโหลด
        }
    };

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

        
    <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-3/4">
        {/* ชื่อจริง */}
        <div className="sm:col-span-3">
          <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">ชื่อจริง</label>
          <div className="mt-2">
            <input type="text" name="firstName" id="firstName" autoComplete="given-name" value={formData.firstName} onChange={handleChange} className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>
        {/* นามสกุล */}
        <div className="sm:col-span-3">
          <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">นามสกุล</label>
          <div className="mt-2">
            <input type="text" name="lastName" id="lastName" autoComplete="family-name" value={formData.lastName} onChange={handleChange}  className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>
        {/* ชื่อผู้ใช้ */}
        <div className="sm:col-span-6">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">ชื่อผู้ใช้</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" placeholder=" อีเมลใหม่" value={formData.email} onChange={handleChange}  className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
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
                    value={formData.password} 
                    onChange={handleChange} 
                    className="w-[800px] block border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                />
            </div>
            <p className="mt-1 text-sm text-gray-500">อย่างน้อย 8 ตัวอักษรและตัวพิมพ์ใหญ่-เล็กต้องตรงกัน</p>
        </div>

        {/* ประเทศ */}
        <div className="sm:col-span-6">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">ประเทศ/ภูมิภาค</label>
          <div className="mt-2">
            <select id="country" name="country" autoComplete="country-name" value={formData.country} onChange={handleChange} className="w-[800px] block border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>Thailand</option>
            </select>
          </div>
        </div>
        {/* วัน เดือน ปีเกิด */}
        <div className="sm:flex space-x-4 w-[800px]"> 
            <div className="flex-1">
                <label htmlFor="birthDay" className="block text-sm font-medium leading-6 text-gray-900">วันเกิด</label> 
                <div className="mt-2">
                    <select 
                        name="birthDay" 
                        id="birthDay" 
                        autoComplete="birth-day"
                        className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-gray-400"
                        value={formData.birthDay} 
                        onChange={handleChange} 
                        required
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
                        name="birthMonth" 
                        id="birthMonth" 
                        autoComplete="birthMonth"
                        className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={formData.birthMonth} 
                        onChange={handleChange} 
                        required
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
                        name="birthYear" 
                        id="birthYear" 
                        autoComplete="birthYear"
                        className="block w-full border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={formData.birthYear} 
                        onChange={handleChange} 
                        required
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
                    value={formData.gender} 
                    onChange={handleChange}
                    required
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
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-[800px] block border-[1.25px] border-slate-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                />
            </div>
        </div>
    </form>
    <p className='mt-10'>การคลิก<b>สร้างบัญชี</b>หมายความว่าคุณยอมรับ<span className='text-blue-600'>ข้อตกลงการใช้บริการของ Microsoft</span>และ<span className='text-blue-600'>คำชี้แจงสิทธิส่วนบุคคลและคุกกี้</span></p>
    <div className="sm:col-span-6">
        <button 
            type="submit" 
            onClick={handleSubmit}
            disabled={loading}
            className="w-[800px] bg-blue-600 mt-5 mb-10 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
            
        >
         {loading ? 'Registering...' : 'สร้างบัญชี'}
        </button>
        </div>
    </div>
</div>

  );
};

export default Register;
