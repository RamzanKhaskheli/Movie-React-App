import React from 'react'

const HorizentalCards = ({data}) => {
  console.log(data)
  return (
    <div className='w-full h-[40vh] p-5'>
      <div className="mb-5">

      <h1 className=' text-zinc-300 text-3xl font-semibold'>Trending</h1>
      </div>

      <div className='w-full h-[100%] bg-yellow-300 flex'>
        {data.map((d,i)=>(
          <div key={i} className='w-[15%] h-[100%] bg-lime-400'>
            {d.title || d.name || d.original_name || d.original_title}
          </div>
        ))}
      </div>

    </div>
  )
}

export default HorizentalCards