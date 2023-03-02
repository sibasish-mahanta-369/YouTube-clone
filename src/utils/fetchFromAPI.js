import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {maxResults: '24'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

//   url: BASE_URL,

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}

export default fetchFromAPI