'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter();
  const isLoggedIn = false;
  const handleNavigation = () => {
    if(isLoggedIn){
      router.push('/about/address')
    }else {
      router.push('/')
    }
  }
  return (
   
   <> 
   <div>about</div>
   <Link href="/about/address">Address Page</Link>
   <button type='button' onClick={handleNavigation}>Click to navigate</button>
   </>
  )
}

export default page