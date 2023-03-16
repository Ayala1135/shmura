import axios from 'axios';

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    console.log("sgwszh");
    console.log(response.data);
  } 
  catch (error) {
    console.log(error);
  }
}

// // useEffect(() => {
// //   fetchData();
// // }, []);

export default fetchData;
