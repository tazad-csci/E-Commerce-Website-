import axios from 'axios';
import Parts from './Parts.js';

const api = axios.create({
  baseURL: 'http://192.168.1.150:2999',
});


var APICalls = {
    parts: new Parts(api),
}


export default APICalls;