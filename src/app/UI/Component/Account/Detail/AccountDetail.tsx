import { Button, TextField } from '@mui/material';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { encodeEmail } from '@/app/services/utils/encodeEmail';
import { useRouter } from 'next/navigation';

const AccountDetail = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    name: '',
    address: { city: '', street: '' },
    phone: '',
  });
const fetchUserInfo = async () => {
    try {
      const res = await fetch("/api/user");
      if (res.ok) {
        const data = await res.json();
        setUserInfo(data);
      } else {
        console.error('Failed to fetch user info');
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };
  useEffect(() => {
    if (status === 'authenticated') {
      fetchUserInfo();
    }
  }, [status]);
  // const encode = encodeEmail(userInfo.email);
  return (
    <div className='relative top-5 p-36'>
      {status === 'loading' && <div>Loading...</div>}
        <h1 className='subpixel-antialiased text-5xl tracking-wide font-medium '>Welcome {userInfo.name}</h1>
        <form className='w-auto mt-12'>
            <div className='flex flex-col items-start justify-start space-y-4'>
                <TextField id='name' name='name' label='Name' variant='outlined' fullWidth value={userInfo.name} />
                <TextField id='email' name='email' label='Email' variant='outlined' fullWidth value={userInfo.email} disabled={true}/>
                <TextField id='username' name='username' label='Username' variant='outlined' fullWidth value={userInfo.username} disabled={true}/>
                <TextField id='phone' name='phone' label='Phone' variant='outlined' fullWidth value={`+84 ${userInfo.phone}`} />
                <TextField id='city' name='city' label='City' variant='outlined' fullWidth value={userInfo.address.city} />
                <TextField id='street' name='street' label='Street' variant='outlined' fullWidth value={userInfo.address.street} />
            </div>
            <div className='flex flex-row items-start justify-between mt-12'>
              <Button variant='contained' color='primary' onClick={() => router.push('/account/edit')}>Edit</Button>
              <Button variant='contained' color='error'>Delete</Button>
            </div>
        </form>
    </div>
  )
}

export default AccountDetail
