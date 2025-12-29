import React from 'react'

const Previous = (props) => {
    const pre=()=>{
        if (props.page>1){
            props.setUserdata([])
            props.setPage(props.page-1)
        }
        
    }
  return (
    <div>
      <button 
      onClick={pre} 
      className={`bg-yellow-500 text-lg  text-black font-bold py-2 px-4 ${props.page<=1 ?"opacity-50 cursor-not-allowed ":"opacity-100 cursor-pointer active:scale-95"}`}>Previous</button>
    </div>
  )
}

export default Previous
