class UserRepositories{

    constructor(db){
        this.db = db;
    }

    async findByEmail(email){

        const [rows] = await this.db.query(
            `
                SELECT * 
                FROM USERS
                WHERE email = ? 
            `,
            [email]
        )

        return rows[0];



    }

    async createUser(name , email , hashPassword){

        const [result] = await this.db.query(
            `INSERT INTO USERS(name , email , password_hash , is_active , created_at)
            VALUES(? , ? , ? , ? , ?)`,
            [name , email , hashPassword , true , new Date()]
        )

        return result;

    }

}

export default UserRepositories;