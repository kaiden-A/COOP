import { Router } from "express";
import { 
    delete_product, 
    post_products, 
    update_product 
} from "../controllers/productController.js";
import multer from 'multer'

const storage = multer.memoryStorage();
const upload = multer({storage})

const router = Router();

router.post('/products' , upload.single('image') , post_products)
router.put('/products/:id'  , update_product);
router.delete('/products/:id' , delete_product)

export default router;