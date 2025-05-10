import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <header>
            <div class="container">
                <div class="nav-wrapper">
                    <img src="/images/logo.png"/>
                    <nav class="primary-navigatioh">
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/cookies"><li>Cookies</li></Link>
                            <Link to="/about"><li>About</li></Link>
                        </ul>
                    </nav>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </header>
    );
}