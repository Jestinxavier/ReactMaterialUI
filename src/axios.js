import axios from 'axios'
import { baseURL } from './constant/defaultValues';
const instance = axios.create({
    baseURL: baseURL,
  });
  export default instance