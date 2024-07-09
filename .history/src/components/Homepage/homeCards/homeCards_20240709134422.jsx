import React from "react";
import './homeCards.css';

export const HomeCards = () => {
  return (
        <div className="my-4">
            <div className="homeCardsHeading">
                <img src="/img/Homepage/PetalLeft.png" alt="" />
                <h2 className="mx-2">Shop By Category</h2>
                <img src="/img/Homepage/PetalRight.png" alt="" />
            </div>
            <div className="container m-auto row row-cols-1 row-cols-md-4 g-4">
                <div className="col">

                <a href="/product-list" className="text-dark text-decoration-none">
                    <div className="card h-100 rounded-0 cardscontainer">
                        <img src="/img/Homepage/Ring.png" className="rounded-0 card-img-top" alt="..."/>
                        
                        <div className="card-footer">
                            <h6 className="text-dark">Rings</h6>
                        </div>
                    </div>
                </a>
                </div>
                <div className="col">
                <a href="/product-list" className="text-dark text-decoration-none">
                    <div className="card h-100 rounded-0 cardscontainer">
                        <img src="/img/Homepage/Pendant.png" className="rounded-0 card-img-top" alt="..."/>
                        
                        <div className="card-footer">
                            <h6 className="text-dark">Pendants</h6>
                        </div>
                    </div>
                </a>
                </div>
                <div className="col">
                <a href="/product-list" className="text-dark text-decoration-none">
                    <div className="card h-100 rounded-0 cardscontainer">
                        <img src="/img/Homepage/Bangels.png" className="rounded-0 card-img-top" alt="..."/>
                        
                        <div className="card-footer">
                            <h6 className="text-dark"><a href="/product-list" className="text-dark text-decoration-none">Bangles</a></h6>
                        </div>
                    </div>
                </a>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 cardscontainer">
                        <img src="/img/Homepage/Earrings.png" className="card-img-top rounded-0" alt="..."/>
                        
                        <div className="card-footer">
                            <h6 className="text-dark"><a href="/product-list" className="text-dark text-decoration-none">Earrings</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};
