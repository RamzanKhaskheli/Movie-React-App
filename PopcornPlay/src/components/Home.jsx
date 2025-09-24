import React, { useEffect, useState } from 'react'
import SideNav from './screens/SideNav'
import TopNav from './screens/TopNav'
import axios from '../utils/axios'
import Header from './screens/Header'
import HorizentalCards from './screens/HorizentalCards'

const Home = () => {
    document.title = "PopCornPlay | HomePage"

   const [wallpaper, setWallpaper] = useState(null)
   const [trending, setTrending] = useState("")


   const GetHeaderWallpaper = async()=>{
            try {
                const {data} = await axios.get(`/trending/all/day`);
                let randomdata = data.results[(Math.random()*data.results.length).toFixed()];
                setWallpaper(randomdata);
          
            } catch (error) {
                console.log("Error: ", error)
            }
    };
   
    const GetTrending = async()=>{
            try {
                const {data} = await axios.get(`/trending/all/day`);
               
                setTrending(data);
          
            } catch (error) {
                console.log("Error: ", error)
            }
    };

    
    useEffect(()=>{
      !wallpaper && GetHeaderWallpaper()
      !trending && GetTrending()
    },[])
    // console.log(trending)



  return wallpaper && trending ? (
    <>
    <div className='flex w-screen h-screen'>
        <SideNav/>
        <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
          <TopNav/>
          <Header data={wallpaper}/>
          <HorizentalCards data={trending}/>
        </div>
    </div>
    </>
  ) : <h1>Loading</h1>
}

export default Home