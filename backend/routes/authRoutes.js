import { Router } from "express";
import { 
    post_login, 
    post_signup 
} from "../controllers/authController.js";
import frontRoutes from './frontRoutes.js';
import adminRoutes from './adminRoutes.js'


const router = Router();

router.post('/login' , post_login);
router.post('/signup' , post_signup);

router.use('/' , frontRoutes);
router.use('/admin' , adminRoutes);


export default router;