"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  
  return (
    <nav className=' flex justify-between bg-gray-900 text-white px-4 items-center h-15'>

        
        <Link href={"/"} className="logo font-bold text-lg flex justify-center items-center gap-3">
          <img src="/tea.gif" alt="" width={44} />
          <span>GetMeAChai!</span>
        </Link>

      
      <div className='relative'>
        {session && <> <button onClick={()=> setShowdropdown(!showdropdown)} onBlur={()=> {setTimeout(() => {
          setShowdropdown(false)
        }, 100);}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white
         mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
          rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600
           dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email}
           <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
           fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
           d="m1 1 4 4 4-4"/>
          </svg>
          </button>

          <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[145px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <Link href="/dashboard" >Dashboard</Link>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <Link href="#" >Your Page</Link>
                </li>
                <li >
                  <button onClick={()=> signOut() } className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer" >Sign out</button>
                </li>
              </ul>
          </div></>
        }
        
        {session && <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500
            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
            font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>{signOut()}}>Logout</button>
        }

        {!session && <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500
            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
            font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar
