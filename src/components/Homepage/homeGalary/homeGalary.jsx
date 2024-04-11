import React from "react";
import './homeGalary.css';

export const HomeGalary = () => {
  return (
    <>
       <div className="container-fluid">
        <div className="text-center">
          <h2>JOIN OUR COMMUNITY</h2>
          <p className="text-muted">Follow our ig handle</p>
        </div>
        <div className="col-xl-12 row p-0 m-auto">
            <div className="col-xl-4 p-0 homegalarycontainer">
                <img src="/img/galary/one.png" alt="" style={{width:"100%",height:"100%"}}/>
            </div>
            <div className="col-xl-4 p-0 homegalarycontainer">
                <img src="/img/galary/two.png" alt="" style={{width:"100%",height:"100%"}}/>
            </div>
            <div className="col-xl-4 p-0 homegalarycontainer">
                <img src="/img/galary/three.png" alt="" style={{width:"100%",height:"100%"}}/>
            </div>
        </div>
        <div className="col-xl-12 row p-0 m-auto">
            <div className="col-xl-4 p-0 homegalarycontainer">
                <img src="/img/galary/four.png" alt="" style={{width:"100%",height:"100%"}}/>
            </div>
            <div className="col-xl-4 p-0 homegalarycontainer">
                <img src="/img/galary/five.png" alt="" style={{width:"100%",height:"100%"}}/>
            </div>
            <div className="col-xl-4 p-0 homegalarycontainer">
                <img src="/img/galary/six.png" alt="" style={{width:"100%",height:"100%"}}/>
            </div>
        </div>
       </div>
    </>

  );
};