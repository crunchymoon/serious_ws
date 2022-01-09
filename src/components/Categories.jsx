import { categories } from "../data";
import CategoryItem from "./CategoryItem";
const Categories = () => {
    return (
        <div className="cat__container">
            {categories.map((item)=>{
                return <CategoryItem item = {item} key={item.id}/>                
            })}
        </div>
    );
}

export default Categories
