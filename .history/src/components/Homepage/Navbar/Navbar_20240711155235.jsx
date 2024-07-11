import React from "react";
import { Search , Person , Cart , Heart} from 'react-bootstrap-icons';

import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="container-fluid navbarMainContainer p-0 m-0">
      <div className="navbarCurrencyOption">
        <div className="container">
          <select id="currencySelector">
            <option value="USD">USD - United States Dollar</option>
            <option value="INR">INR Indian Rupee</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
          </select>
        </div>
      </div>

      <div className="navbarGoldLine">
        <img src="/img/Homepage/Goldline.png" alt="" />
      </div>
      <div className="container my-2">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/img/Homepage/Logo.png" alt="" className="logo" />
            </a>

            <div className="navbarIconsTablet">
            <form className="d-flex">
                <input
                  className="form-control navbarSearchbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="navbarsearchBox">
                   <Search color="#412814" size={20} className="navbarSearchIcon"/>
                </div>
                <div className="navbarIcons">
                  <Person color="#412814" size={25} className="mt-1" />
                  <Heart color="#412814" size={22} className="mt-1"/>
                  <Cart color="#412814" size={22} className="mt-1" />
                </div>
                
              </form>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navbarColor"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarOptions">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link navbarColor"
                    
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Rings <img src="/img/Homepage/Arrowdropdown.png" alt="" className="dropdownArrow"/>
                  </a>
                  
                  <ul
                    className="dropdown-menu rounded-0 border-0 navbarbgPink"
                    aria-labelledby="navbarDropdown"
                  >

                    <div className="navbarOptionsOuter">
                        <div className="ringsType">
                            <h6>Ring Type</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="/product-list">
                                Daily Wear
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                                Engagement
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                                  Solitaire
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                                Office Wear
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/product-list">
                                Men's Ring
                              </a>
                            </li>
                            </ul>
                            
                        </div>
                        
                        <div className="ringsType">
                            <h6>By Design</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Floral
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Hearts
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Round
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Square
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Triangle
                              </a>
                            </li>
                            </ul>
                        </div>

                        <div className="ringsType">
                            <h6>By Price Range</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Below 10k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              10k - 20k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              20k - 30k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              30k - 50k
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Above 50k
                              </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <a href="/product-list" className="navbarviewAllLink">
                        View All Rings
                    </a>
                    
                  </ul>
                  
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link navbarColor"
                    
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Earrings <img src="/img/Homepage/Arrowdropdown.png" alt="" className="dropdownArrow"/>
                  </a>
                  <ul
                    className="dropdown-menu rounded-0 border-0 navbarbgPink"
                    aria-labelledby="navbarDropdown"
                  >
                    
                    <div className="navbarOptionsOuter">
                        <div className="ringsType">
                            <h6>Earring Type</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Stud
                              </a>
                            </li> 
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Drop
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Hoops
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Jhumkas
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Ear Cuffs
                              </a>
                            </li>
                            </ul>
                           
                        </div>
                        
                        <div className="ringsType">
                            <h6>By Design</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Heart
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Oval
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Round
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Square
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Triangle
                              </a>
                            </li>
                            </ul>
                        </div>

                        <div className="ringsType">
                            <h6>By Price Range</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Below 10k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              10k - 20k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              20k - 30k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              30k - 50k
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Above 50k
                              </a>
                            </li>
                            </ul>
                        </div>
                    </div>

                    <a href="/product-list" className="navbarviewAllLink">
                        View All Earrings
                    </a>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link navbarColor"
                    
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Best Seller <img src="/img/Homepage/Arrowdropdown.png" alt="" className="dropdownArrow"/>
                  </a>
                  <ul
                    className="dropdown-menu rounded-0 border-0 navbarbgPink"
                    aria-labelledby="navbarDropdown"
                  >
                    
                    <div className="navbarOptionsOuter">
                        <div className="ringsType">
                            <h6>By Category</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Rings
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Earrings
                              </a>
                            </li> 
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Pendants
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Nose Pin
                              </a>
                            </li>

                            </ul>
                            
                        </div>
                        
                       

                        <div className="ringsType">
                            <h6>By Price Range</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Below 10k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              10k - 20k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              20k - 30k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              30k - 50k
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Above 50k
                              </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link navbarColor"
                    
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Jewellery <img src="/img/Homepage/Arrowdropdown.png" alt="" className="dropdownArrow"/>
                  </a>
                  <ul
                    className="dropdown-menu rounded-0 border-0 navbarbgPink"
                    aria-labelledby="navbarDropdown"
                  >
                     <div className="navbarOptionsOuter">
                        <div className="ringsType">
                            <h6>Category</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              All Jewellery
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Earrings
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Pendants
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Rings
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Necklaces
                              </a>
                            </li>
                            </ul>
                            
                        </div>
                        
                        <div className="ringsType">
                            <h6>By Gender</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Women
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Men
                              </a>
                            </li>
                           
                            </ul>
                        </div>

                        <div className="ringsType">
                            <h6>By Price Range</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Below 10k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              10k - 20k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              20k - 30k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/product-list">
                              30k - 50k
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/product-list">
                              Above 50k
                              </a>
                            </li>
                            </ul>
                        </div>
                    </div>

                    <a href="/product-list" className="navbarviewAllLink">
                        View All Jewellery
                    </a>
                  </ul>
                </li>
              </ul>
              <form className="d-flex navbariconsWeb">
                <input
                  className="form-control navbarSearchbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="navbarsearchBox">
                   <Search color="#412814" size={20} className="navbarSearchIcon"/>
                </div>
                <div className="navbarIcons">
                  {/* <a href="/my-account">
                      <Person color="#412814" size={25} className="mt-1" />
                  </a> */}
                  <div className="nav-item dropdown">
                      <a
                        className="nav-link navbarColor"
                        
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <Person color="#412814" size={25} className="mt-1" />
                      </a>
                      <ul
                        className="dropdown-menu rounded-0 border-0 w-"
                        aria-labelledby="navbarDropdown"
                      >
                        
                        <div className="navbarOptionsOuter">
                            <div className="ringsType">
                                <ul className="px-3">
                                <li>
                                  <a className="dropdown-item" href="/product-list">
                                      Login
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="/product-list">
                                      Sign Up
                                  </a>
                                </li> 
                                <li>
                                  <a className="dropdown-item" href="/product-list">
                                    My Account
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="/product-list">
                                    My Orders
                                  </a>
                                </li>

                                </ul>
                            </div>
                        </div>

                      </ul>

                  </div>

                  <a href="/wishlist">
                      <Heart color="#412814" size={22} className="mt-1"/>
                  </a>

                  <a href="/checkout">
                      <Cart color="#412814" size={22} className="mt-1" />
                  </a>
                </div>
                
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="navbarGoldLine">
        <img src="/img/Homepage/Goldline.png" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
