

function Products(){

    return(

        <>
            <div className="product-card">
                <div className="product-badge">Bestseller</div>
                <div className="product-img">
                    <div style={
                        {width:"100%" , 
                            height: "100%", 
                            backgroundColor:"#a78bfa" ,
                            display:"flex" ,
                            alignItems: "center" ,
                            justifyContent: "center" ,
                            color:"white" ,
                            fontSize: "3rem"}}>
                        <i className="fas fa-tshirt"></i>
                </div>
                </div>
                <div className="product-info">
                    <h3 className="product-title">School Spirit T-Shirt</h3>
                    <p className="product-description">High-quality cotton t-shirt with school logo and mascot</p>
                    <div className="product-price">
                        $19.99
                        <span>$24.99</span>
                    </div>
                    <button className="btn btn-primary add-to-cart">
                        <i className="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </>
    )

}

export default Products;