import React from 'react'

const Selector = ({setTab}) => {
  return (
    <div>
        <ul>
            <button className='m-5 p-5 border-5 bg-green-300 rounder-lg shadow-lg' onClick={() => setTab("generate")}> URL Generation</button>
            <button className='m-5 p-5 border-5 bg-green-300 rounder-lg shadow-lg' onClick={() => setTab("custom")}> Custom URL Generation</button>
            <button className='m-5 p-5 border-5 bg-green-300 rounder-lg shadow-lg' onClick={() => setTab("update")}> Update existing URL</button>
            <button className='m-5 p-5 border-5 bg-green-300 rounder-lg shadow-lg' onClick={() => setTab("delete")}> Delete URL</button>
        </ul>
    </div>
  )
}

export default Selector