import React from 'react'
import { useState } from 'react';

const GenerateURL = () => {

    const [url , setUrl ] = useState('') ;
    const [shortUrl , setShortUrl] = useState(null) ;

    const handleButtonClick = async () => {
      
      const response = await fetch("http://localhost:8001/shorturl/?url=" + url , {
        method : "Post"
      }) ;
      const data = await response.json() ;
      console.log(data) ;
      setShortUrl(data.url) ;
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
      >Get URL</button>
      
      {shortUrl && <h3 className='m-10 p-2 border-5 bg-slate-100'>{shortUrl}</h3>}

    </div>

  )
}

export default GenerateURL ;