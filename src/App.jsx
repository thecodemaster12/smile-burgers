import { useState } from "react";
import burgerMenu from "../data/data.js";

const App = () => {
  const [checkoutCart, setCheckoutCart] = useState({
    items: [],
    total: 0,
  });
  const [selectedCategory, setSelectedCategory] = useState(
    burgerMenu[0].categoryName,
  );
  const [cart, setCart] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentSelectedItem, setCurrentSelectedItem] = useState(
    burgerMenu[0].items[0],
  );

  const burgerMenus = burgerMenu;

  const addToCart = () => {
    setCart((prev) => prev + 1);
  };

  const handelAddToCard = (item) => {
    if (cart === 0) return;

    setCheckoutCart((prev) => {
      const existingItem = prev.items.find(
        (cartItem) => cartItem.id === item.id,
      );

      let updatedItems;

      if (existingItem) {
        updatedItems = prev.items.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + cart,
                totalPrice: (cartItem.quantity + cart) * cartItem.price,
              }
            : cartItem,
        );
      } else {
        updatedItems = [
          ...prev.items,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: cart,
            totalPrice: item.price * cart,
          },
        ];
      }

      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.totalPrice, 0),
      };
    });

    setCart(0);
  };

  const removeFromCart = () => {
    if (cart === 0) return;
    setCart((prev) => prev - 1);
  };

  const updateCurrentSelectedItem = (item) => {
    setCurrentSelectedItem(item);
    setCart(0);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const currentCategory = burgerMenu.find(
    (category) => category.categoryName === selectedCategory,
  );

  const removeItemFromCheckout = (itemName) => {
    setCheckoutCart((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.name !== itemName),
    }))
    // alert(itemName);
  }

  return (
    <>
      <div className="min-h-screen bg-orange-50 flex flex-col items-center relative">
        <div
          className={`p-4 flex flex-col fixed top-0 left-0 w-1/2 md:w-1/3 lg:w-1/4 xl h-full bg-black text-white shadow ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-end">
            <span
              className="cursor-pointer mb-4 hover:rotate-180 transition-all duration-300 hover:text-red-500"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="currentColor"
                fill="none"
              >
                <defs></defs>
                <path
                  fill="currentColor"
                  d="M4.97,4.47 C5.263,4.177 5.737,4.177 6.03,4.47 L12.5,10.939 L18.97,4.47 C19.263,4.177 19.737,4.177 20.03,4.47 C20.323,4.763 20.323,5.237 20.03,5.53 L13.561,12 L20.03,18.47 C20.323,18.763 20.323,19.237 20.03,19.53 C19.737,19.823 19.263,19.823 18.97,19.53 L12.5,13.061 L6.03,19.53 C5.737,19.823 5.263,19.823 4.97,19.53 C4.677,19.237 4.677,18.763 4.97,18.47 L11.439,12 L4.97,5.53 C4.677,5.237 4.677,4.763 4.97,4.47 Z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="flex-grow">
            {checkoutCart.items.length === 0 ? (
              <div className="text-center text-gray-500">
                Your cart is empty.
              </div>
            ) : (
              checkoutCart.items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[1fr_60px_70px_30px] border-b border-gray-600 border-dashed py-2 hover:bg-gray-600 transition-all duration-150 px-2 rounded"
                >
                  <div className="">{item.name}</div>

                  <div className="">x {item.quantity}</div>

                  <div className="place-content-end">
                    ${item.totalPrice.toFixed(2)}
                  </div>
                  <div onClick={() => removeItemFromCheckout(item.name)} className="text-red-500 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="currentColor"
                      fill="none"
                    >
                      <defs></defs>
                      <path
                        fill="currentColor"
                        d="M13.103,1.25 C13.474,1.251 13.797,1.256 14.075,1.281 C14.444,1.314 14.788,1.386 15.122,1.559 C15.255,1.628 15.381,1.707 15.5,1.796 C15.802,2.021 16.016,2.299 16.207,2.617 C16.387,2.916 16.569,3.293 16.784,3.736 L17.276,4.75 L21.75,4.75 C22.164,4.75 22.5,5.086 22.5,5.5 C22.5,5.914 22.164,6.25 21.75,6.25 L20.955,6.25 L20.376,15.61 C20.299,16.858 20.238,17.848 20.113,18.639 C19.984,19.45 19.778,20.126 19.366,20.717 C18.989,21.257 18.504,21.714 17.941,22.056 C17.326,22.431 16.639,22.595 15.821,22.674 C15.024,22.75 14.032,22.75 12.781,22.75 L12.704,22.75 C11.452,22.75 10.459,22.75 9.66,22.674 C8.842,22.595 8.154,22.431 7.539,22.055 C6.975,21.712 6.49,21.255 6.113,20.713 C5.701,20.121 5.496,19.445 5.368,18.632 C5.244,17.84 5.184,16.849 5.108,15.599 L4.544,6.25 L3.75,6.25 C3.336,6.25 3,5.914 3,5.5 C3,5.086 3.336,4.75 3.75,4.75 L8.321,4.75 L8.74,3.831 C8.949,3.371 9.127,2.981 9.304,2.671 C9.492,2.342 9.705,2.052 10.011,1.818 C10.131,1.726 10.259,1.643 10.394,1.572 C10.734,1.391 11.085,1.317 11.463,1.282 C11.818,1.25 12.247,1.25 12.752,1.25 Z M19.452,6.25 L6.047,6.25 L6.603,15.47 C6.682,16.767 6.738,17.687 6.85,18.4 C6.96,19.1 7.114,19.526 7.344,19.857 C7.602,20.227 7.934,20.54 8.32,20.775 C8.663,20.984 9.098,21.113 9.804,21.18 C10.522,21.249 11.443,21.25 12.743,21.25 C14.04,21.25 14.961,21.249 15.678,21.181 C16.383,21.113 16.817,20.985 17.16,20.775 C17.546,20.541 17.878,20.229 18.136,19.859 C18.366,19.529 18.52,19.104 18.631,18.404 C18.744,17.692 18.802,16.774 18.882,15.479 Z M10.25,9.75 C10.664,9.75 11,10.086 11,10.5 L11,16.5 C11,16.914 10.664,17.25 10.25,17.25 C9.836,17.25 9.5,16.914 9.5,16.5 L9.5,10.5 C9.5,10.086 9.836,9.75 10.25,9.75 Z M15.25,9.75 C15.664,9.75 16,10.086 16,10.5 L16,16.5 C16,16.914 15.664,17.25 15.25,17.25 C14.836,17.25 14.5,16.914 14.5,16.5 L14.5,10.5 C14.5,10.086 14.836,9.75 15.25,9.75 Z M13.199,2.751 L12.408,2.751 C12.063,2.752 11.808,2.757 11.599,2.776 C11.333,2.8 11.198,2.843 11.098,2.896 C11.037,2.929 10.979,2.966 10.924,3.008 C10.834,3.077 10.739,3.183 10.607,3.414 C10.468,3.658 10.318,3.985 10.091,4.482 L9.969,4.75 L15.609,4.75 L15.448,4.419 C15.216,3.939 15.062,3.624 14.921,3.389 C14.787,3.166 14.693,3.065 14.603,2.998 C14.549,2.958 14.492,2.922 14.432,2.89 C14.333,2.839 14.2,2.798 13.941,2.775 C13.746,2.758 13.512,2.752 13.199,2.751 Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="font-bold text-xl mt-4">
            <div className="text-right mb-4">
              Total:{" "}
              <span className="text-primary">
                ${checkoutCart.total.toFixed(2)}
              </span>
            </div>

            <div className="check-out">
              <button className="add-to-cart bg-primary hover:bg-orange-400 transition-all duration-150 flex-1 rounded text-white text-xl font-bold w-full py-3">
                Check Out
              </button>
            </div>
          </div>
        </div>
        <header className="flex items-center justify-between w-full position-sticky top-0 bg-white p-4 shadow">
          <div className="logo font-bold text-2xl text-primary">
            QuickBurger
          </div>
          <div
            onClick={toggleSidebar}
            className="flex gap-2 bg-black text-white px-3 py-2 rounded cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="currentColor"
              fill="none"
            >
              <path
                d="M14.8535 3.25C17.7773 3.25011 20.1286 5.53627 20.9678 8.49609C21.0876 8.9189 21.21 9.33746 21.2412 9.71094C21.264 9.98371 21.2401 10.2469 21.1514 10.5049C22.0945 10.9408 22.75 11.8928 22.75 13C22.75 14.0836 22.1217 15.0177 21.2109 15.4658C21.2529 15.6407 21.2573 15.8085 21.2393 15.9629C21.2014 16.2871 21.0568 16.6357 20.9443 16.9189C20.0413 19.194 17.618 20.7498 14.8545 20.75H9.14551C6.382 20.7498 3.95866 19.194 3.05566 16.9189C2.94323 16.6357 2.79863 16.2871 2.76074 15.9629C2.74275 15.8086 2.74621 15.6406 2.78809 15.4658C1.87774 15.0176 1.25 14.0833 1.25 13C1.25 11.8934 1.90443 10.9412 2.84668 10.5049C2.75834 10.247 2.73507 9.98355 2.75781 9.71094C2.78899 9.33752 2.91042 8.91884 3.03027 8.49609C3.8694 5.53629 6.22175 3.25023 9.14551 3.25H14.8535ZM4 11.75C3.30964 11.75 2.75 12.3096 2.75 13C2.75 13.6904 3.30964 14.25 4 14.25H5C5.02638 14.25 5.05245 14.2512 5.07812 14.2539C5.23813 14.252 5.40536 14.25 5.57812 14.25H6C6.41421 14.25 6.75 14.5858 6.75 15C6.75 15.4142 6.41421 15.75 6 15.75H5.57812C5.03403 15.75 4.70466 15.7519 4.46777 15.7852C4.35924 15.8004 4.30105 15.8184 4.27148 15.8311C4.26751 15.8328 4.26482 15.8373 4.26172 15.8389C4.2691 15.8697 4.28037 15.9137 4.30078 15.9736C4.33639 16.0782 4.38441 16.2005 4.4502 16.3662C5.0988 17.9999 6.91831 19.2498 9.14551 19.25H14.8545C17.0817 19.2498 18.9012 17.9999 19.5498 16.3662C19.6156 16.2005 19.6636 16.0782 19.6992 15.9736C19.7197 15.9135 19.7319 15.8697 19.7393 15.8389C19.736 15.8372 19.7328 15.8329 19.7285 15.8311C19.6989 15.8184 19.6407 15.8004 19.5322 15.7852C19.2953 15.7519 18.966 15.75 18.4219 15.75H14C13.5858 15.75 13.25 15.4142 13.25 15C13.25 14.5858 13.5858 14.25 14 14.25H18.4219C18.5943 14.25 18.7612 14.252 18.9209 14.2539C18.9469 14.2512 18.9733 14.25 19 14.25H20C20.6904 14.25 21.25 13.6904 21.25 13C21.25 12.3096 20.6904 11.75 20 11.75H12.3447L11.0879 13.2168C10.7499 13.6111 10.4451 13.9687 10.1621 14.2178C9.86323 14.4807 9.48942 14.7139 9 14.7139C8.51058 14.7139 8.13677 14.4807 7.83789 14.2178C7.55486 13.9687 7.25006 13.6111 6.91211 13.2168L5.65527 11.75H4ZM8.05078 12.2402C8.41846 12.6692 8.64337 12.9292 8.82812 13.0918C8.91319 13.1666 8.9639 13.1964 8.98828 13.208C8.99366 13.2106 8.99778 13.2121 9 13.2129C9.00222 13.2121 9.00634 13.2106 9.01172 13.208C9.0361 13.1964 9.08681 13.1666 9.17188 13.0918C9.35663 12.9292 9.58154 12.6692 9.94922 12.2402L10.3691 11.75H7.63086L8.05078 12.2402ZM9.14551 4.75C7.07839 4.75024 5.18599 6.39263 4.47363 8.90527C4.33819 9.38301 4.26826 9.64056 4.25195 9.83594C4.24043 9.97453 4.26045 10.0299 4.31152 10.1055C4.33688 10.143 4.35405 10.1749 4.50684 10.2051C4.71928 10.2469 5.02478 10.25 5.57715 10.25H18.4209C18.9733 10.25 19.2787 10.2468 19.4912 10.2051C19.6445 10.1749 19.6621 10.143 19.6875 10.1055C19.7386 10.0299 19.7576 9.97465 19.7461 9.83594C19.7298 9.64054 19.6599 9.38312 19.5244 8.90527C18.812 6.3926 16.9207 4.75011 14.8535 4.75H9.14551ZM9 7C9.55228 7 10 7.44772 10 8C10 8.55229 9.55228 9 9 9C8.44772 9 8 8.55228 8 8C8 7.44772 8.44771 7 9 7ZM14.4697 6.46973C14.7626 6.17683 15.2374 6.17683 15.5303 6.46973C15.8231 6.76262 15.8231 7.2374 15.5303 7.53027L14.5303 8.53027C14.2374 8.82315 13.7626 8.82311 13.4697 8.53027C13.1768 8.23738 13.1768 7.76262 13.4697 7.46973L14.4697 6.46973Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="">{checkoutCart.items.length}</div>
          </div>
        </header>

        <div className="py-4">
          <h2 className="text-center text-3xl font-bold font-pt-sans py-2">
            Choose Your Favorite
          </h2>
          <div className="flex gap-2">
            {burgerMenus.map((category) => (
              <button
                key={category.categoryName}
                onClick={() => {
                  setSelectedCategory(category.categoryName);

                  // Select first item automatically
                  setCurrentSelectedItem(category.items[0]);
                }}
                className={`
                  badge
                  ${
                    selectedCategory === category.categoryName
                      ? "bg-primary text-white"
                      : ""
                  }
                `}
              >
                {category.categoryName}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-wrapper flex max-w-4xl w-full min-h-96">
          <div className="menu-left flex-1 p-3 rounded bg-primary">
            <div className="heading">
              <h2 className="title uppercase text-center text-6xl font-bold mb-4 font-pt-sans">
                menu
              </h2>
              <p className="data-time mb-4">
                Everyday from 10:00 am to 10:00 pm
              </p>
            </div>

            <div className="menu-items border-t mt-6 first:mt-0">
              <h4 className="item-heading uppercase text-2xl font-bold mb-1">
                {currentCategory.categoryName}
              </h4>
              {currentCategory.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSelectedItem(item)}
                  className="menu-item w-full text-left flex items-end hover:bg-orange-300 transition-all duration-150 px-2 py-1 rounded cursor-pointer"
                >
                  <span>{item.name}</span>
                  <span className="mx-2 flex-1 border-b border-dotted mb-1"></span>
                  <span>${item.price}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="menu-right flex-2 p-3 bg-light-primary">
            <div className="menu-card space-y-4">
              <div className="menu-card-image max-w-[400px] mx-auto rounded-md object-cover overflow-hidden">
                <img
                  src={currentSelectedItem.image}
                  draggable="false"
                  className="w-full select-none"
                  alt={currentSelectedItem.name}
                />
              </div>
              <div className="menu-card-content space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="menu-card-title font-bold text-2xl">
                    {currentSelectedItem.name}
                  </h4>
                  <span className="menu-card-price font-bold text-2xl">
                    ${currentSelectedItem.price}
                  </span>
                </div>
                <p className="menu-card-description text-gray-600">
                  {currentSelectedItem.description}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="rating badge flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      color="currentColor"
                      fill="none"
                    >
                      <defs></defs>
                      <path
                        fill="currentColor"
                        d="M14.399,3.112 L16.162,6.665 C16.215,6.775 16.342,6.93 16.532,7.072 C16.722,7.213 16.909,7.291 17.031,7.312 L20.221,7.846 C21.373,8.04 22.339,8.604 22.652,9.588 C22.965,10.571 22.506,11.592 21.678,12.422 L21.677,12.422 L19.199,14.921 C19.101,15.02 18.991,15.206 18.922,15.449 C18.853,15.691 18.847,15.911 18.878,16.053 L18.879,16.055 L19.588,19.145 C19.882,20.432 19.784,21.707 18.877,22.374 C17.967,23.043 16.723,22.747 15.592,22.074 L12.603,20.289 C12.477,20.214 12.261,20.153 12.001,20.153 C11.743,20.153 11.523,20.213 11.389,20.291 L11.387,20.292 L8.403,22.073 C7.274,22.749 6.032,23.04 5.121,22.37 C4.214,21.703 4.112,20.43 4.407,19.145 L5.116,16.055 L5.116,16.053 C5.147,15.911 5.141,15.691 5.073,15.449 C5.004,15.206 4.894,15.02 4.796,14.921 L2.316,12.421 C1.493,11.591 1.035,10.57 1.346,9.589 C1.658,8.605 2.621,8.04 3.774,7.846 L6.961,7.312 L6.962,7.312 C7.079,7.292 7.263,7.215 7.452,7.073 C7.643,6.931 7.77,6.775 7.823,6.665 L7.826,6.66 L9.586,3.111 L9.586,3.11 C10.119,2.041 10.948,1.25 11.996,1.25 C13.045,1.25 13.872,2.043 14.399,3.112 Z M10.929,3.779 L9.171,7.324 C8.984,7.706 8.672,8.034 8.351,8.274 C8.028,8.515 7.628,8.72 7.214,8.791 L7.212,8.791 L4.023,9.325 C3.136,9.474 2.844,9.826 2.776,10.042 C2.707,10.261 2.744,10.722 3.381,11.364 L5.861,13.865 C6.182,14.189 6.397,14.622 6.516,15.04 C6.634,15.458 6.679,15.938 6.58,16.38 L6.579,16.385 L5.869,19.48 C5.604,20.635 5.872,21.06 6.01,21.162 C6.144,21.261 6.622,21.391 7.633,20.786 L10.628,18.998 C11.044,18.754 11.543,18.653 12.001,18.653 C12.458,18.653 12.957,18.754 13.372,19.001 L16.361,20.785 L16.361,20.785 L16.361,20.785 C17.38,21.392 17.857,21.263 17.989,21.166 C18.124,21.066 18.391,20.643 18.125,19.48 L17.414,16.38 C17.316,15.938 17.36,15.458 17.479,15.04 C17.597,14.622 17.812,14.189 18.134,13.865 L20.614,11.364 L20.616,11.363 C21.257,10.721 21.292,10.26 21.223,10.043 C21.154,9.827 20.86,9.475 19.972,9.325 L16.783,8.791 C16.365,8.721 15.962,8.517 15.637,8.275 C15.313,8.034 15.001,7.706 14.814,7.324 L13.054,3.776 C12.632,2.92 12.204,2.75 11.996,2.75 C11.787,2.75 11.356,2.922 10.929,3.779 Z"
                      ></path>
                    </svg>
                    {currentSelectedItem.rating}
                  </span>
                  <span className="time-to-make badge">
                    {currentSelectedItem.timeToMake}
                  </span>
                  <span className="calories badge">
                    {currentSelectedItem.calories} cal
                  </span>
                </div>

                <div className="order-area flex gap-4">
                  <div className="item-count bg-black text-white shrink-0 flex rounded">
                    <button onClick={removeFromCart} className="minus p-2">
                      <svg
                        className="text-white hover:text-primary transition-colors"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                      >
                        <defs></defs>
                        <path
                          fill="currentColor"
                          d="M11.943,1.75 L12.057,1.75 C14.248,1.75 15.969,1.75 17.312,1.931 C18.689,2.116 19.781,2.503 20.639,3.361 C21.497,4.219 21.884,5.311 22.069,6.688 C22.25,8.031 22.25,9.752 22.25,11.943 L22.25,12.057 C22.25,14.248 22.25,15.969 22.069,17.312 C21.884,18.689 21.497,19.781 20.639,20.639 C19.781,21.497 18.689,21.884 17.312,22.069 C15.969,22.25 14.248,22.25 12.057,22.25 L11.943,22.25 C9.752,22.25 8.031,22.25 6.688,22.069 C5.311,21.884 4.219,21.497 3.361,20.639 C2.503,19.781 2.116,18.689 1.931,17.312 C1.75,15.969 1.75,14.248 1.75,12.057 L1.75,11.943 C1.75,9.752 1.75,8.031 1.931,6.688 C2.116,5.311 2.503,4.219 3.361,3.361 C4.219,2.503 5.311,2.116 6.688,1.931 C8.031,1.75 9.752,1.75 11.943,1.75 L11.943,1.75 Z M4.422,4.422 C3.889,4.955 3.58,5.678 3.417,6.888 C3.252,8.12 3.25,9.74 3.25,12 C3.25,14.26 3.252,15.88 3.417,17.112 C3.58,18.322 3.889,19.045 4.422,19.578 C4.955,20.111 5.678,20.42 6.888,20.583 C8.12,20.748 9.74,20.75 12,20.75 C14.26,20.75 15.88,20.748 17.112,20.583 C18.322,20.42 19.045,20.111 19.578,19.578 C20.111,19.045 20.42,18.322 20.583,17.112 C20.748,15.88 20.75,14.26 20.75,12 C20.75,9.74 20.748,8.12 20.583,6.888 C20.42,5.678 20.111,4.955 19.578,4.422 C19.045,3.889 18.322,3.58 17.112,3.417 C15.88,3.252 14.26,3.25 12,3.25 C9.74,3.25 8.12,3.252 6.888,3.417 C5.678,3.58 4.955,3.889 4.422,4.422 Z M8,11.25 L16,11.25 C16.414,11.25 16.75,11.586 16.75,12 C16.75,12.414 16.414,12.75 16,12.75 L8,12.75 C7.586,12.75 7.25,12.414 7.25,12 C7.25,11.586 7.586,11.25 8,11.25 Z"
                        ></path>
                      </svg>
                    </button>
                    <span className="count p-2 tabular-nums">{cart}</span>
                    <button onClick={addToCart} className="plus p-2">
                      <svg
                        className="text-white hover:text-primary transition-colors"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                      >
                        <defs></defs>
                        <path
                          fill="currentColor"
                          d="M11.943,1.75 L12.057,1.75 C14.248,1.75 15.969,1.75 17.312,1.931 C18.689,2.116 19.781,2.503 20.639,3.361 C21.497,4.219 21.884,5.311 22.069,6.688 C22.25,8.031 22.25,9.752 22.25,11.943 L22.25,12.057 C22.25,14.248 22.25,15.969 22.069,17.312 C21.884,18.689 21.497,19.781 20.639,20.639 C19.781,21.497 18.689,21.884 17.312,22.069 C15.969,22.25 14.248,22.25 12.057,22.25 L11.943,22.25 C9.752,22.25 8.031,22.25 6.688,22.069 C5.311,21.884 4.219,21.497 3.361,20.639 C2.503,19.781 2.116,18.689 1.931,17.312 C1.75,15.969 1.75,14.248 1.75,12.057 L1.75,11.943 C1.75,9.752 1.75,8.031 1.931,6.688 C2.116,5.311 2.503,4.219 3.361,3.361 C4.219,2.503 5.311,2.116 6.688,1.931 C8.031,1.75 9.752,1.75 11.943,1.75 L11.943,1.75 Z M4.422,4.422 C3.889,4.955 3.58,5.678 3.417,6.888 C3.252,8.12 3.25,9.74 3.25,12 C3.25,14.26 3.252,15.88 3.417,17.112 C3.58,18.322 3.889,19.045 4.422,19.578 C4.955,20.111 5.678,20.42 6.888,20.583 C8.12,20.748 9.74,20.75 12,20.75 C14.26,20.75 15.88,20.748 17.112,20.583 C18.322,20.42 19.045,20.111 19.578,19.578 C20.111,19.045 20.42,18.322 20.583,17.112 C20.748,15.88 20.75,14.26 20.75,12 C20.75,9.74 20.748,8.12 20.583,6.888 C20.42,5.678 20.111,4.955 19.578,4.422 C19.045,3.889 18.322,3.58 17.112,3.417 C15.88,3.252 14.26,3.25 12,3.25 C9.74,3.25 8.12,3.252 6.888,3.417 C5.678,3.58 4.955,3.889 4.422,4.422 Z M12.75,8 L12.75,11.25 L16,11.25 C16.414,11.25 16.75,11.586 16.75,12 C16.75,12.414 16.414,12.75 16,12.75 L12.75,12.75 L12.75,16 C12.75,16.414 12.414,16.75 12,16.75 C11.586,16.75 11.25,16.414 11.25,16 L11.25,12.75 L8,12.75 C7.586,12.75 7.25,12.414 7.25,12 C7.25,11.586 7.586,11.25 8,11.25 L11.25,11.25 L11.25,8 C11.25,7.586 11.586,7.25 12,7.25 C12.414,7.25 12.75,7.586 12.75,8 Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    onClick={() => handelAddToCard(currentSelectedItem)}
                    className="add-to-cart bg-primary hover:bg-orange-400 transition-all duration-150 flex-1 rounded text-white text-xl font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
