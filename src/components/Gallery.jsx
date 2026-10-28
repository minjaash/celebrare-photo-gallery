import React, { useEffect, useReducer } from 'react';
import Photo from './Photo';
import favouritesReducer from '../reducers/favouritesReducer';
const Gallery = ({photos,loading,error}) => {
     const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    () => {
      try {
        return JSON.parse(localStorage.getItem("favourites")) || [];
      } catch {
        return [];
      }
    }
    
  );
  //storing updated favourite photos in local Storage
     useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

    
     
    if (loading) return <div className='flex flex-col'>
                        <div className=" rounded h-6 w-6 animate-spin rounded-md border-2 border-green-400 border-t-white"></div>
                        <p>loading ...</p>
                        </div>
    if (error) return <p className='text-red-600'> failed to load photos</p>
    
    // Adding photos to favourites using useReducer
    

    console.log(photos);
  return (
    <div>
    <div className='inline-flex justify-center bg-red-200 text-black-600 font-md'>Favourites {favourites.length}</div>
    <div className=' p-2 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4  border-2 border-blue-200 min-w-screen '>
    {photos.map((photo)=>(
        <div key={photo.id}><Photo  photo={photo}  dispatch={dispatch} isFavourite={favourites.includes(photo.id)}></Photo>
        </div>
    ))}
    </div>
    </div>
  )
}

export default Gallery