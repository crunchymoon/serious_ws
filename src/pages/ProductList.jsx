import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
const ProductList = () => {
    return (
        <div className="prodList__cont">
            <Navbar />
            <Announcement />
            <h1 className="prodList__title">Dresses</h1>
            <div className="prodList__filterCont">
                <div className="prodList__filter">
                    <span className="prodList__filterText">Filter prodLists: </span>
                    <select className='prodList__select' name="prodListSelect">
                        <option disabled selected value="color">Color</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                    <select className='prodList__select' name="sizeSelect">
                        <option disabled selected value="size">Size</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>
                <div className="prodList__filter">
                    <span className="prodList__filterText">Sort prodLists: </span>
                    <select className='prodList__select' name="sortSelect">
                        <option selected value="newest">Newest</option>
                        <option value="price">Price (asc)</option>
                        <option value="price">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default ProductList;
