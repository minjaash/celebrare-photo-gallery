import React from 'react'

const Photo = ({photo,dispatch,isFavourite}) => {
    const FavouriteHandler=()=>{
        dispatch({
                  type: "TOGGLE_FAVOURITE",
                  id: photo.id,
                })
    }
  return (
    <div className='border-2 border-pink-500 bg-gray-500 gap-2 p-2 rounded-lg '>
        <img className='w-full h-60 object-cover'
         src={photo.download_url} 
         
         />
         <div className='flex justify-between'>
         <p className='text-black-400 font-sm'>{photo.author}</p>
<button
      onClick={() => FavouriteHandler(photo.id)}
      className={` pb-2  transition-colors ${
        isFavourite ? "text-red-500" : "text-pink-200"
      }`}
    >
      {isFavourite ? "Added to favourite ♥" :"♡" }
    </button>         
    </div>
    </div>
  )
}

export default Photo