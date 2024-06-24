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
                                 Blooming with Beauty: The Lotus Jewellery Story
                            </h6>
                            <p>
                            Just like the lotus flower, rising from mud to reveal its exquisite beauty, Lotus Jewelry blossoms with the belief that everyone deserves to radiate inner and outer brilliance. We're more than just a store; we're a collective of passionate designers and curators, meticulously crafting and collecting pieces that empower and inspire.
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
