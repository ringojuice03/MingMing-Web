import "../css/CookieCard.css";
import { useCookieContext } from "../contexts/CookieContext";

function CookieCard({ cookie }) {
  const { setIsOptionClicked, setCookieOption } = useCookieContext();

  const onOptionClick = () => {
    setCookieOption(cookie);
    setIsOptionClicked(true);
  };

  return (
    <div className="cookie-card">
      <div className="cookie-poster">
        <img
          src={`${process.env.PUBLIC_URL}/${cookie.image_url}`}
          alt={cookie.name}
          className="normal-image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/${cookie.image_url_hover}`}
          alt={`${cookie.name} hover`}
          className="hover-image"
        />
      </div>

      <div className="bottom-info">
        <div className="cookie-details">
          <p className="name">{cookie.name}</p>
          <p className="price">${cookie.price}</p>
        </div>

        <button onClick={onOptionClick} className="cookie-options">
          <h3>Select Options</h3>
        </button>
      </div>
    </div>
  );
}

export default CookieCard;
