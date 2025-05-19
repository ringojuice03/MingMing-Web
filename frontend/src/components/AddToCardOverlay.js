import ReactDom from "react-dom";
import "../css/AddToCardOverlay.css";

function AddToCartOverlay({ isOpen }) {
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <div className="add-to-cart-overlay">
      <img
        src={`${process.env.PUBLIC_URL}/svg/Check.png`}
        alt="check"
        className="check-logo"
      />
      <p className="text">
        Item has been added to your <em>Cart</em>!
      </p>
    </div>,
    document.getElementById("portal")
  );
}

export default AddToCartOverlay;
