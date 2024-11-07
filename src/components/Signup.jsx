import React, { useState } from 'react'
import Input from "./Input.jsx"
function Signup() {
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [lastname, setLastname] = useState()
    const [firstname, setFirstname] = useState()
    const [gender, setGender] = useState()
  return (
    <div className='flex flex-col justify-center align-center mx-auto w-1/2 my-10'>
        <div className='text-center text-2xl font-bold my-10'>Register your account</div>
        <div className='border border-grey-500 rounded-lg py-6 px-5'>
           <form>
            <Input type={"text"} value={firstname} placeholder={"Enter Firstname"} onchange={(e)=> setFirstname(e.target.value)}/>
            <Input type={"text"} value={lastname} placeholder={"Enter Lastname"} onchange={(e)=> setLastname(e.target.value)}/>
            <Input type={"text"} value={gender} placeholder={"Gender"} onchange={(e)=> setGender(e.target.value)}/>
            <Input type={"email"} value={email} placeholder={"Enter Email"} onchange={(e)=> setEmail(e.target.value)}/>
            <Input type={"password"} value={password} placeholder={"Enter password"} onchange={(e)=> setPassword(e.target.value)}/>
            <Input type={"password"} value={password} placeholder={"Confirm Password"} onchange={(e)=> setPassword(e.target.value)}/>
            <button className='border border-blue-500 hover:bg-blue-950 bg-blue-500 hover:scale-110 transition-all text-white rounded-xl flex justify-center m-3 p-3 w-40 align-middle mx-auto'>SignUp</button>
           </form>
                
        </div>
    </div>
  )
}

export default Signup