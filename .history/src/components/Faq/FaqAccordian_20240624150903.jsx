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
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            What if the jewelry I've ordered doesn't meet my preferences?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body">
                                Every jewelry item offered by Lotus Jeweler carries the prestigious BIS hallmark and is certified by a renowned GIE laboratory in India. For any questions regarding the
                                certification Of Our products, please don't hesitate to contact us at our toll-free number 0000-000-0000 or reach out via email at
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                            Could you share the expected delivery timeframe?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                        <div class="accordion-body">
                                Every jewelry item offered by Lotus Jeweler carries the prestigious BIS hallmark and is certified by a renowned GIE laboratory in India. For any questions regarding the
                                certification Of Our products, please don't hesitate to contact us at our toll-free number 0000-000-0000 or reach out via email at
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                           What is the process for ordering from Lotus Jewelry?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                        <div class="accordion-body">
                                Every jewelry item offered by Lotus Jeweler carries the prestigious BIS hallmark and is certified by a renowned GIE laboratory in India. For any questions regarding the
                                certification Of Our products, please don't hesitate to contact us at our toll-free number 0000-000-0000 or reach out via email at
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                            What is the process for tracking my order?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
                        <div class="accordion-body">
                                Every jewelry item offered by Lotus Jeweler carries the prestigious BIS hallmark and is certified by a renowned GIE laboratory in India. For any questions regarding the
                                certification Of Our products, please don't hesitate to contact us at our toll-free number 0000-000-0000 or reach out via email at
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                             What's the process for canceling my order?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse">
                        <div class="accordion-body">
                                Every jewelry item offered by Lotus Jeweler carries the prestigious BIS hallmark and is certified by a renowned GIE laboratory in India. For any questions regarding the
                                certification Of Our products, please don't hesitate to contact us at our toll-free number 0000-000-0000 or reach out via email at
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordianBg">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                           Could you explain the terms of your return and exchange policy?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse">
                        <div class="accordion-body">
                                Every jewelry item offered by Lotus Jeweler carries the prestigious BIS hallmark and is certified by a renowned GIE laboratory in India. For any questions regarding the
                                certification Of Our products, please don't hesitate to contact us at our toll-free number 0000-000-0000 or reach out via email at
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
  );
};
