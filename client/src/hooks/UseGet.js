import axios from 'axios';

async function fetchDataWithParams(url,data) {
  try {
    const response = await axios.post(url,data);
    console.log("this is the data");
    console.log(response.data);
    return response;
  } 
  catch (error) {
    console.log(error);
    return error;
  }
}

// // useEffect(() => {
// //   fetchData();
// // }, []);

export default fetchDataWithParams;