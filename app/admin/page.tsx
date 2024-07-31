import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Admin = () => {
  return (
    <div className='mx-auto flex max-w-7xl flex-col space-x-14'>
        <header className='admin-header'>
            <Link href="/" className='cursor-pointer'>
                <Image 
                    src="/assets/icons/logo-full.svg"
                    height={32}
                    width={132}
                    alt="Logo"
                    className="h-8 w-fit"                
                />
            </Link>
            <p className='text-16-semibold'>Admin Dashboard</p>
        </header>
    </div>
  )
}

export default Admin