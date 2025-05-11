import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

export const Header = () => {
    return(
        <header className="primary-header">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/"><img className="header-logo" src={logo} alt="MingMing Logo"/></Link> 
                    <nav className="primary-navigation">
                        <ul aria-label="Primary" role="list" className="nav-list">
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/cookies"><li>Cookies</li></Link>
                            <Link to="/about"><li>About</li></Link>
                        </ul>
                    </nav>
                    <div className="buttons">
                        {/* Cart */}
                        <button>C</button> 
                        {/* Notifs */}
                        <button>N</button>
                        {/* Profile */}
                        <button>P</button>
                    </div>
                </div>
            </div>
        </header>
    );
}