import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
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
                <div className="cart__bottom">
                    <div className="cart__info">
                        <div className="cart__product">
                            <div className="cart__productDetail">
                                <img className="cart__img" src='https://m.media-amazon.com/images/I/61K16ewE4xL._AC_UX679_.jpg' />
                                <div className="cart__details">
                                    <span className="cart__productName"><b>prdouct: </b>JOHN DOE SHOES</span>
                                    <span className="cart__productId"><b>ID: </b>99245786312</span>
                                    <span className="cart__productColor"></span>
                                    <span className="cart__productSize"><b>Size: </b> 37.5 </span>
                                </div>
                            </div>
                            <div className="cart__priceDetail">
                                <div className="cart__productAmountContainer">
                                    <Add />
                                    <span className="cart__productAmount">2</span>
                                    <Remove/>
                                </div>
                                <span className="cart__productPrice">$30</span>
                            </div>
                        </div>
                        <hr/>
                        <div className="cart__product">
                            <div className="cart__productDetail">
                                <img className="cart__img" src='https://m.media-amazon.com/images/I/61K16ewE4xL._AC_UX679_.jpg' />
                                <div className="cart__details">
                                    <span className="cart__productName"><b>prdouct: </b>JOHN DOE SHOES</span>
                                    <span className="cart__productId"><b>ID: </b>99245786312</span>
                                    <span className="cart__productColor"></span>
                                    <span className="cart__productSize"><b>Size: </b> 37.5 </span>
                                </div>
                            </div>
                            <div className="cart__priceDetail">
                                <div className="cart__productAmountContainer">
                                    <Add />
                                    <span className="cart__productAmount">2</span>
                                    <Remove/>
                                </div>
                                <span className="cart__productPrice">$30</span>
                            </div>
                        </div>
                    </div>
                    <div className="cart__summary">
                        <h1 className="cart__summaryTitle">ORDER SUMMARY</h1>
                        <div className="cart__summaryItem">
                            <span className="cart__summaryItemText">Subtotal</span>
                            <span className="cart__summaryItemPrice">$ 80</span>
                        </div>
                        <div className="cart__summaryItem">
                            <span className="cart__summaryItemText">Estimated Shipping</span>
                            <span className="cart__summaryItemPrice">$ 5.90</span>
                        </div>
                        <div className="cart__summaryItem">
                            <span className="cart__summaryItemText">Shipping discount</span>
                            <span className="cart__summaryItemPrice">$ -5.90</span>
                        </div>
                        <div className="cart__summaryItem cart__summaryTotal">
                            <span className="cart__summaryItemText">Total</span>
                            <span className="cart__summaryItemPrice">$ 80</span>
                        </div>
                        <button className="cart__checkOut" type="button">Checkout now</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Cart;