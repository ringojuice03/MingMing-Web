import { Carousel } from "./Carousel";
import { Link } from "react-router-dom";
import { NewsLetterIcon } from "./svgComponents/NewsLetterIcon.js";
import { CookieArt } from "./svgComponents/CookieArt.js";
import { Jar } from "./svgComponents/Jar.js";
import { Gift } from "./svgComponents/Gift.js";

 
export const Home = () => {
    return(
        <main>
            <section>
                <div className="container">
                    <div className="hero-wrapper">
                        <div>
                            <h1>Baked to Perfection, Crafted for Delight</h1>
                            <p>Indulge in a world where cookies are more than 
                                just a treat—they're an experience. Handcrafted 
                                with love, baked to golden perfection, and presented 
                                as edible works of art, our cookies are made to satisfy 
                                both your cravings and your eyes.</p>
                            <Link to="/"> 
                                <p>Shop Now</p>
                                <NewsLetterIcon />
                            </Link>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <CookieArt />
                            <div>
                                <h3>Artisan Creations</h3>
                                <p>Each cookie is a masterpiece, thoughtfully designed for both beauty and taste.</p>
                            </div>
                        </div>
                        {/* Insert DIvider Here */}
                        <div>
                            <Jar />
                            <div>
                                <h3>Premium Ingredients</h3>
                                <p>We use only the finest ingredients to bring out the best flavors in every bite.</p>
                            </div>
                        </div>
                        {/* Insert DIvider Here */}
                        <div>
                            <Gift />
                            <div>
                                <h3>Beautifully Packaged</h3>
                                <p>Delightfully packaged, perfect for sharing or treating yourself.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div class="signature-wrapper">
                        <div>
                            <Link><img src="" alt="" /></Link>
                            <p>Iced Oatmeal Cookie</p>
                            <p>$99.50</p>
                        </div>
                        <div>
                            <Link><img src="" alt="" /></Link>
                            <p>Dark Chocolate Pecan Cookie</p>
                            <p>$99.50</p>
                        </div>
                        <div>
                            <Link><img src="" alt="" /></Link>
                            <p>Apple Cinnamon Cookie</p>
                            <p>$99.50</p>
                        </div>
                        <div>
                            <Link><img src="" alt="" /></Link>
                            <p>Peanut Butter Chocolate Swirl Cookies</p>
                            <p>$99.50</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="review-wrapper">
                        <h2>Tasty and Unbeatable!</h2>
                        <div>
                            <div>
                                <p>Tom Cruise, mingming enjoyer</p>
                                <p>"Ming Ming Cookies are pure magic! Every bite is a d
                                    elightful dance of crisp edges, chewy centers, and rich, 
                                    comforting flavors. It’s the kind of treat that makes you 
                                    pause, close your eyes, and savor the moment. Absolutely irresistible!"</p>
                            </div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <Carousel />

            <section>
                <div className="container">
                    <div ></div>
                    <h2>Stay Connected with Us<span>@mingming.co</span></h2>
                    <p>Whether you're planning a special event, indulging in a personal treat, 
                        or gifting a loved one, we’ve got the perfect bite for you.</p>
                    <div>
                        <Link> 
                            <p>Get our newsletter</p>
                            <NewsLetterIcon />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}