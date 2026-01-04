

function Products({imgLink , name , desc , price , addToCart}){

    return(

        <>
            <div className="product-card">
                <div className="product-img">
                    <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    >
                    <img
                        src="https://via.placeholder.com/300x300/"
                        alt="T-shirt"
                        style={{
                        width: "60%",
                        height: "60%",
                        objectFit: "contain",
                        }}
                    />
                    </div>
                </div>
                <div className="product-info">
                    <h3 className="product-title">{name}</h3>
                    <p className="product-description">High-quality cotton t-shirt with school logo and mascot</p>
                    <div className="product-price">
                        {`RM ${price.toFixed(2)}`}
                    </div>
                    <button className="btn btn-primary add-to-cart" onClick={addToCart}>
                        <i className="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </>
    )

}

export default Products;