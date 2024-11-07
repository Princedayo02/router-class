import React from 'react'

function Input({onchange, type, value, placeholder}) {
  return ( 
    <div className='m-3 '>
    <input onChange={onchange} type={type} value={value} placeholder= {placeholder} className='p-3 focus:ring-1 focus:ring-blue-700 border border-blue-300 w-full rounded-lg outline-none' />
    </div>
  )
}

export default Input