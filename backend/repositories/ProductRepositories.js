class ProductRepositories{

    constructor(db){
        this.db = db;
    }

    async getAllProduct(){

        const [rows] = await this.db.query(
            `
            SELECT 
                name,
                description,
                price,
                stock,
                image_url AS imageUrl,
            FROM PRODUCTS
            `
        )

        return rows;
    }

    async createProduct(name , desc , price , stock , imageUrl , imagePublic ){

        const [result] = await this.db.query(
            `INSERT INTO PRODUCTS
                (name , description , price , stock , image_url , image_public_id , is_active , created_at , updated_at)
            VALUES(? , ? , ? , ? , ? ,  ? , ? , ?  , ?)`,
            [name , desc , price , stock , imageUrl , imagePublic , true , new Date() , new Date() ]
        )

        return result;

    }

    async findProductById(id){

        const [rows] = this.db.query(
            `
                SELECT 
                    name,
                    description,
                    price,
                    stock,
                    image_url AS imageUrl,
                FROM PRODUCTS
                WHERE id = ?
            `,
            [id]
        )

        return rows[0];

    }

    async updateStock(id , newStock){

        const [result] = await this.db.query(
            `
            UPDATE PRODUCTS
            SET stock = ?
            WHERE id = ?
            `,
            [newStock , id]
        )

        return result;

    }

    async deleteById(id){

        const [result] = await this.db.query(
            `DELETE FROM PRODUCTS WHERE id = ?`,
            [id]
        )

        return result;

    }

}

export default ProductRepositories;