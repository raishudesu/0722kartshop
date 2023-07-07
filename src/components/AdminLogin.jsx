import React from 'react'

const AdminLogin = () => {
  return (
    <div className='w-full h-screen'>
      <div className='h-screen flex justify-center items-center'>
        <div className='flex flex-col gap-4 justify-center items-center max-h-fit max-w-fit p-10 rounded-lg shadow-lg'>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <h1 className='font-bubblegum text-7xl font-bold text-[#D77FA1]'>kart.</h1>
                <h1 className='text-lg font-normal'>Admin Login</h1>
            </div>
            <form action="" className='flex flex-col gap-2 justify-center items-start '>
               <input type="email" placeholder='Email' className='p-1 border-2 border-gray-300 rounded-md outline-[#D77FA1]' />
               <input type="password" placeholder='Password' className='p-1 border-2 border-gray-300 rounded-md outline-[#D77FA1]' />
               <button type='submit' className='bg-[#D77FA1] py-2 rounded-lg text-white self-center w-full'>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
