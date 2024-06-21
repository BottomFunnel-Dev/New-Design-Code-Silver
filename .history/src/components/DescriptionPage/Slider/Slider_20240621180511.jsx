import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
    // Array of image URLs (add your image paths here)
    const images = [
        '/img/DescriptionPage/sliderone.png',
        '/img/DescriptionPage/slidertwo.png',
        '/img/DescriptionPage/sliderthree.png',
    ];
    const ringSizes = ['Select Size','5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9']; // Example ring sizes


    // State to keep track of the current main image
    const [mainImage, setMainImage] = useState(images[0]);

    // Event handler for thumbnail click
    const handleThumbnailClick = (src) => {
        setMainImage(src);
    };

    return (
        <>
            <div className="container-fluid p-0">
                    

                    <div className="container productMainContainer">
                        
                        <div className='descPageHeading'>
                           <h5> <span className='descPageSubHeading'> Home | All Jewellery</span> | The Merrie Gold Ring </h5>
                           <hr className='custom-hr'/>
                        </div>
                       
                       <div className='detailsContainer'>

                            <div className="col-lg-7 image-slider">
                                {/* Thumbnail container on the left */}
                                <div className="thumbnail-container">
                                    {images.map((src, index) => (
                                        <img
                                            key={index}
                                            src={src}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="thumbnail"
                                            onClick={() => handleThumbnailClick(src)}
                                        />
                                    ))}
                                </div>
                                {/* Display area on the right */}
                                <div className="display-area">
                                    <img
                                        id="main-image"
                                        src={mainImage}
                                        alt="Main Image"
                                    />
                                </div>
                            </div>

                            <div className='col-lg-5'>
                                <div className='dataHeading'>
                                    <h3>The Merrie Gold Ring</h3>
                                    
                                    <div className='productRating'>
                                        <img src="/img/DescriptionPage/StarFill.png" alt="" />
                                        <img src="/img/DescriptionPage/StarFill.png" alt="" />
                                        <img src="/img/DescriptionPage/StarFill.png" alt="" />
                                        <img src="/img/DescriptionPage/StarFill.png" alt="" />
                                        <img src="/img/DescriptionPage/StarHalf.png" alt="" />
                                    </div>
                                </div>
                                <div className='productDetails'>
                                    <p className=''>
                                       Product Code: 4857FGTVHH-855122000
                                    </p>
                                    <h3 className='m-0'>
                                        ₹ 10,912
                                    </h3>
                                    <p className='m-0'>
                                       MRP Incl. of all taxes
                                    </p>
                                </div>
                                <div className='ringSizeContainer'>
                                    <select id="ringSize" name="ringSize" className='ringSizeOptions col-lg-5 py-2'>
                                        {ringSizes.map((size, index) => (
                                        <option key={index} value={size}>
                                            {size}
                                        </option>
                                        ))}
                                    </select>
                                    <p className='productWeight'>
                                       Gross Weight
                                    </p>
                                </div>
                                <div className='buttonsCartBuy'>
                                    <button className='col-lg-5 cartButton'>
                                        ADD TO CART
                                    </button>
                                    <button className='col-lg-5 buyButton'>
                                       BUY NOW
                                    </button>
                                </div>
                                <div className='availabilityButton'>
                                    <div>
                                    <input type="text" placeholder='Enter pin code'/>
                                    <button>CHECK</button>
                                    <div className='px-2 '>
                                    <p className='m-0 expectedText'>
                                       Expected Shipping Date
                                    </p>
                                    <p className='expectedDate'>
                                       dd mm yyyy
                                    </p>
                                    </div>
                                    
                                </div>
                                
                            </div>    

                       </div>
                                   

                    </div>
            </div>
        </>
    );
};

export default Slider;

   