import jwt from 'jsonwebtoken';
import AppError from '../utils/AppError.js';
import UserServices from '../services/userServices.js';

export default async function requireAuth(req , res , next){

    const token = req.cookies.jwt;
    const userServices = new UserServices(req.app.locals.db);

    try{

        const decodedToken = jwt.verify(token , process.env.JWT_SECRET);

        if(!decodedToken){
            return next(new AppError('Authentication token missing' , 401))
        }

        const user = await userServices.findUserById(decodedToken);
        req.user = rows[0];

        next();

    }catch(err){
        
        return next(new AppError('Invalid or expired token' , 401))
    }
}