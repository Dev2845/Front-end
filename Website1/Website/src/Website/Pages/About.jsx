import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import NavTitle from '../Comman/NavTitle'

function About() {
    return (
        <div>
            <Header />
            <NavTitle title="About Us" name="About Us" img/>
            <div>
               <section id="disc" className="p_3 px-3 bg-light">
                    <div className="container-fluid">
                        <div className="disc_1 row">
                            <div className="col-md-6">
                                <div className="disc_1l">
                                    <h5 className="col_green">Explore the world with us, one adventure at a time.</h5>
                                    <h1 className="mt-3">The perfect   vacation   come true with our Travel Agency</h1>
                                    <p className="mt-3 mb-4">Whether you're planning a romantic honeymoon or a family vacation, our price section has got you covered. So, start browsing today and find the perfect vacation package at a price that won't leave you feeling guilty.</p>
                                    <h6>Organized Group Tour</h6>
                                    <div className="progress-bar mt-3">
                                        <div className="progress" style={{ width: '90%' }}>
                                        </div>
                                    </div>
                                    <h6 className="mt-4">Local travel guides</h6>
                                    <div className="progress-bar mt-3">
                                        <div className="progress" style={{ width: '80%' }}>
                                        </div>
                                    </div>
                                    <h6 className="mb-0 mt-4"><a className="button" href="#">MORE INFO</a></h6>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="disc_1r">
                                    <img src="img/17.jpg" className="w-100" alt="abc" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about_pg" className="p_3 px-3">
                    <div className="container-fluid">
                        <div className="about_pg1 row">
                            <div className="col-md-6">
                                <div className="about_pg1l">
                                    <h5 className="col_green">Let us help you plan your next adventure</h5>
                                    <h1 className="mt-3 mb-0">Perfect   Vacation <br />  come True</h1>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about_pg1r">
                                    <p className="mb-0 mt-4">Various destinations around the world. With our knowledge and expertise in the travel industry, we ensure that all aspects of your trip are tailored to your preferences and budget and make it an experience of a lifetime.</p>
                                </div>
                            </div>
                        </div>
                        <div className="about_pg2 row mt-4">
                            <div className="col-md-4">
                                <div className="about_pg2i">
                                    <span className="font_60 col_green"><i className="fa fa-bus" /></span>
                                    <h5 className="mt-3">Airline Tickets</h5>
                                    <p className="mb-0 mt-3">Our travel agency specializes in providing our customers with the best deals on airline tickets.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about_pg2i">
                                    <span className="font_60 col_green"><i className="fa fa-contao" /></span>
                                    <h5 className="mt-3">Ocean Cruises</h5>
                                    <p className="mb-0 mt-3">Our travel agency specializes in providing our customers with the best deals on airline tickets.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about_pg2i">
                                    <span className="font_60 col_green"><i className="fa fa-car" /></span>
                                    <h5 className="mt-3">Means of Transport</h5>
                                    <p className="mb-0 mt-3">Our travel agency specializes in providing our customers with the best deals on airline tickets.</p>
                                </div>
                            </div>
                        </div>
                        <div className="about_pg2 row mt-4">
                            <div className="col-md-4">
                                <div className="about_pg2i">
                                    <span className="font_60 col_green"><i className="fa fa-tripadvisor" /></span>
                                    <h5 className="mt-3">Travel itineraries</h5>
                                    <p className="mb-0 mt-3">Our travel agency specializes in providing our customers with the best deals on airline tickets.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about_pg2i">
                                    <span className="font_60 col_green"><i className="fa fa-life-ring" /></span>
                                    <h5 className="mt-3">Travel Insurance</h5>
                                    <p className="mb-0 mt-3">Our travel agency specializes in providing our customers with the best deals on airline tickets.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about_pg2i">
                                    <span className="font_60 col_green"><i className="fa fa-user-secret" /></span>
                                    <h5 className="mt-3">Local Guide</h5>
                                    <p className="mb-0 mt-3">Our travel agency specializes in providing our customers with the best deals on airline tickets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="serv_h">
                    <div className="serv_hm bg_back1 pt-5 pb-5 px-3">
                        <div className="container-fluid">
                            <div className="serv_h1 row">
                                <div className="col-md-6">
                                    <div className="serv_h1l">
                                        <div id="carouselExampleCaptions3" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
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
                                                <div className="carousel-item">
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
                                    <div className="serv_h1r">
                                        <h5 className="col_green">Adventure Travel</h5>
                                        <h1 className="text-white mt-4">Embrace the Thrill of <br /> the Unknown</h1>
                                        <p className="text-light mt-4">Are you tired of the typical tourist destinations and looking to step out of your comfort zone? Adventure travel may be the perfect solution for you! Here are four reasons why you should book an adventure travel experience :</p>
                                        <ul className="text-light mt-4">
                                            <li><i className="fa fa-check me-2 col_green" /> Connect with nature</li><hr />
                                            <li><i className="fa fa-check me-2 col_green" /> Experience other cultures</li><hr />
                                            <li><i className="fa fa-check me-2 col_green" /> Create unforgettable memories</li>
                                        </ul>
                                        <h6 className="mb-0 mt-4"><a className="button_1" href="#">All Services</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testim" className="p_3 px-3 carousel_p">
                    <div className="container-fluid">
                        <div className="desti1 row mb-4 text-center">
                            <div className="col-md-12">
                                <h5 className="col_green">Happy Travelers Share Their Experiences</h5>
                                <h1 className="mb-0 mt-3">Stories from   Satisfied   Customers</h1>
                            </div>
                        </div>
                        <div className="testim_1 row">
                            <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to={0} className="active" aria-label="Slide 1" aria-current="true" />
                                    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to={1} aria-label="Slide 2" className />
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="testim_1i row">
                                            <div className="col-md-6">
                                                <div className="testim_1i1 p-4  bg_dark">
                                                    <p className="fs-5 text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
                                                    <img src="img/18.jpg" className="rounded-circle float-start me-3" alt="abc" />
                                                    <h6 className="mb-4 fw-bold lh-base text-white">Eget Amet <br /> <span className="col_green fw-normal">CEO of Education</span></h6>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="testim_1i1 p-4  bg_dark">
                                                    <p className="fs-5 text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
                                                    <img src="img/19.jpg" className="rounded-circle float-start me-3" alt="abc" />
                                                    <h6 className="mb-4 fw-bold lh-base text-white">Lorem Sit <br /> <span className="col_green fw-normal">CEO of Education</span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testim_1i row">
                                            <div className="col-md-6">
                                                <div className="testim_1i1 p-4  bg_dark">
                                                    <p className="fs-5 text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
                                                    <img src="img/20.jpg" className="rounded-circle float-start me-3" alt="abc" />
                                                    <h6 className="mb-4 fw-bold lh-base text-white">Ipsum Augue <br /> <span className="col_green fw-normal">CEO of Education</span></h6>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="testim_1i1 p-4  bg_dark">
                                                    <p className="fs-5 text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
                                                    <img src="img/21.jpg" className="rounded-circle float-start me-3" alt="abc" />
                                                    <h6 className="mb-4 fw-bold lh-base text-white">Porta Nulla <br /> <span className="col_green fw-normal">CEO of Education</span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="appoint" className="bg_dark pt-5 pb-5 px-3">
                    <div className="container-fluid">
                        <div className="row appoint_1">
                            <div className="col-md-9">
                                <div className="appoint_1l pt-2">
                                    <p className="fs-4 fw-bold text-white mb-0">Wanna Work With Our Profesional Team? Make an Appointment.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="appoint_1r text-end pt-1">
                                    <h6 className="mb-0"><a className="button_1" href="#">Make An Appointment <i className="fa fa-long-arrow-right ms-1" /></a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                 </div>
            <Footer />
        </div>
    )
}

export default About