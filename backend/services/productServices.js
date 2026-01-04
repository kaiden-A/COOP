import ProductRepositories from "../repositories/ProductRepositories.js"
import AppError from "../utils/AppError.js";
import cloudinary from "../config/cloudinary.js";

class ProductServices{

    constructor(db){
        this.productRepo = new ProductRepositories(db);
    }

    async createProduct(name , desc , price , stock , fileStr){

        //create cloudinary from imageFile
        const fileUri = `data:${req.file.mimetype};base64,${fileStr}`;

        const uploadResponse = await cloudinary.uploader.upload(fileUri, {
            folder: 'products',
        });
        
        const result = await this.productRepo.createProduct(name , desc , price , stock , uploadResponse.secure_url , uploadResponse.public_id );

        if(!result){
            throw new AppError("Fail Creating The product" , 401);
        }

        const product = await this.productRepo.findById(result.insertId);
        
        if(!product){
            throw new AppError("Product Doesnt Exist" , 404);
        }

        return product[0];

    }



    async getAllProduct(){

        const product = this.productRepo.findAll();

        if(product.length === 0){
            throw new AppError("No Products" , 401)
        }

        return product;

    }

    async updateProductStock(id , stock){

        const updatedStock = await this.productRepo.updateStock(id , stock);

        if(!updatedStock){
            throw new AppError('Fail Updating The Stock' , 401);
        }


    }


    async deleteProductById(id ){
        
        const product = await this.productRepo.findById(id);
        const result = await cloudinary.uploader.destroy(product.publicId);

        if(!result.result){
            throw new AppError('Fail Deleting The product Image' , 401);
        }

        const dltProd = await this.productRepo.deleteById(id);

        if(!dltProd){
            throw new AppError('Fail Deleting The Product' , 401);
        }

    }


}

export default ProductServices;