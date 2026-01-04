import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import Hero from "./components/Hero";
import Notifications from "../global/Notifications";
import './styles/Hero.css'
import { useContext, useState } from "react";
import { SalesContext } from "../../Context/SalesContext";
function Main(){

    const {sales , setSales} = useContext(SalesContext);
    const [noti , setNoti] = useState(false);
    const [cart , setCart] = useState("");

    const addToCart = (product) => {
        setSales(s => [...s , product ])
        setCart(product.name);
        setNoti(true);
    }

    const sampleData = [
        {
            name : "T-Shirt",
            price : 10,
        },
        {
            name : "Pen",
            price : 3,
        },
        {
            name : "Kertas Majong",
            price : 10,
        },
        {
            name : "AisKrim",
            price : 7
        }
    ]

    return(
        <>
            {
                noti && 
                <Notifications
                    message={`${cart} is Being Added to The Cart`}
                    onClose={() => setNoti(false)}
                    popup={true}
                />
            }
            <Header/>

            <div className="main-content">
                <div className="container">
                    
                    <Hero/>
                    
                    <h1 className="page-title" id="page-title">Featured MITS Products</h1>
                    <p className="page-subtitle" id="page-subtitle">All proceeds support school programs and activities</p>
                    
                    <div className="product-grid" id="product-grid">
                        {
                            sampleData.map((data , i) => 
                                
                                <Products
                                    key={i}
                                    name={data.name}
                                    price={data.price}
                                    addToCart={() => addToCart(data)}
                                />

                            )
                            
                        }
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Main;