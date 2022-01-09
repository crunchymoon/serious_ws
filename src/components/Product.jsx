import { FavoriteBorderOutlined,SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
const Product = ({item}) => {
    return ( 
        <div className="singleProd__cont">
            <img src={item.img} alt="" className="singleProd__image" />
            <div className="singleProd__info">
                <div className="singleProd__icon">
                    <ShoppingCartOutlined/>
                </div>
                <div className="singleProd__icon">
                    <SearchOutlined/>
                </div>
                <div className="singleProd__icon">
                    <FavoriteBorderOutlined/>
                </div>
            </div>
            

        </div>
     );
}
 
export default Product;