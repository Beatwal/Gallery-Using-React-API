import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './components/Card'

const App = () => {
  const [userdata, setUserdata] = useState([])
  const [page, setPage] = useState(1)


  const getdata=async()=>{
    let user=await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
   
    setUserdata(user.data)
    console.log(userdata)
  }
    useEffect(()=>{
   getdata()
  },[page])
  return (
    <div className='min-h-screen  bg-black'>
     <Card userdata={userdata} setUserdata={setUserdata} page={page} setPage={setPage}/>
    </div>
  )
}

export default App
