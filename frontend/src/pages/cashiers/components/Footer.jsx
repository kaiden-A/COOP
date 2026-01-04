

function Footer(){

    return(

        <>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <div className="footer-logo">
                                <i className="fas fa-graduation-cap"></i>
                                Co-op Market
                            </div>
                            <p style={{color: "var(--text-light)" , maxWidth: "300px" , marginBottom: "20px" }}>
                                Supporting our school community through a collaborative marketplace. All proceeds fund educational programs.
                            </p>
                            <button className="btn btn-outline" id="admin-login">
                                <i className="fas fa-user-shield"></i> Admin Login
                            </button>
                        </div>
                        
                        <div className="footer-links">
                            <div className="footer-section">
                                <h3>Shop</h3>
                                <ul>
                                    <li><a href="#">All Products</a></li>
                                    <li><a href="#">Apparel</a></li>
                                    <li><a href="#">Stationery</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Special Offers</a></li>
                                </ul>
                            </div>
                            
                            <div className="footer-section">
                                <h3>Support</h3>
                                <ul>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Shipping Info</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Co-op Info</a></li>
                                </ul>
                            </div>
                            
                            <div className="footer-section">
                                <h3>Connect</h3>
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                                    <li><a href="#"><i className="fas fa-envelope"></i> Newsletter</a></li>
                                    <li><a href="#"><i className="fas fa-phone"></i> (123) 456-7890</a></li>
                                    <li><a href="#"><i className="fas fa-map-marker-alt"></i> School Address</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="copyright">
                        Made And Develop By Kaiden-A | Designed for school community support
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer;