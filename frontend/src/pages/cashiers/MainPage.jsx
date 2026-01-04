import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import './styles/Hero.css'
function Main(){

    return(
        <>
            <Header/>

            <div className="main-content">
                <div className="container">
                    
                    <div id="home-hero" className="hero" style={{display : "block"}}>
                        <h1>MITS COOP MarketPlace</h1>
                        <p>Support your school community by purchasing quality products from our co-op. All proceeds go back to fund school programs and activities.</p>
                        <div className="hero-buttons">
                            <button className="btn btn-primary" id="shop-now-btn">
                                <i className="fas fa-shopping-bag"></i> Shop Now
                            </button>
                            <button className="btn btn-outline" id="learn-more-btn">
                                <i className="fas fa-info-circle"></i> Learn More
                            </button>
                        </div>
                    </div>
                    
                    <h1 className="page-title" id="page-title">Featured MITS Products</h1>
                    <p className="page-subtitle" id="page-subtitle">All proceeds support school programs and activities</p>
                    
                    <div className="product-grid" id="product-grid">
                        <Products/>
                        <Products/>
                        <Products/>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Main;