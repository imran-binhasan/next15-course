'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function 
() {
  const pathname = usePathname();
 if(!pathname.includes("dashboard")){
  return (
    <nav>
        <ul className='flex justify-between'>
          <Link href={'/'}>Home</Link>
          <Link href={'/services'}>Services</Link>
          <Link href={'/about'}>About</Link>
        </ul>
    </nav>
  )
 }
}
