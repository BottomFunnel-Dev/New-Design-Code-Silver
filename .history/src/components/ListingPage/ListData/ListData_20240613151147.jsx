import React from "react";
import './ListData.css';

export const ListData = () => {
  return (
        
        <div className="container my-5">
            <div className='descPageHeading px-4'>
                <div>
                   <h5> <span className='descPageSubHeading'> Home |</span> View All Jewellery (1258 Designs)</h5>
                </div>
                <div className="filterSortDiv">
                    <div className="listFilterButton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="/img/listingPage/sort.png" alt="" />
                        <p className="m-0">Filter</p>
                    </div>

                    <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModal" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h3 class="modal-title mx-4 listDataitemscolor" id="exampleModal">Filter</h3>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            
                                            <div class="modal-body">
                                                <div class="bg-white">
                                                    <div class="mb-4">
                                                        
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                    <div className="listFilterButton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="/img/listingPage/filter.png" alt="" />
                        <p className="m-0">Sort By</p>
                    </div>
                </div>
            </div>

            <hr className='custom-hr'/>

            <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/RingTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Ring</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/BangleTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Bangles</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/EarringTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Earrings</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/Earring2TS.png" className="card-img-top rounded-0 sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Earrings</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/RingTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Ring</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/BangleTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Bangles</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/EarringTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Earrings</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/Earring2TS.png" className="card-img-top rounded-0 sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Earrings</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/RingTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Ring</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/BangleTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Bangles</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="listDataCTAContainer p-0">
                    <div className="listDataCTAContent">
                    <div className="listDataCTAHeading">
                        <h2>Eternal shine, eternal warmth</h2>
                        <p className="m-0">Find your ideal engagement ring here</p>
                        <button className="listDataCTAButton">SHOP NOW</button>
                    </div>
                    </div>
                    <img
                    src="/img/listingPage/Banner2.png"
                    alt="listDataCTAImage"
                    className="listDataCTAImage"
                    />
                </div>
            </div>
            <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/RingTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Ring</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/BangleTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Bangles</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/EarringTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Earrings</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/Earring2TS.png" className="card-img-top rounded-0 sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Earrings</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/RingTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Ring</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/BangleTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Bangles</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/EarringTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Earrings</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 listDatasCards">
                        <img src="/img/Homepage/Earring2TS.png" className="card-img-top rounded-0 sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconlistData"/>
                        <div className="card-footer listDataCardContent">
                            <h5 className="text-dark">The Merrie Gold Earrings</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="listDataitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};
