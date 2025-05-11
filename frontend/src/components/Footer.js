import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import { NewsLetterIcon } from './NewsLetterIcon';

export const Footer = () => {
    return (
        <footer className="footer | padding-block-100">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="first-section">
                        <Link to="/" aria-label="Home"><img className="footer-logo" src={logo}/></Link>
                        <p>Baked to Perfection, Crafted for Delight</p>
                        <div aria-label="newsletter">
                            <Link to="/" className="cta-newsletter | fs-newsletter">
                                <p>Get our newsletter</p>
                                <NewsLetterIcon />
                            </Link>
                        </div>
                    </div>
                    <div className="second-section">
                        <div>
                            <h3>Navigation</h3>
                            <nav>
                                <ul role="list">
                                    <Link to="/"><li>Home</li></Link>
                                    <Link to="/cookies"><li>Cookies</li></Link>
                                    <Link to="/"><li>Cart</li></Link>
                                    <Link to="/about"><li>About</li></Link>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <h3>Contacts</h3>
                            <ul role="list">
                                <li>mingming@gmail.com</li>
                                <li>+63-9692499027</li>
                                <li>Carolina, Naga City.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Social Media</h3>
                            <nav className="footer-nav-socials">
                                <ul role="list">
                                    <li>
                                        <Link to="/"><li>Instagram</li></Link>
                                        <Link to="/"><li>Facebook</li></Link>
                                        <Link to="/"><li>Twitter</li></Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}