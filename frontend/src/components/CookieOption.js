import "../css/CookieOption.css";
import { useState } from "react";
import { useCookieContext } from "../contexts/CookieContext";
import ReactDom from "react-dom";

function CookieOption({ cookie, isOpen }) {
  const { setIsOptionClicked, setIsCardOverlayOpen } = useCookieContext();
  const [counter, setCounter] = useState(1);

  const onCookieNumberClick = (e) => {
    setCounter(parseInt(e.target.value));
  };

  const onCounterClick = (e) => {
    if (e.target.value === "decrement") {
      setCounter((prev) => (prev - 1 > 0 ? prev - 1 : 1));
    } else if (e.target.value === "increment") {
      setCounter((prev) => prev + 1);
    }
  };

  const onAddToCart = async () => {
    setCounter(1);
    setIsCardOverlayOpen(true);

    setTimeout(() => {
      setIsOptionClicked(false);
      setIsCardOverlayOpen(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div
        className="shade"
        onClick={() => {
          setIsOptionClicked(false);
          setCounter(1);
        }}
      />
      <div className="cookie-option">
        <img
          className="left-side"
          src={`${process.env.PUBLIC_URL}/${cookie.image_long}`}
          alt={cookie.name}
        />

        <div className="right">
          <div className="exit">
            <img
              src={`${process.env.PUBLIC_URL}/svg/Exit.png`}
              alt="Close"
              style={{ width: 40, height: 40 }}
              onClick={() => {
                setIsOptionClicked(false);
                setCounter(1);
              }}
              className="exit-btn"
            />
          </div>

          <h2 className="cookie-name">{cookie?.name}</h2>
          <h2 className="cookie-price">${cookie?.price}</h2>
          <p className="cookie-description">
            These generously thick, soft-baked cookies offer a truly decadent
            experience: a rich, fudgy interior, delightfully chewy centers,
            subtly crisp edges, and a cascade of melting chocolate chips in
            every bite.
          </p>
          <div className="options">
            <p>Options</p>
            <div className="cookie-numbers">
              <button
                onClick={onCookieNumberClick}
                className="cookie-number"
                value="3"
              >
                3 Pieces
              </button>
              <button
                onClick={onCookieNumberClick}
                className="cookie-number"
                value="6"
              >
                6 Pieces
              </button>
              <button
                onClick={onCookieNumberClick}
                className="cookie-number"
                value="9"
              >
                9 Pieces
              </button>
            </div>
          </div>

          <div className="quantity">
            <p>Quantity</p>
            <div className="quantity-section">
              <div className="counter-section">
                <button
                  onClick={onCounterClick}
                  className="counter-operation"
                  value="decrement"
                >
                  -
                </button>
                <p className="counter">{counter}</p>
                <button
                  onClick={onCounterClick}
                  className="counter-operation"
                  value="increment"
                >
                  +
                </button>
              </div>
              <button onClick={onAddToCart} className="add-to-cart">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default CookieOption;
