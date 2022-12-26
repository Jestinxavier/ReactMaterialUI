import axios from 'axios'
// import { baseURL } from './constant/defaultValues';
const baseURL ='http://127.0.0.1:4000';

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

// const instance = axios.create({
//     baseURL: baseURL,
//   });
  export default instance