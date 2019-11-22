import axios from 'axios';
export const post =(data, url)=>{
    return axios.post(url, data)

 }
 export const get =(url)=>{
    return  axios.get(url);
 }
