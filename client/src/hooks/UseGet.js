import axios from 'axios';

async function fetchDataWithParams(url,data) {
  try {
    debugger
    const response = await axios.post(url,data);
    console.log("this is the data");
    console.log(response.data);
  } 
  catch (error) {
    console.log(error);
  }
}

// // useEffect(() => {
// //   fetchData();
// // }, []);

export default fetchDataWithParams;