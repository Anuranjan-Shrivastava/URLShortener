import React from 'react'
import { useState } from 'react'

const UpdateURL = () => {
  const [oldUrl , setOldUrl] = useState('') ;
  const [newUrl , setNewUrl] = useState('') ;
  const [msg , setMsg] = useState(null) ;

  const handleButtonClick = async () => {
    const response = await fetch("http://localhost:8001/updateurl/?ourl=" + oldUrl + "&nurl=" + newUrl , {
      method : "Post"
    }) ;
    const data = await response.json() ;
    setMsg(data.message)
    
  }
  return (
    <div>
      <input 
        className="m-10 p-2 border-5 bg-slate-40 w-[400px] border-2"
        type = "text"
        placeholder="Please enter previous original URL"
        value={oldUrl}
        onChange={(e) => setOldUrl(e.target.value)}
      />
      <input 
        className="m-10 p-2 border-5 bg-slate-40 w-[400px] border-2"
        type = "text"
        placeholder="Please enter Current original URL"
        value={newUrl}
        onChange={(e) => setNewUrl(e.target.value)}
      />
      <button 
          className='border-2 bg-green-500 p-2 rounded-lg'
          onClick = {() => handleButtonClick() }
      >Update URL</button>


        {msg && <h3 className='m-10 p-2 border-5 bg-slate-100'>{msg}</h3>}
    </div>
  )
}

export default UpdateURL