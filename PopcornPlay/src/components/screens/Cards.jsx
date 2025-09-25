import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data}) => {
  return (
    <div>
        {data.map((c,i)=>{
            return <Link key={i} className='w-[25vh]'>
                {c.name || c.title || c.original_name || c.original_title}
            </Link>
        })}
    </div>
  )
}

export default Cards