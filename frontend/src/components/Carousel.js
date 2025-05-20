import { Link } from "react-router-dom";
import { ImageTransition } from "./ImageTransition.js";
import { useEffect } from "react";
import { NewsLetterIcon } from "./svgComponents/NewsLetterIcon.js";

export const Carousel = () => {
    const cookieNormalContext = require.context("../cookieNormal");
    const cookieNormalSources = cookieNormalContext.keys().map(cookieNormalContext);

    function addAnimation(){
        const caroWrap = document.querySelector('.carousel-wrapper');
        caroWrap.setAttribute("data-animated", true);

        const caroItems = caroWrap.querySelector('.carousel-items');

        const itemsContent = Array.from(caroItems.children);

        itemsContent.forEach((item) => {
            const duplicateItem = item.cloneNode(true);
            duplicateItem.setAttribute("aria-hidden", true);
            caroItems.appendChild(duplicateItem);
        });
    }


    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){ 
            addAnimation(); 
        }
    }, []);

    return (
        <section className="padding-block-500">
            <div className="container">
                <div className="carousel-header">
                    <h2 className="heading-big-libre-baskerville clr-primary-600">Cookie Gallery</h2>
                    <Link to="/" className="see-more | fs-newsletter fw-semibold cta-hover">
                        <p>See More</p>
                        <NewsLetterIcon className="icons"/>
                    </Link>
                </div>
                <div className="carousel-wrapper">
                    <ul className="carousel-items">
                        <li>
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[1]} hovSource={cookieNormalSources[0]} alt={"White Chocolate Red Velvet Cookies"} isLong={false}/></Link>
                                    <p className="cookie-title">White Chocolate Red Velvet Cookies</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                        </li>
                        <li>
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[3]} hovSource={cookieNormalSources[2]} alt={"Apple Cinnamon Cookies"} isLong={false}/></Link>
                                    <p className="cookie-title">Apple Cinnamon Cookies</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                        </li>
                        <li>
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[5]} hovSource={cookieNormalSources[4]} alt={"Chewy Chocolate Chip Cookies"} isLong={false}/></Link>
                                    <p className="cookie-title">Chewy Chocolate Chip Cookies</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                        </li>
                        <li>
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[7]} hovSource={cookieNormalSources[6]} alt={"Dark Chocolate Pecan Cookies"} isLong={false}/></Link>
                                    <p className="cookie-title">Dark Chocolate Pecan Cookies</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                        </li>
                        <li>
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[9]} hovSource={cookieNormalSources[8]} alt={"Double Chocolate Chip Cookies"} isLong={false}/></Link>
                                    <p className="cookie-title">Double Chocolate Chip Cookies</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                        </li>
                        <li>
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[11]} hovSource={cookieNormalSources[10]} alt={"Iced Oatmeal Cookie"} isLong={false}/></Link>
                                    <p className="cookie-title">Iced Oatmeal Cookie</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                        </li>
                        <li>
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[13]} hovSource={cookieNormalSources[12]} alt={"Peanut Butter Chocolate Swirl Cookies"} isLong={false}/></Link>
                                    <p className="cookie-title">Peanut Butter Chocolate Swirl Cookies</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                        </li>
                        <li>
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[15]} hovSource={cookieNormalSources[14]} alt={"Soft and Chewy Oatmeal Raisin Cookies"} isLong={false}/></Link>
                                    <p className="cookie-title">Soft and Chewy Oatmeal Raisin Cookies</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                        </li>
                        <li>
                            <div className="item-wrapper">
                                <div>
                                    <Link to="/"><ImageTransition defSource={cookieNormalSources[17]} hovSource={cookieNormalSources[16]} alt={"White Chocolate Peanut Butter COokies"} isLong={false}/></Link>
                                    <p className="cookie-title">White Chocolate Peanut Butter COokies</p>
                                </div>
                                <p className="cookie-price">$99.50</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}