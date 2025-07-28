import React from 'react'

const username = ({params}) => {
  return (
    <>
    
    <div className='cover w-full bg-red-50 relative'>
      <img className='object-cover w-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/18.gif?token-hash=mwdFkhfcK_xNSCIBXxKJdmxkF7AfAw8JXOtiRF3bT5I%3D&token-time=1754265600" alt="cover-photo" />
      <div className="absolute -bottom-15 right-[43%] rounded-full border-2 border-white">
        <img className="rounded-full" height={180} width={180} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TTbUfyAAANbPkNeRdfx7c_iMXWhFPhw5Rg&s" alt="pic" />
      </div>
    </div>

    <div className="info flex justify-center items-center my-18 flex-col gap-2">
      <div className='font-bold'>
        @{params.username}
      </div>
      <div className='text-slate-400'>
        Creating Animated art for VTT's
      </div>
      <div className='text-slate-400'>
        19,182 members · 100 Posts · $18,690/release
      </div>

      <div className="payment flex gap-2 w-[80%] mt-10">
        <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10">
          {/* Show list of all supporters as leaderboard */}
          <h2 className='font-bold text-2xl my-5'>Supporters</h2>
          <ul className='mx-5 text-lg'>
            <li className='flex gap-2 my-4 items-center'>
              <img className='bg-white rounded-full border-2 border-black' width={40} src="avatar.gif" alt="user avatar" />
              <span>Shubham donated <span className='font-bold'>$20</span> with message "I support you bro. Lots of ❤️"</span>
            </li>
            <li className='flex gap-2 my-4 items-center'>
              <img className='bg-white rounded-full border-2 border-black' width={40} src="avatar.gif" alt="user avatar" />
              <span>Rohan donated <span className='font-bold'>$10</span> with message "I support you bro. Lots of ❤️"</span>
            </li>
            <li className='flex gap-2 my-4 items-center'>
              <img className='bg-white rounded-full border-2 border-black' width={40} src="avatar.gif" alt="user avatar" />
              <span>Vishal donated <span className='font-bold'>$70</span> with message "I support you bro. Lots of ❤️"</span>
            </li>
          </ul>
        </div>
        <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">
          <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
          <div className="flex gap-2 flex-col">
            <input className='w-full rounded-lg p-3 bg-slate-800' type="text" name="" id="" placeholder='Enter Name' />
            <input className='w-full rounded-lg p-3 bg-slate-800' type="text" name="" id="" placeholder='Enter Message' />
            <input className='w-full rounded-lg p-3 bg-slate-800' type="text" name="" id="" placeholder='Enter Amount' />
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Pay</button>
          </div>
          {/* or choose from these amounts */}
          <div className="flex gap-2 mt-5">
            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer'>Pay $20</button>
            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer'>Pay $50</button>
            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer'>Pay $100</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default username
