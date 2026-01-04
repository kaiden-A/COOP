import { useContext, useEffect, useState } from 'react';
import '../styles/Cart.css'
import { SalesContext } from '../../../Context/SalesContext';

function Cart({onClose}){

    const {sales} = useContext(SalesContext);
    const [totalSales , setTotalSales] = useState(0);

    //calculate the total sales
    useEffect(() => {

        const total = sales.reduce((sum , sale) => sum + sale.price , 0);
        setTotalSales(total);

    }, [])

    return(

        <>
            <div className="cart-modal" id="cart-modal">
                <div className="cart-header">
                    <h2 className="cart-title">Your Shopping Cart</h2>
                    <button className="close-cart" onClick={onClose}>&times;</button>
                </div>
                
                <div className="cart-items" id="cart-items">
                    {/* Load The Card here */}
                </div>
                
                <div className="cart-total">
                    <span>Total:</span>
                    <span id="cart-total">{`RM ${totalSales.toFixed(2)}`}</span>
                </div>
                
                <button className="btn btn-primary checkout-btn" id="checkout-btn">
                    <i className="fas fa-credit-card"></i> Proceed to Checkout
                </button>
            </div>
        </>
    )

}

export default Cart;