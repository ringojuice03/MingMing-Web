import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer | padding-block-100">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="first-section">
                        <Link to="/" aria-label="Home"><img className="footer-logo" src="images/logo.png"/></Link>
                        <p>Baked to Perfection, Crafted for Delight</p>
                        <div aria-label="newsletter">
                            <Link to="/" className="cta-newsletter">
                                <p>Get our newsletter</p>
                                <svg class="newsletter-icon">
                                    <use xlinkHref="images/newsletter-icon.svg#Group 22"></use>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="second-section">
                        <div>
                            <nav>
                                <ul role="list">
                                    <li>
                                        asdfadfas
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            123
                        </div>
                        <div>
                            <nav className="footer-nav-socials">
                            <ul role="list">
                                    <li>
                                        asdfadfas
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