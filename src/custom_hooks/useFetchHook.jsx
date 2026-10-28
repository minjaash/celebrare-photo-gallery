import axios from "axios";
import { useEffect,useState } from "react";

const useFetchHook=(url)=>{
    const [photos,setPhotos]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null)
    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            setLoading(false);
            setError(null);
            setPhotos(res.data);
        })
        .catch(error=> error)
    },[])
    return {photos,loading,error};
}
 
export default useFetchHook;