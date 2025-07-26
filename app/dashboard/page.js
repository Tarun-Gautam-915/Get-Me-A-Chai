"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const dashboard = () => {
   const { data: session } = useSession()
  
      if(!session) {
      const router = useRouter()
      router.push('/login')
    }
  return (
    <div>
      hiiiiiiiiiiiiiiiii this is dashboard
    </div>
  )
}

export default dashboard
