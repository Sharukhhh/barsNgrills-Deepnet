import expess from 'express'
import { getCockTailsMenu, getDrinksMenu, getFlavours } from '../controllers/menucontroller.js';
const router = expess.Router();

router.get('/drinks' , getDrinksMenu)

router.get('/cocktails' , getCockTailsMenu);

router.get('/flavours' , getFlavours);

export default router;