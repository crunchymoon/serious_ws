import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
const Product = () => {
    return (
        <div>
            <div className="theProd__cont">
                <Navbar />
                <Announcement />
                <div className="theProd__wrapper">
                    <div className="theProd__imgCont">
                        <img src="https://m.media-amazon.com/images/I/61K16ewE4xL._AC_UX679_.jpg" alt="shirtProduct" />
                    </div>
                    <div className="theProd__infoCont">
                        <h1 className="theProd__title">Cool T-Shirt</h1>
                        <p className="theProd__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <span className="theProd__price">20$</span>
                    </div>
                </div>
                <Newsletter />
            </div>
        </div>
    );
}

export default Product;