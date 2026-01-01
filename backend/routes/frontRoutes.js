import { Router } from "express";
import { 
    get_products 
} from "../controllers/productController.js";


const router = Router();

router.get('/products' , get_products);

export default router;