import { Send } from "@material-ui/icons";
const Newsletter = () => {
    return (
        <div className="news__container">
            <h1 className="news__title">Newsletter</h1>
            <div className="news__desc">Get news weekly news about your favourite products</div>
            <div className="news__inputCont">
                <input className="news__input" placeholder="your email"type="text" />
                <button className="news__btn">
                    <Send />
                </button>
            </div>
        </div>
    );
}

export default Newsletter;