import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart((prev) => prev + 1);
  };

  const removeFromCart = () => {
    if (cart === 0) return;
    setCart((prev) => prev - 1);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
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
                Burgers
              </h4>
                <a href="#" className="menu-item flex items-end hover:bg-amber-200 transition-all duration-150">
                  <span>Normal Burger</span>
                  <span className="mx-2 flex-1 border-b border-dotted mb-1"></span>
                  <span>$14</span>
                </a>
                <a href="#" className="menu-item flex items-end hover:bg-amber-200 transition-all duration-150">
                  <span>Normal Burger</span>
                  <span className="mx-2 flex-1 border-b border-dotted mb-1"></span>
                  <span>$14</span>
                </a>
                <a href="#" className="menu-item flex items-end hover:bg-amber-200 transition-all duration-150">
                  <span>Normal Burger</span>
                  <span className="mx-2 flex-1 border-b border-dotted mb-1"></span>
                  <span>$14</span>
                </a>
                <a href="#" className="menu-item flex items-end hover:bg-amber-200 transition-all duration-150">
                  <span>Normal Burger</span>
                  <span className="mx-2 flex-1 border-b border-dotted mb-1"></span>
                  <span>$14</span>
                </a>
            </div>

            <div className="menu-items border-t mt-6 first:mt-0">
              <h4 className="item-heading uppercase text-2xl font-bold mb-1">
                Burgers
              </h4>
                <a href="#" className="menu-item flex items-end hover:bg-amber-200 transition-all duration-150">
                  <span>Normal Burger</span>
                  <span className="mx-2 flex-1 border-b border-dotted mb-1"></span>
                  <span>$14</span>
                </a>
                <a href="#" className="menu-item flex items-end hover:bg-amber-200 transition-all duration-150">
                  <span>Normal Burger</span>
                  <span className="mx-2 flex-1 border-b border-dotted mb-1"></span>
                  <span>$14</span>
                </a>
                <a href="#" className="menu-item flex items-end hover:bg-amber-200 transition-all duration-150">
                  <span>Normal Burger</span>
                  <span className="mx-2 flex-1 border-b border-dotted mb-1"></span>
                  <span>$14</span>
                </a>
                <a href="#" className="menu-item flex items-end hover:bg-amber-200 transition-all duration-150">
                  <span>Normal Burger</span>
                  <span className="mx-2 flex-1 border-b border-dotted mb-1"></span>
                  <span>$14</span>
                </a>
            </div>
          </div>
          <div className="menu-right flex-2 p-3 bg-light-primary">
            <div className="menu-card space-y-4">
              <div className="menu-card-image rounded-md object-cover overflow-hidden">
                <img
                  src="/burger.png"
                  draggable="false"
                  className="w-full select-none"
                  alt=""
                />
              </div>
              <div className="menu-card-content space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="menu-card-title font-bold text-2xl">
                    Crispy Burger Lorem, ipsum dolor. Lorem ipsum dolor sit amet
                    consectetur.{" "}
                  </h4>
                  <span className="menu-card-price font-bold text-2xl">
                    $14
                  </span>
                </div>
                <p className="menu-card-description text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatum, magni. Sit illum tenetur ratione odit!
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
                    4.1
                  </span>
                  <span className="time-to-make badge">30 min</span>
                  <span className="calories badge">500 cal</span>
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
                  <button className="add-to-cart bg-primary hover:bg-amber-200 transition-all duration-150 flex-1 rounded text-white">
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
