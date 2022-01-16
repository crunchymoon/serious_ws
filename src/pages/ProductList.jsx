import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
const ProductList = () => {
    return (
        <div className="product__cont">
            <Navbar />
            <Announcement />
            <h1 className="product__title">Dresses</h1>
            <div className="product__filterCont">
                <div className="product__filter">
                    <span className="product__filterText">Filter Products: </span>
                    <select className='product__select' name="productSelect">
                        <option disabled selected value="color">Color</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                    <select className='product__select' name="sizeSelect">
                        <option disabled selected value="size">Size</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>
                <div className="product__filter">
                    <span className="product__filterText">Sort Products: </span>
                    <select className='product__select' name="sortSelect">
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
