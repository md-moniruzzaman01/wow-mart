
import { useEffect, useState } from "react";
const useCategory = () => {
    const [trending , settreinding] = useState([])
    useEffect(()=>{
      fetch(`http://localhost:3000/api/hello`)
      .then(res=> res.json())
      .then(data=>{
          settreinding(data)
          
      })
    },[])
    return [trending , settreinding]
};

export default useCategory;