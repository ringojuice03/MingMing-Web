import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer | padding-block-100">
            <div className="container">
                <div className="first-column">
                    <Link to="/"><img className="footer-logo" src="images/logo.png"/></Link>
                    <p>Baked to Perfection, Crafted for Delight</p>
                    <div className="cta-newsletter">
                        <p></p>
                        <svg class="newsletter-icon">
                            <use xlinkHref="images/newsletter-icon.svg#Group 22"></use>
                        </svg>
                    </div>
                </div>
                <div>
                    <div>
                        <nav className="footer-nav">

                        </nav>
                    </div>
                    <div>

                    </div>
                    <div>
                        <nav className="footer-nav-socials">
                        
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}