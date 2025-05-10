import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <header>
            <div class="container">
                <div class="nav-wrapper">
                    <img src="/images/logo.png" alt="MingMing Logo"/> 
                    <nav class="primary-navigation">
                        <ul aria-label="Primary" role="list" class="nav-list">
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/cookies"><li>Cookies</li></Link>
                            <Link to="/about"><li>About</li></Link>
                        </ul>
                    </nav>
                    <div class="buttons">
                        <button>Put cart svg here</button>
                        <button>Put notification svg here</button>
                    </div>
                </div>
            </div>
        </header>
    );
}