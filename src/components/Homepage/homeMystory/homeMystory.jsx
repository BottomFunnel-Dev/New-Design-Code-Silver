import React from "react";
import './homeMystory.css';

export const HomeMystory = () => {
  return (
        <div className="container-fluid my-4  storybackground">
            <div className="container row m-auto">
              <div className="col-xl-5 " style={{height:"700px"}}>
                <img src="/img/Ourstory/image1.png" alt="" style={{height:"90%",width:"100%",padding:"6%"}} />
              </div>
              <div className="col-xl-7 " style={{height:"700px"}}>
                 <div className="" style={{textAlign:"left"}}>
                    <h2 className="homeMyStoryHeading">Our Story</h2>
                    <p className="homeMyStoryPara">
                    Code Silver, The Very Name Holds Itself Two Elements- The
                    Modernity Of Today And The Authenticity Of Silver. Established In
                    2010, Code Silver Is The Unique Blend Of Contemporary Style, And
                    Handcrafted Heritage, With Detailing Or Baariki That Is Reflected In
                    Every Piece, Created By Hand.
                    </p>
                 </div>

                 <div className=" col-xl-12 row" style={{height:"450px"}}>
                    <div className="col-xl-6">
                      <img src="/img/Ourstory/img2.png" alt="" style={{height:"100%",width:"100%",padding:"4%"}}/>
                    </div>
                    <div className="col-xl-6">
                      <img src="/img/Ourstory/img3.png" alt="" style={{height:"100%",width:"100%",padding:"4%"}} />
                    </div>
                 </div>
                  
              </div>
            </div>
        </div>
  );
};
