import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
    return (
        <div className="prod__container">
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Products;