import catchAsync from "../../../i-do/backend/utils/catchAsync.js";
import { authConfig } from "../config/auth.js";
import AuthServices from "../services/authServices.js"

export const post_login = catchAsync( async (req , res) => {

    const {email , password} = req.body;

    const authServices = new AuthServices(req.app.locals.db , authConfig());
    const user = await authServices.login(email , password);

    res.cookie('jwt' , user.token , {   
        httpOnly : true , 
        maxAge : authConfig().cookieMaxAge,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? "none" : "lax"
    } );

    res.json({success : true , msg : 'User Successfully Login'});

})

export const post_signup = catchAsync( async (req , res) => {


    const {name , email , password} = req.body;

    const authServices = new AuthServices(req.app.locals.db , authConfig());
    const user = await authServices.signup(name , email , password);

    res.cookie('jwt' , user.token , {   
        httpOnly : true , 
        maxAge : authConfig().cookieMaxAge,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? "none" : "lax"
    } );

    res.json({success : true , msg : 'Successfully create user'});
    
})

export const get_logout = (req , res) => {
    res.cookie('jwt' , {maxAge : 1})
}