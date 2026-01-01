import { Router } from "express";
import { 
    post_login, 
    post_signup 
} from "../controllers/authController.js";
import productRoutes from './productRoutes.js'


const router = Router();

router.post('/login' , post_login);
router.post('/signup' , post_signup);

router.use('/' , productRoutes);



export default router;