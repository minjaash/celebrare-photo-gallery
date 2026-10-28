import React, { useState } from 'react'

const SearchBox = ({SearchHandler}) => {
    

  return (
    <div className=' inline-flex  align-center gap-2 border-3 border-blue-300 bg-cyan-300'>
        <span className='border-1 border-blue-200 bg-blue-100 rounded p-1'>Search</span>
        <input className='w-80 border-2 border-pink-300 rounded bg-gray-100 p-1 focus:outline-pink-500' type='text' name='searchText' placeholder=' type what you are looking for' onChange={(e)=>SearchHandler(e)}></input>
    </div>
  )
}

export default SearchBox