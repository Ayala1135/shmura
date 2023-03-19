import React, { useState, useEffect} from 'react';
import useAxios from 'axios-hooks';

export const useGetData = (url) =>{
  const [{data, loading, error}, refetch] = useAxios(`http://localhost:8000/${url}`);
  useEffect(()=>{console.log(error)},[error])
  return {data, loading, error, refetch}
}







// import axios from 'axios';

// async function fetchData(url) {
//   try {
//     const response = await axios.get(url);
//     console.log("sgwszh");
//     console.log(response.data);
//   } 
//   catch (error) {
//     console.log(error);
//   }
// }

// // // useEffect(() => {
// // //   fetchData();
// // // }, []);

// export default fetchData;
