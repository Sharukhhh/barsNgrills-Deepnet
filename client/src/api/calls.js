import { Axios } from './axios';

export const getDrinks = async () => {
    try {
        const response = await Axios.get('/drinks');
        
        if(response.data.message) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

export const getCoctails = async () => {
    try {
        const response = await Axios.get('/cocktails');
        
        if(response.data.message) {
            return response.data
        }
    } catch (error) {
        console.log(error);
    }
}

export const getFlavours = async () => {
    try {
        const response = await Axios.get('/flavours');
        
        if(response.data.message) {
            return response.data
        }
    } catch (error) {
        console.log(error);
    }
}