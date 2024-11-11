import React, { useState } from 'react'
import Input from './Input'

function Feedback() {
    const [fullName, setfullName] = useState()
    const [address, setAddress] = useState()
    const [email, setEmail] = useState()
    const [feedbacks, setFeedbacks] = useState()

  return (
    <div className='flex flex-col justify-center align-center mx-auto w-1/2 my-auto'>
        <div className='text-center text-3xl font-bold my-10'>Give us your Feedback</div>
        <div className='border border-grey-500 rounded-lg py-6 px-5 mb-4'>
           <form className='px-4'>
            <Input type={"text"} value={fullName} placeholder={"Enter your Full Name"} onchange={(e)=> setfullName(e.target.value)}/>
            <Input type={"text"} value={address} placeholder={"Enter your Address"} onchange={(e)=> setAddress(e.target.value)}/>
            <Input type={"email"} value={email} placeholder={"Enter your Email"} onchange={(e)=> setEmail(e.target.value)}/>
            {/* <div className='p-3 focus:ring-2 focus:ring-gray-700 border border-gray-400 rounded-lg outline-none h-80 mb-5 max-w-full mx-auto'>
                <Input type={"text"} value={feedbacks} placeholder={"Enter feedback... Maximum of 500 Words"} onchange={(e)=> setFeedbacks(e.target.value)}/>
            </div> */}
            <textarea value={feedbacks} placeholder={"Enter feedback... Maximum of 500 Words"} onchange={(e)=> setFeedbacks(e.target.value)} name="" className='p-3 focus:ring-2 focus:ring-gray-700 border border-gray-400 rounded-lg outline-none ml-3 mb-5 mx-auto' rows={2} cols={60} id=""/>
            <button className='border border-blue-500 hover:bg-blue-950 bg-blue-500 hover:scale-110 transition-all text-white rounded-xl flex justify-center m-3 p-3 w-40 align-middle mx-auto'>Submit Feedback</button>
           </form>
                
        </div>
    </div>
  )
}

export default Feedback