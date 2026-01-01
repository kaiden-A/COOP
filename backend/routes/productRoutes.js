import { Router } from "express";
import { 
    delete_product, 
    get_products, 
    post_products, 
    update_product 
} from "../controllers/productController.js";
import multer from 'multer'
import requireAuth from "../middlewares/requireAuth.js";

const storage = multer.memoryStorage();
const upload = multer({storage})

const router = Router();

router.get('/products' , get_products);
router.post('/products' , requireAuth , upload.single('image') , post_products)
router.put('/products/:id' , requireAuth, update_product);
router.delete('/products/:id' , requireAuth , delete_product)

export default router;