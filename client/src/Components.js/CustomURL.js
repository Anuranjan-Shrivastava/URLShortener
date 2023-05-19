import React, { useState } from 'react'

const CustomURL = () => {
    const [url , setUrl] = useState('') ;
    const [custom , setCustom] = useState('') ;
    const [msg , setMsg] = useState(null) ;

    const handleButtonClick = async () => {
       
        console.log(url , custom); 
        const response = await fetch("http://localhost:8001/customshorturl/?url=" + url + "&curl=" + custom , {
          method : "Post"
        }) ;
        const data = await response.json() ;
        if(data.success){
            setMsg(data.url) ;
        }else{
            setMsg(data.message)
        }
      }
  
  return (
    <div>
         <input 
        className="m-10 p-2 border-5 bg-slate-40 w-[400px] border-2"
        type = "text"
        placeholder="Please enter original URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
       <input 
        className="m-10 p-2 border-5 bg-slate-40 w-[400px] border-2"
        type = "text"
        placeholder="Please enter URL you want"
        value={custom}
        onChange={(e) => setCustom(e.target.value)}
      />
      <button 
          className='border-2 bg-green-500 p-2 rounded-lg'
          onClick = {() => handleButtonClick() }
      >Get custom URL</button>

      {msg && <h3 className='m-10 p-2 border-5 bg-slate-100'>{msg}</h3>}
    </div>
  )
}

export default CustomURL