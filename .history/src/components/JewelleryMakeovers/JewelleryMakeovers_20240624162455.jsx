import React from 'react';
import './JewelleryMakeovers.css';


export const JewelleryMakeover = () => {
  return (
        <>
            <div className='container'>

                <div className="jewelleryMakeoversHeading">
                    <img src="/img/Homepage/PetalLeft.png" alt="" />
                    <h2 className="mx-2">Jewellery Makeovers</h2>
                    <img src="/img/Homepage/PetalRight.png" alt="" />
                </div>

                <div className='container'>
                    <p className='jewelleryMakeoversPolicyContent'>
                        <strong>Perfect Jewelry Style with a Makeover!</strong> <br />
                        Do you ever wonder why a stunning piece of jewelry looks amazing on someone else but feels off on you? The secret lies in finding jewelry that complements your unique beauty! Our Jewelry Makeover Service is designed to help you do just that.
                    </p>

                    <p className='jewelleryMakeoversPolicyContent'>
                    <strong>Your Personal Jewelry Guide</strong> <br />

                    Our dedicated consultant will guide you through the latest trends and a variety of jewelry options. We'll consider you:

                    </p>

                    <p className='jewelleryMakeoversPolicyHeadings'>
                    Face Shape:
                    </p>

                    <p className='jewelleryMakeoversPolicyContent'> 
                    Different earring styles and necklace lengths flatter various face shapes. We'll help you identify your face shape and recommend pieces that enhance your features. (See our guide below!)

                    </p>

                    <p className='jewelleryMakeoversPolicyHeadings'>
                    Skin Tone:
                    </p>

                    <p className='jewelleryMakeoversPolicyContent'> 
                    Certain gemstones can beautifully complement your skin tone, making your jewelry truly shine.
                    </p>
                      
                    <p className='jewelleryMakeoversPolicyHeadings'>
                    Personality:
                    </p>
                    
                    <p className='jewelleryMakeoversPolicyContent'> 
                    Your jewelry should reflect your inner you! Whether you're bold and statement-making or prefer subtle elegance, we'll find pieces that match your vibe.

                    </p>

                    <p className='jewelleryMakeoversPolicyContent'> </p>
                    
                </div>

            </div>
        </>
  );
};
