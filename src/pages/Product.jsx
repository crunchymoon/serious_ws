import { Remove, Add } from '@material-ui/icons';
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
                        <div className="theProd__filterCont">
                            <div className="theProd__filter">
                                <span className="theProd__filterTitle"></span>
                                <div className="theProd__filterColor black"></div>
                                <div className="theProd__filterColor blue"></div>
                                <div className="theProd__filterColor gray"></div>
                            </div>
                            <div className="theProd__filter">
                                <span className="theProd__filterTitle">Size</span>
                                <select name="" id="" className="theProd__filterSize">
                                    <option value="xs" className="theProd__filterSizeOption">xs</option>
                                    <option value="s" className="theProd__filterSizeOption">s</option>
                                    <option value="m" className="theProd__filterSizeOption">m</option>
                                    <option value="l" className="theProd__filterSizeOption">l</option>
                                    <option value="xl" className="theProd__filterSizeOption">xl</option>
                                </select>
                            </div>
                        </div>
                        <div className="theProd__addCont">
                            <div className="theProd__amountCont">
                                <Remove/>
                                <span className="theProd__amount">1</span>
                                <Add />
                            </div>
                            <button className='theProd__addBtn'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <Newsletter />
            </div>
        </div>
    );
}

export default Product;