const CategoryItem = ({ item }) => {
    return (
        <div className="catItem__container">
            <img className="catItem__img" src={item.img} />
            <div className="catItem__info">
                <h1 className="catItem__title">{item.title}</h1>
                <button className="catItem__btn">SHOP NOW</button>
            </div>
        </div>
    );
}

export default CategoryItem;