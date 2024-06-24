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
                    href="#"
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
                              <a className="dropdown-item" href="/pr">
                                Daily Wear
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Engagement
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                  Solitaire
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Office Wear
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                                Men's Ring
                              </a>
                            </li>
                            </ul>
                            
                        </div>
                        
                        <div className="ringsType">
                            <h6>By Design</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="#">
                              Floral
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Hearts
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Round
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Square
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                              Triangle
                              </a>
                            </li>
                            </ul>
                        </div>

                        <div className="ringsType">
                            <h6>By Price Range</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="#">
                              Below 10k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              10k - 20k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              20k - 30k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              30k - 50k
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                              Above 50k
                              </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <a href="" className="navbarviewAllLink">
                        View All Rings
                    </a>
                    
                  </ul>
                  
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link navbarColor"
                    href="#"
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
                              <a className="dropdown-item" href="#">
                              Stud
                              </a>
                            </li> 
                            <li>
                              <a className="dropdown-item" href="#">
                              Drop
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Hoops
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Jhumkas
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                              Ear Cuffs
                              </a>
                            </li>
                            </ul>
                           
                        </div>
                        
                        <div className="ringsType">
                            <h6>By Design</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="#">
                              Heart
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Oval
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Round
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Square
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                              Triangle
                              </a>
                            </li>
                            </ul>
                        </div>

                        <div className="ringsType">
                            <h6>By Price Range</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="#">
                              Below 10k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              10k - 20k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              20k - 30k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              30k - 50k
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                              Above 50k
                              </a>
                            </li>
                            </ul>
                        </div>
                    </div>

                    <a href="" className="navbarviewAllLink">
                        View All Earrings
                    </a>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link navbarColor"
                    href="#"
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
                              <a className="dropdown-item" href="#">
                              Rings
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Earrings
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Pendants
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Nose Pin
                              </a>
                            </li>

                            </ul>
                            
                        </div>
                        
                       

                        <div className="ringsType">
                            <h6>By Price Range</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="#">
                              Below 10k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              10k - 20k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              20k - 30k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              30k - 50k
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
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
                    href="#"
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
                              <a className="dropdown-item" href="#">
                              All Jewellery
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Earrings
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Pendants
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Rings
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                              Necklaces
                              </a>
                            </li>
                            </ul>
                            
                        </div>
                        
                        <div className="ringsType">
                            <h6>By Gender</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="#">
                              Women
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              Men
                              </a>
                            </li>
                           
                            </ul>
                        </div>

                        <div className="ringsType">
                            <h6>By Price Range</h6>
                            <ul className="px-3">
                            <li>
                              <a className="dropdown-item" href="#">
                              Below 10k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              10k - 20k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              20k - 30k
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              30k - 50k
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                              Above 50k
                              </a>
                            </li>
                            </ul>
                        </div>
                    </div>

                    <a href="" className="navbarviewAllLink">
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
                  <Person color="#412814" size={25} className="mt-1" />
                  <Heart color="#412814" size={22} className="mt-1"/>
                  <Cart color="#412814" size={22} className="mt-1" />
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
