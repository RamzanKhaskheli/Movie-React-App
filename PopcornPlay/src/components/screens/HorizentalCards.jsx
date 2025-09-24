import React from 'react'

const HorizentalCards = ({data}) => {
  return (
    <div className='w-full h-[40vh] p-5'>
      <div className="mb-5">

      <h1 className='\ text-zinc-300 text-3xl font-semibold'>Trending</h1>
      </div>

      <div className='w-full'>
        {data.map((d,i)=>(
          <div key={i} className=''>
            {d.title || d.name || d.original_name || d.original_title}
          </div>
        ))}
      </div>

    </div>
  )
}

export default HorizentalCards