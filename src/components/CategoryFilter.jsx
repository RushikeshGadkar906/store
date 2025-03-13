import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const CategoryFilter = () => {    
  const storeData = useSelector((state) => state.products);
  const [categories,setCategories] = useState([]);

  const getCategry = () =>{
        const res = storeData.data?.products.map((p) => p.category)
        const uniqueRes = new Set(res)
        // console.log(uniqueRes,"kkkkkkkk");  
        

        
  }
  useEffect(()=>{    
    if (storeData) getCategry()
  },[storeData])

  return (
    <div>CategoryFilter</div>
  )
}

export default CategoryFilter