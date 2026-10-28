import { useCallback, useMemo, useState } from "react"
import SearchBox from "./components/SearchBox"
import useFetchHook from "./custom_hooks/useFetchHook";
import Gallery from "./components/Gallery";
function App() {
  const url=import.meta.env.VITE_API_URL;

  const {photos,loading,error}=useFetchHook(url);
  const [searchFilter, setSearchFilter] = useState("");

  //SearchFilterHandler with useCallback
   const SearchFilterHandler = useCallback((e) => {
    setSearchFilter(e.target.value);
  }, []);

  
  // useMemo: calculate filtered photos when dependencies change
  const filteredPhotos = useMemo(() => {
    if (!searchFilter.trim()) {
      return photos;
    }

    return photos.filter((photo) =>
      photo.author
        .toLowerCase()
        .includes(searchFilter.trim().toLowerCase())
    );
  }, [photos, searchFilter]);
  

  return (
  <div className="m-2 bg-purple-300 border-brown-100 min-h-screen min-w-screen  rounded">
     <h1 className="border-1 rounded  mb-2 border-purple-500 font-bold text-lg text-violet-600 text-center bg-cyan-200">Photo Gallery</h1>
     <div className="flex justify-center">
     {/* passing SearchFilterHandler to SearchBox component */}
     <SearchBox  SearchHandler={SearchFilterHandler} ></SearchBox>
     </div>
      
      <div className=" mt-2 flex  bg-purple-200 justify-center  rounded align-center">
    {/*  passing photos ,loading and error recieved from useFetchHook to Gallery component */}
      <Gallery photos={filteredPhotos} loading={loading} error={error} ></Gallery>
      </div>
        
     </div>

  )
}

export default App