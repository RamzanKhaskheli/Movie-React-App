import React from 'react'
import SideNav from './screens/SideNav'
import TopNav from './screens/TopNav'

const Home = () => {
    document.title = "PopCornPlay | HomePage"
  return (
    <>
    <div className='flex w-screen h-screen'>
        <SideNav/>
        <div className='w-[80%] h-full '>
          <TopNav/>
        </div>
    </div>
    </>
  )
}

export default Home