import CookieCard from "../components/CookieCard";
import "../css/Cookies.css";
import { useCookieContext } from "../contexts/CookieContext";
import { useEffect, useState } from "react";
import CookieOption from "../components/CookieOption";
import AddToCartOverlay from "../components/AddToCardOverlay";

function Cookies() {
  const {
    cookies,
    cookieOption,
    isOptionClicked,
    isCartOverlayOpen,
    sortByCategory,
  } = useCookieContext();

  const [cookieList, setCookieList] = useState(cookies);
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    setCookieList(sortByCategory(category));
  }, [category, setCategory]);

  const handleSearch = (e) => {
    e.preventDefault();
    const categoryCookies = sortByCategory(category);

    if (!searchQuery.trim()) {
      setCookieList(categoryCookies);
      setIsNotFound(false);
      return;
    }

    console.log(categoryCookies);
    const temp = categoryCookies.filter((cookie) =>
      cookie.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setCookieList(temp);
    setIsNotFound(temp.length === 0 ? true : false);
  };

  return (
    <>
      <div className="main-content">
        <div className="left-pane">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for cookies..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <div className="categories">
            <h3>Categories</h3>
            <button
              value="all"
              className={`category ${category === "all" ? "active" : ""}`}
              onClick={(e) => setCategory(e.target.value)}
            >
              All Cookies
            </button>
            <button
              value="oatmeal"
              className={`category ${category === "oatmeal" ? "active" : ""}`}
              onClick={(e) => setCategory(e.target.value)}
            >
              Oatmeal
            </button>
            <button
              value="nuts"
              className={`category ${category === "nuts" ? "active" : ""}`}
              onClick={(e) => setCategory(e.target.value)}
            >
              Nuts
            </button>
            <button
              value="chocolate"
              className={`category ${category === "chocolate" ? "active" : ""}`}
              onClick={(e) => setCategory(e.target.value)}
            >
              Chocolate
            </button>
          </div>
        </div>

        <div className="cookie-grid">
          {cookieList.map((cookie) => (
            <CookieCard cookie={cookie} key={cookie.id} />
          ))}
        </div>

        {isNotFound && (
          <div className="not-found">
            Cookie not found. Try searching for other cookies.
          </div>
        )}
      </div>

      <CookieOption
        className="class-overlay"
        cookie={cookieOption}
        isOpen={isOptionClicked}
      />

      <AddToCartOverlay className="cart-overlay" isOpen={isCartOverlayOpen} />
    </>
  );
}

export default Cookies;
