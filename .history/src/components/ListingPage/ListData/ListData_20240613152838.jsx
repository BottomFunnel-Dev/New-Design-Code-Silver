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
                                                <h3 class="modal-title mx-3 mainTextColor" id="exampleModal">Filter</h3>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            
                                            <div class="modal-body">
                                            <div class="filter-section">
      <h5>Price</h5>
      <div class="price-range">
        <input type="range" min="9252" max="258059" value="78562">
        <div>
          <span>₹ 9,252</span>
          <span style="float: right;">₹ 2,58,059</span>
        </div>
      </div>
    </div>

    <form>
      <div class="filter-section">
        <h5>Jewelry Type</h5>
        <input type="checkbox" id="gold-jewelry" name="jewelry-type" value="gold-jewelry">
        <label for="gold-jewelry">Gold Jewelry</label>
      </div>

      <div class="filter-section">
        <h5>Gender</h5>
        <input type="checkbox" id="female" name="gender" value="female">
        <label for="female">Female</label><br>
        <input type="checkbox" id="male" name="gender" value="male">
        <label for="male">Male</label>
      </div>

      <div class="filter-section">
        <h5>Purity</h5>
        <input type="checkbox" id="22-karat" name="purity" value="22-karat">
        <label for="22-karat">22 Karat</label>
      </div>

      <div class="filter-section">
        <h5>Occasion</h5>
        <input type="checkbox" id="casual-wear" name="occasion" value="casual-wear">
        <label for="casual-wear">Casual Wear</label><br>
        <input type="checkbox" id="engagement" name="occasion" value="engagement">
        <label for="engagement">Engagement</label><br>
        <input type="checkbox" id="modern-wear" name="occasion" value="modern-wear">
        <label for="modern-wear">Modern Wear</label><br>
        <input type="checkbox" id="traditional-wear" name="occasion" value="traditional-wear">
        <label for="traditional-wear">Traditional Wear</label>
      </div>

      <div class="filter-section">
        <h5>Collection</h5>
        <input type="checkbox" id="victorian-collection" name="collection" value="victorian-collection">
        <label for="victorian-collection">Victorian Collection</label><br>
        <input type="checkbox" id="floral-collection" name="collection" value="floral-collection">
        <label for="floral-collection">Floral Collection</label><br>
        <input type="checkbox" id="italian-collection" name="collection" value="italian-collection">
        <label for="italian-collection">Italian Collection</label><br>
        <input type="checkbox" id="antique-collection" name="collection" value="antique-collection">
        <label for="antique-collection">Antique Collection</label>
      </div>

      <div class="filter-section">
        <h5>Type</h5>
        <input type="checkbox" id="plain-gold" name="type" value="plain-gold">
        <label for="plain-gold">Plain Gold</label><br>
        <input type="checkbox" id="rose-gold" name="type" value="rose-gold">
        <label for="rose-gold">Rose Gold</label>
      </div>

      <div class="buttons">
        <button type="reset" class="clear-btn">CLEAR ALL</button>
        <button type="submit" class="submit-btn">VIEW RESULTS</button>
      </div>
    </form>
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
