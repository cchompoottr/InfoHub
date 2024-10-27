import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user'); // API เพื่อดึงข้อมูลผู้ใช้
                if (!response.ok) throw new Error('Failed to fetch user data');
                const data = await response.json();
                setUserInfo(data);
            } catch (error) {
                console.error(error);
                navigate('/login'); // หากไม่สามารถดึงข้อมูลได้ ให้ไปยังหน้า Login
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        // ลบ token หรือข้อมูลการล็อกอินจาก localStorage หรือ state ที่เก็บข้อมูลการล็อกอิน
        localStorage.removeItem('token'); // หากใช้ token
        // สามารถใช้ setUserInfo(null) หากใช้ state เพื่อจัดการผู้ใช้ล็อกอิน
        navigate('/login'); // ไปยังหน้า Login หลังจากออกจากระบบ
    };

    // แสดงผลโปรไฟล์
    if (!userInfo) return <div>Loading...</div>;

    return (
<div className='flex flex-col w-1/2 relative mt-20 mx-auto'>
    <h2 className="text-4xl font-bold">Account</h2>
    <h2 className="text-2xl text-blue-600 mt-5">ข้อมูลผู้ใช้</h2>
    <div className="flex items-center mt-10">
        <div className="circle mr-7">{userInfo.name.charAt(0)}</div> 
        <h5 className="text-2xl">{userInfo.name}</h5> 
    </div>
    <hr className="my-4 w-full border-gray-300" /> 

    <div className="flex mt-5">
        {/* คอลัมน์ซ้าย */}
        <div className="flex-1">
            <p className='font-medium text-gray-900'>ชื่อผู้ใช้</p>
            <p className='text-gray-400'>{userInfo.email}</p>
            <br />
            <p className='font-medium text-gray-900'>รหัสผ่าน</p>
            <p className='text-gray-400'>{userInfo.password}</p>
            <br />
            <p className='font-medium text-gray-900'>ประเทศ</p>
            <p className='text-gray-400'>Thailand</p>
            <br />
            <p className='font-medium text-gray-900'>วัน เดือน ปีเกิด</p>
            <p className='text-gray-400'>{userInfo.birthDate}</p>
        </div>

        {/* คอลัมน์ขวา */}
        <div className="flex-1 pl-7"> 
            <p className='font-medium text-gray-900'>เพศ</p>
            <p className='text-gray-400'>{userInfo.gender}</p>
            <br />
            <p className='font-medium text-gray-900'>รหัสประเทศ</p>
            <p className='text-gray-400'>(+66) ไทย</p>
            <br />
            <p className='font-medium text-gray-900'>หมายเลขโทรศัพท์</p>
            <p className='text-gray-400'>{userInfo.phoneNumber}</p>
        </div>
    </div>
    {/* ปุ่มออกจากระบบ */}
    <button 
        type="button" 
        className="absolute bottom-[-100px] right-5 w-[200px]  bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
        onClick={handleLogout}
    >
        ออกจากระบบ
    </button>
</div>

    );
};

export default Profile; 