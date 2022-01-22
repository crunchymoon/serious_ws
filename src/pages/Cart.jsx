import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Cart = () => {
    return (
        <div className="cart__cont">
            <Navbar />
            <Announcement />
            <div className="cart__wrapper">
                <h1 className="cart__title">YOUR CART</h1>
                <div className="cart__top">
                    <button className="cart__top-btn">CONTINUE SHOPPING</button>
                    <div className="cart__topTexts">
                        <span className="cart__topText">Shopping Bag (2)</span>
                        <span className="cart__topText">Your Wishlist (8)</span>
                    </div>
                    <button className="cart__top-btn">CHECKOUT NOW</button>
                </div>
                
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Cart;