import axios from 'axios';

async function fetchData(url) {
  try {
   
    var response = await axios.get(url);
    console.log("this is the data");
    console.log(response.data);
  } 
  catch (error) {
    console.log(error);
  }
  return response.data;
}

export default fetchData;
