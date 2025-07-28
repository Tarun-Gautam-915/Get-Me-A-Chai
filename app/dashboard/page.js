// "use client"
// import React from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import { useRouter } from 'next/navigation'

// const Dashboard = () => {
//    const { data: session } = useSession()
  
//       if(!session) {
//       const router = useRouter()
//       router.push('/login')
//     }
//   return (
//     <div>
//       hiiiiiiiiiiiiiiiii this is Dashboard
//     </div>
//   )
// }

// export default Dashboard

"use client"
import React, { useEffect } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  }, [session, router])

  return (
    <div>
      hiiiiiiiiiiiiiiiii this is Dashboard
    </div>
  )
}

export default Dashboard
