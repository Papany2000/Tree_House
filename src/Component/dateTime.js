import React from 'react'


function DateTime({...date}) {

  return (
    <div>
   <div className={'border-2 border-red-600 shadow-2xl shadow-zinc-900 rounded-xl text-white bg-slate-500 text-xl w-60 h-16  flex flex-col justify-between'}><div className='flex justify-between'><span>{date.date.D}</span><span>{date.date.mt}</span><span>{date.date.Y} г.</span><span>{date.date.h}:{date.date.m}</span></div><span>{date.date.d}</span></div>
  
    </div>
  )
}

export default DateTime;