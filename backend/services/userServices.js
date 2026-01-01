import UserRepositories from "../repositories/UserRepositories.js";
import AppError from "../utils/AppError.js";

class UserServices{

    constructor(db){
        this.userRepo = new UserRepositories(db);
    }

    async findUserById(id){

        const user = await this.userRepo.findById(id);

        if(!user){
            throw new AppError('User Doesnt Exist' , 404)
        }

        return user;

    }

}

export default UserServices;