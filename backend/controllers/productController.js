import catchAsync from "../../../i-do/backend/utils/catchAsync.js";
import ProductServices from "../services/productServices.js";

export const post_products = catchAsync(async (req , res) => {

    const {name , desc , stock , price} = req.body;
    const fileStr = req.file.buffer.toString('base64');

    const productService = new ProductServices(req.app.locals.db);
    const product = await productService.createProduct(name , desc , stock , price , fileStr);
   
    return res.status(201).json({success : true , message : 'Successfully create product' , data : product})
})

export const get_products = catchAsync( async (req , res) => {

    const productService = new ProductServices(req.app.locals.db);
    const products = await productService.getAllProduct();

    return res.status(200).json({success : true , products : products})
})

export const delete_product = catchAsync(async(req , res) => {

    const id = req.params.id;

    const productService = new ProductServices(req.app.locals.db);
    const dltProduct = await productService.deleteProductById(id);

    res.status(201).json({success : true , message : 'Successfully Deleted Product'});

})

export const update_product = catchAsync(async(req , res) => {

    const id = req.params.id;
    const {stock} = req.body;

    const productService = new ProductServices(req.app.locals.db);
    const updProd = await productService.updateProductStock(id , stock);

    return res.status(201).json({success : true , msg : 'successfully updated the stock'})

})