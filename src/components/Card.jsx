import React from 'react'
import Previous from './Previous'
import Next from './Next'

const Card = (props) => {
    let message="Loadding..."
  return (<div className='min-w-screen min-h-screen relative'>
    <div className='text-white flex flex-wrap px-8 py-6 gap-2.5 h-[90%] w-screen '>
        
      { props.userdata.length>0?(
        props.userdata.map((e,idx)=>{
            return<a key={idx} href={e.url} target='_blank'>
                <div className='w-65 h-55 object-cover  rounded-2xl overflow-hidden'>
                <img className='w-full h-full object-cover' src={e.download_url} alt="" />
                </div>
                  <h2>{e.author}</h2>
                  </a>
                
        })):(<h2 className='text-2xl font-bold m-auto h-full mt-64 flex items-center justify-center   text-gray-600'>{message}</h2>)
        
      }
  
    </div>
    <div className='h-1/10 m-5 flex w-full justify-center items-center gap-2.5 text-white absolute bottom-0'>
        <Previous page={props.page} setPage={props.setPage} setUserdata={props.setUserdata}/>
        <h2>Page {props.page}</h2>
      <Next page={props.page} setPage={props.setPage} setUserdata={props.setUserdata}/>
      </div>
    </div>
  )
}

export default Card
