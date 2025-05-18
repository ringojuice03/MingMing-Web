import { Carousel } from "./Carousel";
import { Link } from "react-router-dom";
import { NewsLetterIcon } from "./svgComponents/NewsLetterIcon.js";
import { CookieArt } from "./svgComponents/CookieArt.js";
import { Jar } from "./svgComponents/Jar.js";
import { Gift } from "./svgComponents/Gift.js";
import { ImageTransition } from "./ImageTransition.js";
import tomCruise from "../images/tomCruise.png";

 
export const Home = () => {
    const cookieNormalContext = require.context("../cookieNormal");
    const cookieLongContext = require.context("../cookieLong");

    const cookieLongSources= cookieLongContext.keys().map(cookieLongContext);
    const cookieNormalSources = cookieNormalContext.keys().map(cookieNormalContext);

    console.log(cookieNormalSources);

    return(
        <main>
            <section className="padding-block-500">
                <div className="container">
                    <div className="hero-wrapper">
                        <div className="hero-text">
                            <h1 className="heading-big-league-spartan">
                                Baked to Perfection, <br/>Crafted for Delight
                            </h1>
                            <p>Indulge in a world where cookies are more than 
                                just a treat—they're an experience. Handcrafted 
                                with love, baked to golden perfection, and presented 
                                as edible works of art, our cookies are made to satisfy 
                                both your cravings and your eyes.</p>
                            <Link to="/" className="shop-now-wrapper"> 
                                <p>Shop Now</p>
                                <NewsLetterIcon className="icons"/>
                            </Link>
                        </div>
                        <div className="hero-images">
                            <Link to="/" className="image-link-container"><ImageTransition defSource={cookieLongSources[2]} hovSource={cookieLongSources[3]} alt={"peanut-butter-chocolate-swirl-cookies"} isLong={true}/></Link>
                            <Link to="/" className="image-link-container"><ImageTransition defSource={cookieLongSources[1]} hovSource={cookieLongSources[0]} alt={"double-chocolate-chip-cookies"} isLong={true}/></Link>
                        </div>
                    </div>
                    <div className="hero-description-wrapper">
                        <div>
                            <CookieArt className="icons"/>
                            <div>
                                <h3>Artisan Creations</h3>
                                <p className="hero-paras">Each cookie is a masterpiece, thoughtfully designed for both beauty and taste.</p>
                            </div>
                        </div>
                        <div className="hero-divider"></div>
                        <div>
                            <Jar className="icons"/>
                            <div>
                                <h3>Premium Ingredients</h3>
                                <p className="hero-paras">We use the finest ingredients to bring out the best flavors in every bite.</p>
                            </div>
                        </div>
                        <div className="hero-divider"></div>
                        <div>
                            <Gift className="icons"/>
                            <div>
                                <h3>Beautifully Packaged</h3>
                                <p className="hero-paras">Delightfully packaged, perfect for sharing or treating yourself.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="padding-block-500">
                <div className="container">
                    <div class="signature-wrapper">
                        <h2 className="heading-big-libre-baskerville">Signature <span className="clr-primary-700">Delights</span></h2>
                        <div class="signature-images-wrapper">
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[11]} hovSource={cookieNormalSources[10]} alt={"double-chocolate-chip-cookies"} isLong={false}/></Link>
                                    <p className="cookie-title">Iced Oatmeal Cookie</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[7]} hovSource={cookieNormalSources[6]} alt={"double-chocolate-chip-cookies"} isLong={false}/></Link>
                                    <p className="cookie-title">Dark Chocolate Pecan Cookie</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[3]} hovSource={cookieNormalSources[2]} alt={"double-chocolate-chip-cookies"} isLong={false}/></Link>
                                    <p className="cookie-title">Apple Cinnamon Cookie</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[13]} hovSource={cookieNormalSources[12]} alt={"double-chocolate-chip-cookies"} isLong={false}/></Link>
                                    <p className="cookie-title">Peanut Butter Chocolate Swirl Cookies</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="padding-block-500">
                <div className="container">
                    <div className="review-wrapper">
                        <h2 className="heading-big-libre-baskerville clr-primary-600">Tasty and <br/>Unbeatable!</h2>
                        <div className="inner-review-wrapper">
                            <div>
                                <div class="user-review-wrapper">
                                    <img src={tomCruise} alt="Profile"/>
                                    <p>Tom Cruise, MinMing Enjoyer</p>
                                </div>
                                <p className="review-description">"MingMing Cookies are pure magic! Every bite is a delightful dance of crisp edges, chewy centers, and rich, 
                                    comforting flavors. It’s the kind of treat that makes you 
                                    pause, close your eyes, and savor the moment. Absolutely irresistible!"</p>
                            </div>
                            <Link to="/" className="review-img"><ImageTransition defSource={cookieNormalSources[4]} hovSource={cookieNormalSources[5]} alt={"double-chocolate-chip-cookies"} isLong={false}/></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div ></div>
                    <h2 className="heading-big-league-spartan clr-primary-600">Stay Connected with Us<br/>
                    <span className="cta-company-text heading-big-libre-baskerville text-align-right">@mingming.co</span></h2>
                    <p>Whether you're planning a special event, indulging in a personal treat, 
                        or gifting a loved one, we’ve got the perfect bite for you.</p>
                    <div>
                        <Link className="cta-newsletter | fs-newsletter"> 
                            <p>Get our newsletter</p>
                            <NewsLetterIcon className="icons"/>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}