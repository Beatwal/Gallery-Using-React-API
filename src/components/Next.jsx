import React from 'react'

const Next = (props) => {
    const next=()=>{
            props.setUserdata([])
           props.setPage(props.page+1)
       
   }
  return (
    <div>
      <button onClick={next} className='cursor-pointer bg-yellow-500 text-lg text-black font-bold py-2 px-7'>Next</button>
    </div>
  )
}

export default Next
