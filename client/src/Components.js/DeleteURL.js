import React from 'react' ;
import  { useState } from 'react' ;

const DeleteURL = () => {
  const [url , setUrl] = useState('');
  const [msg , setMsg] = useState(null) ;


  const handleButtonClick = async () => {
   
    const response = await fetch("http://localhost:8001/delete/?url=" + url , {
      method : "Get"
    }) ;
    const data = await response.json() ;
    setMsg(data.message) ;
  }
  return (
    <div>
      <input 
        className="m-10 p-2 border-5 bg-slate-40 w-[300px border-2"
        type = "text"
        placeholder="Please enter your URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button 
          className='border-2 bg-green-500 p-2 rounded-lg'
          onClick = {() => handleButtonClick() }
      >Delete URL</button>

      {msg && <h3 className='m-10 p-2 border-5 bg-slate-100'>{msg}</h3>}
    </div>
  )
}

export default DeleteURL