import axios from 'axios';


export const Axios = axios.create({
    // baseURL :'http://localhost:3000/api/menu',
    baseURL : 'https://backend-barsngrills-deepnet.onrender.com/api/menu'
})

