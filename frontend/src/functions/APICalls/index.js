import axios from 'axios';
import Orders from './Orders.js';
import Parts from './Parts.js';

const api = axios.create({
  baseURL: 'https://sugarytomatoes.com',
});


var APICalls = {
    parts: new Parts(api),
    orders: new Orders(api)
}


export default APICalls;