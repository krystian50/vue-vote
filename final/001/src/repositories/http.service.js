import axios from 'axios';

const baseUrl = 'https://test2-206614.firebaseio.com';


export default axios.create({
  baseUrl,
});
