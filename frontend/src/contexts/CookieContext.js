import { createContext, use, useContext, useEffect, useState } from "react";

const CookieContext = createContext();

export const useCookieContext = () => useContext(CookieContext);

export const CookieProvider = ({ children }) => {
  const cookies = [
    {
      id: 1,
      name: "Iced Oatmeal Cookies",
      price: "12.75",
      image_url: "cookieNormal/iced-oatmeal-cookies.png",
      image_url_hover: "cookieNormal/iced-oatmeal-cookies-hover.png",
      image_long: "cookieNormal/iced-oatmeal-cookies-long.png",
      category: ["oatmeal"],
    },
    {
      id: 2,
      name: "Dark Chocolate Pecan Cookies",
      price: "14.00",
      image_url: "cookieNormal/dark-chocolate-pecan-cookies.png",
      image_url_hover: "cookieNormal/dark-chocolate-pecan-cookies-hover.png",
      image_long: "cookieNormal/dark-chocolate-pecan-cookies-long.png",
      category: ["nuts", "chocolate"],
    },
    {
      id: 3,
      name: "Apple Cinnamon Oatmeal Cookies",
      price: "11.50",
      image_url: "cookieNormal/apple-cinnamon-oatmeal-cookies.png",
      image_url_hover: "cookieNormal/apple-cinnamon-oatmeal-cookies-hover.png",
      image_long: "cookieNormal/apple-cinnamon-oatmeal-cookies-long.png",
      category: ["oatmeal", "nuts"],
    },
    {
      id: 4,
      name: "Soft & Chewy Oatmeal Raisin Cookies",
      price: "10.99",
      image_url: "cookieNormal/soft-and-chewy-oatmeal-raisin-cookies.png",
      image_url_hover:
        "cookieNormal/soft-and-chewy-oatmeal-raisin-cookies-hover.png",
      image_long: "cookieNormal/soft-and-chewy-oatmeal-raisin-cookies-long.png",
      category: ["oatmeal"],
    },
    {
      id: 5,
      name: "Chewy Chocolate Chip Cookies",
      price: "13.25",
      image_url: "cookieNormal/chewy-chocolate-chip-cookies.png",
      image_url_hover: "cookieNormal/chewy-chocolate-chip-cookies-hover.png",
      image_long: "cookieNormal/chewy-chocolate-chip-cookies-long.png",
      category: ["chocolate"],
    },
    {
      id: 6,
      name: "Peanut Butter Chocolate Swirl Cookies",
      price: "15.50",
      image_url: "cookieNormal/peanut-butter-chocolate-swirl-cookies.png",
      image_url_hover:
        "cookieNormal/peanut-butter-chocolate-swirl-cookies-hover.png",
      image_long: "cookieNormal/peanut-butter-chocolate-swirl-cookies-long.png",
      category: ["nuts", "chocolate"],
    },
    {
      id: 7,
      name: "Double Chocolate Chip Cookies",
      price: "14.75",
      image_url: "cookieNormal/double-chocolate-chip-cookies.png",
      image_url_hover: "cookieNormal/double-chocolate-chip-cookies-hover.png",
      image_long: "cookieNormal/double-chocolate-chip-cookies-long.png",
      category: ["chocolate"],
    },
    {
      id: 8,
      name: "White Chocolate Red Velvet Cookies",
      price: "16.00",
      image_url: "cookieNormal/white-chocolate-red-velvet-cookies.png",
      image_url_hover:
        "cookieNormal/white-chocolate-red-velvet-cookies-hover.png",
      image_long: "cookieNormal/white-chocolate-red-velvet-cookies-long.png",
      category: ["chocolate"],
    },
    {
      id: 9,
      name: "White Chocolate Peanut Butter Cookies",
      price: "13.80",
      image_url: "cookieNormal/white-chocolate-peanut-butter-cookies.png",
      image_url_hover:
        "cookieNormal/white-chocolate-peanut-butter-cookies-hover.png",
      image_long: "cookieNormal/white-chocolate-peanut-butter-cookies-long.png",
      category: ["nuts", "chocolate"],
    },
  ];

  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const [cookieOption, setCookieOption] = useState(cookies[1]);
  const [isCartOverlayOpen, setIsCardOverlayOpen] = useState(false);

  const sortByCategory = (category) => {
    if (category === "all") return cookies;
    return cookies.filter((cookie) => cookie.category.includes(category));
  };

  const value = {
    cookies,
    isOptionClicked,
    setIsOptionClicked,
    cookieOption,
    setCookieOption,
    isCartOverlayOpen,
    setIsCardOverlayOpen,
    sortByCategory,
  };

  return (
    <CookieContext.Provider value={value}>{children}</CookieContext.Provider>
  );
};
