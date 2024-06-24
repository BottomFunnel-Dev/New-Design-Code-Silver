import React from 'react';
import './FaqAccordian.css';


export const FaqAccordian = () => {
  return (
        <>
            <div className='container my-5'>
                <div className='faqLinkHeading'>
                    <h5> <span className='faqSubHeading'> <a href="/">Home</a></span> | FAQ </h5>
                    <hr className='custom-hr'/>
                </div>
                
                <div className="faqHeading">
                    <img src="/img/Homepage/PetalLeft.png" alt="" />
                    <h2 className="mx-2">Frequently Asked Questions</h2>
                    <img src="/img/Homepage/PetalRight.png" alt="" />
                </div>
                 
                <div class="accordion mt-4" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            What materials do you use in your jewelry?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                        We use a variety of high-quality materials in our pieces, including:
                        Precious metals: Sterling silver, 14k and 18k gold (yellow, white, and rose)
                        Gemstones: We offer a wide selection of gemstones, from classic diamonds and sapphires to unique semi-precious stones.
                        Pearls: We source freshwater and saltwater pearls, depending on the design.
                        Hypoallergenic metals: We offer a selection of pieces made from hypoallergenic materials like titanium or surgical steel for those with sensitive skin.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Are your gemstones ethically sourced?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            Yes, ethical sourcing is a core value at Lotus Jewelry. We work with reputable suppliers who share our commitment to responsible practices. We may utilize independently certified stones to ensure ethical sourcing.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Do you offer custom jewelry?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body">
                             Yes, we offer custom jewelry design services for a special occasion or to create a one-of-a-kind piece.  Please contact us for more information on our custom design process.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                             What is your return policy?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        We offer a 30-day return policy on unworn and undamaged jewelry. You can find the complete details of our return policy on our website.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            How do I care for my Lotus jewelry?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            To keep your Lotus jewelry looking its best, we recommend following our care guide, which includes information on cleaning, storing, and protecting your pieces. You can find the care guide on our website.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                            Do you offer gift wrapping?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
                        <div class="accordion-body">
                             Yes, we offer beautiful gift wrapping for a special touch. You can select gift wrapping at checkout.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                            What are your shipping options?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        We offer a variety of shipping options to meet your needs. You can find the details of our shipping options and rates on our website.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                        Where can I find a Lotus Jewelry store?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
  );
};
