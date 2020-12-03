import axios from 'axios';
import Parts from './Parts.js';

const api = axios.create({
  baseURL: 'https://sugarytomatoes.com',
});


var APICalls = {
    parts: new Parts(api),
}


export default APICalls;