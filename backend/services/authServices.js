import AppError from "../utils/AppError.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import UserRepositories from "../repositories/UserRepositories.js";

class AuthServices{

    constructor(db , config){
        this.userRepo = new UserRepositories(db);

        this.jwtSecret = config.jwtSecret;
        this.maxAge = config.jwtExpiresIn;
    }

    async login(email , password){

        const user = await this.userRepo.findByEmail(email);

        if(!user){
            throw new AppError("User Doesnt Exist" , 401);
        }

        const isPassword = await this.#comparePassword(password , user.password_hash)

        if(!isPassword){
            throw new AppError("Incorrect Password" , 400)
        }

        const token = this.#createToken(user.id);


        return {user , token};

    }

    async signup(name , email , password){

        const hashPassword = await this.#hashedPassword(password);
        const user = await this.userRepo.createUser(name , email , hashPassword );

        if(user.affectedRows === 0){
            throw new AppError("Fail Creating The User" , 401);
        }

        const token = this.#createToken(user.insertId);

        return {token}


    }

    async #hashedPassword(pasword){
    
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(pasword , salt);
    
        return hashPass;
    }
    
    async #comparePassword(password , hashPass){
    
        return await bcrypt.compare(password , hashPass)
        
    }

    #createToken(id){
        return jwt.sign({id : id} , this.jwtSecret , {expiresIn : this.maxAge})
    }

}

export default AuthServices;