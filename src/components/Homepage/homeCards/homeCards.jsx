import React from "react";

export const HomeCards = () => {
  return (
        <div className="my-4">
            <h2>Categories</h2>
            <div className="container m-auto row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100">
                    <img src="/img/Categories/Category1.png" className="card-img-top" alt="..."/>
                    
                    <div className="card-footer">
                        <h6 className="text-dark">Bar Accessories</h6>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src="/img/Categories/Category2.png" className="card-img-top" alt="..."/>
                    
                    <div className="card-footer">
                        <h6 className="text-dark">Silver Home Decor</h6>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src="/img/Categories/Category3.png" className="card-img-top" alt="..."/>
                    
                    <div className="card-footer">
                        <h6 className="text-dark">Religious Range</h6>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src="/img/Categories/Category4.png" className="card-img-top" alt="..."/>
                    
                    <div className="card-footer">
                        <h6 className="text-dark">Bar Accessories</h6>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  );
};
