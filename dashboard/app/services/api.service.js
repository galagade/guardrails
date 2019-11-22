import endpoint from '../enviroment/enviroment';
import {post, get} from './methods.service';

export const addReport =(data)=>{
    const url = endpoint.API+'report';
    return post(data, url);
}

export const getReports =(data)=>{
    const url = endpoint.API+'report';
    return get(url);
}
