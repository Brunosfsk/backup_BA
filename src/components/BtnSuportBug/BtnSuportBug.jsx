import { Bot } from 'lucide-react'
import React from 'react'

export default function BtnSuportBug() {

    const openSuport = () => {
        alert('btn ok')
    }

  return (
    <button onClick={openSuport} className='w-20 h-20 p-2 rounded-full bg-blue-600 text-white fixed right-8 bottom-8 flex flex-col justify-center items-center shadow-md'>
        <Bot size={36}/>
        {/* <div>Suporte</div> */}
    </button>
  )
}
