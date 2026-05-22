import React from 'react'
import Header from '../Comman/Header'
import NavTitle from '../Comman/NavTitle'
import Footer from '../Comman/Footer'

function Price() {
  return (
    <div>
        <Header/>
        <NavTitle title="Prices" name="Prices"  img="https://cdn.pixabay.com/photo/2022/07/05/16/53/graz-7303533_1280.jpg"/>
        <div>
  <section id="price" className="p_3 px-3">
    <div className="container-fluid">
      <div className="desti1 row text-center mb-4">
        <div className="col-md-12">
          <h5 className="col_green">Our Offers</h5>
          <h2 className="mt-3">Travel Safe &amp; Secure</h2>
          <p className="mt-3 mb-0">Looking for your dream vacation destination but don't know where to start? With the help of <br /> experienced and knowledgeable travel agents, you can plan the trip of a lifetime with ease.</p>
        </div>
      </div>
      <div className="price_1 row">
        <div className="col-md-4">
          <div className="price_1i p-4  bg-light rounded_10 text-center">
            <div className="grid clearfix mb-4">
              <figure className="effect-jazz mb-0">
                <a href="#"><img src="img/5.jpg" className="w-100" alt="abc" /></a>
              </figure>
            </div>
            <h5>Half Board</h5>
            <h1 className="font_60 mt-3">$ 50 <span className="fs-6">/ Day</span></h1>
            <ul className="mt-3">
              <li>Transfers from Airport</li>
              <li className="mt-2">Minimum 3 Star Hotel</li>
              <li className="mt-2">Alcoholic beverages</li>
              <li className="mt-2">Incl. Museum Tickets</li>
              <li className="mt-2">Meals in Restaurants</li>
            </ul>
            <h6 className="mb-0 mt-4"><a className="button d-block text-center" href="#">More Info</a></h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="price_1i p-4  bg_green  rounded_10 text-center">
            <div className="grid clearfix mb-4">
              <figure className="effect-jazz mb-0">
                <a href="#"><img src="img/7.jpg" className="w-100" alt="abc" /></a>
              </figure>
            </div>
            <h5 className="text-white">All Inclusive</h5>
            <h1 className="font_60 mt-3 text-white">$ 38 <span className="fs-6">/ Day</span></h1>
            <ul className="mt-3 text-light">
              <li>Transfers from Airport</li>
              <li className="mt-2">Minimum 3 Star Hotel</li>
              <li className="mt-2">Alcoholic beverages</li>
              <li className="mt-2">Incl. Museum Tickets</li>
              <li className="mt-2">Meals in Restaurants</li>
            </ul>
            <h6 className="mb-0 mt-4"><a className="button bg-white text-black d-block text-center" href="#">Request Now</a></h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="price_1i p-4 bg_dark  rounded_10 text-center">
            <div className="grid clearfix mb-4">
              <figure className="effect-jazz mb-0">
                <a href="#"><img src="img/8.jpg" className="w-100" alt="abc" /></a>
              </figure>
            </div>
            <h5 className="text-white">Excursions Included</h5>
            <h1 className="font_60 mt-3 text-white">$ 58 <span className="fs-6">/ Day</span></h1>
            <ul className="mt-3 text-light">
              <li>Transfers from Airport</li>
              <li className="mt-2">Minimum 3 Star Hotel</li>
              <li className="mt-2">Alcoholic beverages</li>
              <li className="mt-2">Incl. Museum Tickets</li>
              <li className="mt-2">Meals in Restaurants</li>
            </ul>
            <h6 className="mb-0 mt-4"><a className="button_1 d-block text-center" href="#">Read More</a></h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="price_o" className=" p_3 bg-light px-3">
    <div className="container-fluid">
      <div className="price_o1 row">
        <div className="col-md-6">
          <div className="price_o1l">
            <div id="carouselExampleCaptions3" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <div className="serv_h1li row">
                    <div className="col-md-12">
                      <img src="img/15.jpg" className="w-100" alt="abc" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="serv_h1li row">
                    <div className="col-md-12">
                      <img src="img/16.jpg" className="w-100" alt="abc" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item active">
                  <div className="serv_h1li row">
                    <div className="col-md-12">
                      <img src="img/17.jpg" className="w-100" alt="abc" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="price_o1r">
            <h6 className="d-inline-block mb-0 bg_green text-white p-1 px-3 font_14 rounded_50">SALE</h6>
            <h1 className="mt-3">Last Minute   Summer <br />    Travel Tours</h1>
            <h3 className="mt-3"><span className="text-decoration-line-through text-muted">$ 930</span> $ 430</h3>
            <p className="mt-3">Come to the agency to take advantage of our last minute summer trips. You can go on a cruise, in a wonderful tourist village or take an organized tour at an impactful price with 100% quality. Our offers are updated weekly so don't miss out on this fantastic opportunity.</p>
            <ul className="mb-4">
              <li className="d-inline-block"><i className="fa fa-map-marker me-1 col_green fs-5 align-middle" /> Europe </li>
              <li className="d-inline-block mx-4"><i className="fa fa-plane me-1 col_green fs-5 align-middle" /> Air Travel </li>
              <li className="d-inline-block"><i className="fa fa-sun-o me-1 col_green fs-5 align-middle" /> Summer Months </li>
            </ul>
            <img src="img/20.jpg" className="rounded-circle float-start me-3" alt="abc" />
            <h6 className="mb-0 fw-bold lh-base">Ipsum Augue <br /> <span className="col_green fw-normal">Experienced Travel Planner</span></h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="price_b" className=" p_3 px-3">
    <div className="container-fluid">
      <div className="price_b1 row">
        <div className="col-md-6">
          <div className="price_b1l">
            <h5 className="col_green">Enjoy Travelling</h5>
            <h1 className="mt-3 mb-3">Choose your Next <br /> Adventure</h1>
            <p>Come to the agency to take advantage of our last minute summer trips. You can go on a cruise, in a wonderful tourist village or take an organized tour at an impactful price with 100% quality. Our offers are updated weekly so don't miss out on this fantastic opportunity.</p>
            <h6 className="mb-0 mt-4"><a className="button_1" href="#">Choose Services</a></h6>
          </div>
        </div>
        <div className="col-md-6">
          <div className="price_b1r">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <span className="col_green">$ 260 &nbsp;</span> - Journey to the Edge of the World
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body">
                    Upon arrival, you’ll be greeted by your guide and transferred to your hotel. After settling in, you’ll attend an orientation meeting to go over the itinerary and meet your fellow travelers.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <span className="col_green">$ 320 &nbsp;</span> - Across Continents with a Cruise
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className="accordion-body">
                    Upon arrival, you’ll be greeted by your guide and transferred to your hotel. After settling in, you’ll attend an orientation meeting to go over the itinerary and meet your fellow travelers.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    <span className="col_green">$ 470 &nbsp;</span> - Quest for the Lost City of Gold
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                    Upon arrival, you’ll be greeted by your guide and transferred to your hotel. After settling in, you’ll attend an orientation meeting to go over the itinerary and meet your fellow travelers.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    <span className="col_green">$ 290 &nbsp;</span> - The Great North American Road Trip
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                    Upon arrival, you’ll be greeted by your guide and transferred to your hotel. After settling in, you’ll attend an orientation meeting to go over the itinerary and meet your fellow travelers.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    <span className="col_green">$ 540 &nbsp;</span> - From the Highlands to the Coast 
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                    Upon arrival, you’ll be greeted by your guide and transferred to your hotel. After settling in, you’ll attend an orientation meeting to go over the itinerary and meet your fellow travelers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<Footer/>
    </div>
  )
}

export default Price