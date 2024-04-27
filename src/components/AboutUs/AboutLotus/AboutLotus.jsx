import React from 'react';
import './AboutLotus.css';


export const AboutLotus = () => {
  return (
        <>
            <div className='container my-5'>
                <div className='aboutUsHeading'>
                    <h5> <span className='aboutUsSubHeading'> <a href="/">Home</a></span> | About Us </h5>
                    <hr className='custom-hr'/>
                </div>
                <div className="aboutLotusHeading">
                    <img src="/img/Homepage/PetalLeft.png" alt="" />
                    <h2 className="mx-2">About Lotus Jewelers</h2>
                    <img src="/img/Homepage/PetalRight.png" alt="" />
                </div>
                <div className='container my-4'>
                    <div className='row'>
                        <div className='col-lg-6 aboutLotusContent mt-5'>
                            <h6>
                                Discover a haven for exquisite designer jewelry at Lotus Jewelers
                            </h6>
                            <p>
                                We transcend the ordinary online jewelry shop experience by offering more than
                                just pieces; we offer stories and emotions crafted into every handcrafted creation.
                                <br />
                                At Lotus Jewelry, we don't follow the standard or mainstream; we celebrate
                                individuality and uniqueness. Our curated collection showcases handcrafted pieces
                                that are not just accessories but expressions of passion and creativity.
                                <br />
                                Rooted in a deep love for jewelry, Lotus Jewelry is your premier marketplace for
                                exploring and acquiring one-of-a-kind designer pieces that resonate with your
                                unique style and personality.
                                <br /> 
                                Welcome to a world where every piece is a work of art
                                and a story waiting to be told.
                            </p>
                        </div>
                        <div className='col-lg-6 aboutLotusImage'>
                            <img src="/img/AboutUS/Image1.png" alt="" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 aboutLotusImage'>
                            <img src="/img/AboutUS/Image2.png" alt="" />
                        </div>
                        <div className='col-lg-6 aboutLotusContent mt-5'>
                            <h6>
                                Meet Our Founder - Charlotte
                            </h6>
                            <p>
                                Introducing Charlotte, the visionary behind Lotus Jewelry. She embodies the spirit of
                                entrepreneurship, womanhood, and a profound love for jewelry that sets her apart.
                                <br />
                                Charlotte's extensive knowledge of the industry and meticulous focus on quality and
                                materials form the cornerstone of Lotus Jewelry.
                                <br />
                                Each piece in our collection is personally curated by Charlotte, reflecting her
                                dedication to honesty and authenticity.
                                <br />
                                 We aim to empower jewelry designers by providing them with a platform and a global audience, while offering you a refreshing
                                an seamless shopping experience for pieces that are truly distinct.
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
        </>
  );
};
