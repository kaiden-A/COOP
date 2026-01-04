

function Header(){


    return(
        <>
            <header>
                <div className="container">
                    <div className="header-content">
                        <a href="#" className="logo">
                            <i className="fas fa-graduation-cap"></i>
                            <span>MITS Market</span>
                        </a>
                        
                        <nav>
                            <ul>
                                <li><a href="#" className="active" data-page="home">Home</a></li>
                                <li><a href="#" data-page="products">All Products</a></li>
                                <li><a href="#" data-page="categories">Categories</a></li>
                                <li><a href="#" data-page="about">About Co-op</a></li>
                            </ul>
                        </nav>
                        
                        <div className="header-right">
                            <div className="cart-icon" id="open-cart">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="cart-count">0</span>
                            </div>
                            <div className="user-icon">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;