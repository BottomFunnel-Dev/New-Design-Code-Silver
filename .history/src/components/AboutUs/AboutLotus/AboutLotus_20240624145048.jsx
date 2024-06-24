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
                    <h2 className="mx-2">About Lotus Jewellers</h2>
                    <img src="/img/Homepage/PetalRight.png" alt="" />
                </div>
                <div className='container my-4'>
                    <div className='row'>
                        <div className='col-lg-6 aboutLotusContent mt-5'>
                            <h6>
                            Blooming with Beauty: The Lotus Jewelry Story
                            </h6>
                            <p>
                                We transcend the ordinary online jewellery shop experience by offering more than
                                just pieces; we offer stories and emotions crafted into every handcrafted creation.
                                <br />
                                At Lotus jewellery, we don't follow the standard or mainstream; we celebrate
                                individuality and uniqueness. Our curated collection showcases handcrafted pieces
                                that are not just accessories but expressions of passion and creativity.
                                <br />
                                Rooted in a deep love for jewellery, Lotus jewellery is your premier marketplace for
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
                                Our Values: The Foundation of Lotus Jewelry
                            </h6>
                            <p>
                            At Lotus Jewelry, we believe in creating pieces that stand the test of time. Our timeless designs transcend fleeting trends and become cherished companions for years to come. We source high-quality materials and use meticulous craftsmanship to ensure every piece is a treasure you can be proud of.
                            <br />
Furthermore, we are committed to responsible practices.  We ensure our materials are ethically sourced, respecting both the environment and human rights. This dedication to quality and ethics allows our customers to feel confident and good about the jewelry they wear.

                            </p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
        </>
  );
};
