import { getData } from "../database/getData.js";

/*
    route: '/api/menu/drinks',
    method: GET
*/
export const getDrinksMenu = async (req, res) => {
    try {
        const drinks = await getData('drinks');

        if(!drinks) {
            return res.status(404).json({error: 'No data found'});
        }

        return res.status(200).json({message: 'success' , drinks});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Server error'});
    }
}


/*
    route: '/api/menu/cocktails',
    method: GET
*/
export const getCockTailsMenu = async (req, res) => {
    try {
        const cocktails = await getData('cocktails');

        if(!cocktails) {
            return res.status(404).json({error: 'No data found'});
        }

        return res.status(200).json({message: 'success' , cocktails});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Server error'});
    }
}



/*
    route: '/api/menu/flavours',
    method: GET
*/
export const getFlavours = async (req, res) => {
    try {
        const flavours = await getData('hookah');

        if(!flavours) {
            return res.status(404).json({error: 'No data found'});
        }

        return res.status(200).json({message: 'success' , flavours});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Server error'});
    }
}