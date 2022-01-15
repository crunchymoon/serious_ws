import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
const Footer = () => {
    return (
        <div className="footer__cont">
            <div className="footer__left">
                <h1 className="footer__logo">DEV LOGO</h1>
                <p className="footer__desc">Lorem Ipsum è un testo segnaposto utilizzato
                    nel settore della tipografia e della stampa.
                    Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.</p>
                <div className="footer__socialContainer">
                    <div className="footer__socialIcon">
                        <Facebook />
                    </div>
                    <div className="footer__socialIcon">
                        <Instagram />
                    </div>
                    <div className="footer__socialIcon">
                        <Twitter />
                    </div>
                </div>
            </div>
            <div className="footer__center">
                <h3 className="footer__title">Useful Links</h3>
                <ul className="footer__list">
                    <li className="footer__listItem">Home</li>
                    <li className="footer__listItem">Cart</li>
                    <li className="footer__listItem">Man Fashion</li>
                    <li className="footer__listItem">Woman Fashion</li>
                    <li className="footer__listItem">Accessories</li>
                    <li className="footer__listItem">My Account</li>
                    <li className="footer__listItem">Order Tracking</li>
                    <li className="footer__listItem">Wishlist</li>
                    <li className="footer__listItem">Terms</li>
                </ul>
            </div>
            <div className="footer__right">
                <h3 className="footer__title">Contact</h3>
                <div className="footer__contactItem">
                    <Room/> 1234, cityName, XD utca 1
                </div>
                <div className="footer__contactItem">
                    <Phone />
                </div>
                <div className="footer__contactItem">
                    <MailOutline /> mail@contact.com
                </div>
            </div>
        </div>
    );
}

export default Footer;
