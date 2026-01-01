

-- -- DROP TABLES IN ORDER TO AVOID FK ERRORS
-- DROP TABLE IF EXISTS sale_items;
-- DROP TABLE IF EXISTS sales;
-- DROP TABLE IF EXISTS products;
-- DROP TABLE IF EXISTS users;

-- -- USERS
-- CREATE TABLE users (
--     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(150) UNIQUE NOT NULL,
--     password_hash TEXT NOT NULL,
--     is_active BOOLEAN DEFAULT TRUE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- ) AUTO_INCREMENT = 100;

-- -- PRODUCTS
-- CREATE TABLE products (
--     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(150) NOT NULL,
--     description TEXT,
--     price DECIMAL(10,2) NOT NULL,
--     stock INT DEFAULT 0,
--     image_url TEXT,
--     image_public_id VARCHAR(255),
--     is_active BOOLEAN DEFAULT TRUE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- ) AUTO_INCREMENT = 500;

-- -- SALES
-- CREATE TABLE sales (
--     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     total_amount DECIMAL(10,2) NOT NULL,
--     cashier_id INT UNSIGNED NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     CONSTRAINT fk_sales_cashier FOREIGN KEY (cashier_id) REFERENCES users(id)
-- );

-- -- SALE ITEMS
-- CREATE TABLE sale_items (
--     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     sale_id INT UNSIGNED NOT NULL,
--     product_id INT UNSIGNED NOT NULL,
--     quantity INT NOT NULL,
--     price_at_sale DECIMAL(10,2) NOT NULL,
--     CONSTRAINT fk_sale_items_sale FOREIGN KEY (sale_id) REFERENCES sales(id) ON DELETE CASCADE,
--     CONSTRAINT fk_sale_items_product FOREIGN KEY (product_id) REFERENCES products(id)
-- );
