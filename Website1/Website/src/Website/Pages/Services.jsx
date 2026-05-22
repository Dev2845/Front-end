import React from 'react'
import useApi from '../../Custome/useApi'
import Header from '../Comman/Header'
import NavTitle from '../Comman/NavTitle'
import Footer from '../Comman/Footer'

function Services() {
    const { api } = useApi("http://localhost:3000/service")
    return (
        <div>
            <Header />
            <NavTitle name="Services" title="Services" img="https://cdn.pixabay.com/photo/2021/12/29/18/59/st-petersburg-6902540_1280.jpg" />
            <div>
                <section id="serv_pg" className="p_3 px-3">
                    <div className="container-fluid">
                        <div className="row about_h1">
                            <div className="col-md-6">
                                <div className="about_h1l bg-light p-4">
                                    <div className="grid clearfix">
                                        <figure className="effect-jazz mb-0">
                                            <a href="#"><img src="img/22.jpg" className="w-100" alt="abc" /></a>
                                        </figure>
                                    </div>
                                    <p className="fs-5 mt-4">Experiencd &amp; Well knowledgeable Interior designers.</p>
                                    <h5>Augue Semper, <span className="col_green fs-6">CEO &amp; Founder</span></h5>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about_h1r">
                                    <h5 className="col_green">OUR SERVICES</h5>
                                    <h1 className="mt-3">A SMALL EFFICIENT
                                        INTERIOR <span className="fw-normal">DESIGNING TEAM</span></h1>
                                    <p className="mt-3">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.</p>
                                    <p>Indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee.</p>
                                    <p className="mb-4">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.</p>
                                    <div id="carouselExampleCaptions1" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to={0} className aria-label="Slide 1" />
                                            <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to={1} aria-label="Slide 2" className="active" aria-current="true" />
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item">
                                                <div className="about_h1ri row bg_green mx-0 p-4 px-3">
                                                    <div className="col-md-2">
                                                        <div className="about_h1ril">
                                                            <span className="text-white"><i className="fa fa-bullseye" /></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="about_h1rir">
                                                            <h4 className="text-white">Mission Statement</h4>
                                                            <p className="mb-0 text-light">Indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item active">
                                                <div className="about_h1ri row bg_green mx-0 p-4 px-3">
                                                    <div className="col-md-2">
                                                        <div className="about_h1ril">
                                                            <span className="text-white"><i className="fa fa-bullseye" /></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="about_h1rir">
                                                            <h4 className="text-white">Mission Statement</h4>
                                                            <p className="mb-0 text-light">Indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about_pg" className="p_3 px-3 bg-light">
                    <div className="container-fluid">
                        <div className="desti1 row mb-4 text-center">
                            <div className="col-md-12">
                                <h5 className="col_green">Let us help you plan your next adventure</h5>
                                <h1 className="mb-0 mt-3">Perfect Vacation come True</h1>
                            </div>
                        </div>


                        <div className="about_pg2 row mt-4 text-center">
                            {
                                api && api.map((data, index) => {
                                    return (
                                        <div className="col-md-4 my-3">
                                            <div className="about_pg2i">
                                                <span className="font_60 col_green"><i className={data.icons} /></span>
                                                <h5 className="mt-3">{data.name}</h5>
                                                <p className="mb-0 mt-3">{data.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                </section>
                <section id="serv_pgo" className="p_3 px-3">
                    <div className="container-fluid">
                        <div className="row serv_pgo1">
                            <div className="col-md-6">
                                <div className="serv_pgo1l">
                                    <div className="serv_pgo1li row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="serv_pgo1lil text-center p-5 px-4 border_1">
                                                <h1>440</h1>
                                                <p className="mb-0">Affiliated hotels with all-inclusive service</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="serv_pgo1lil text-center p-5 px-4 border_1">
                                                <h1>365</h1>
                                                <p className="mb-0">Days in which you can travel the world</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="serv_pgo1li row mt-4">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="serv_pgo1lil text-center p-5 px-4 border_1">
                                                <h1>188</h1>
                                                <p className="mb-0">Attractions with specialized and competent local guide</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="serv_pgo1lil text-center p-5 px-4 border_1">
                                                <h1>245</h1>
                                                <p className="mb-0">Information and assistance points in the countries</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="serv_pgo1r">
                                    <h5 className="col_green">Always by your side</h5>
                                    <h1 className="mt-3">Our Numbers in the <br /> World</h1>
                                    <p className="mt-3">Our team of experienced travel experts can provide you with personalized recommendations and advice to create a trip that suits your preferences and budget. Various destinations around the world. With our knowledge and expertise in the travel industry, we ensure that all aspects of your trip.</p>
                                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,sed diam nonumy</p>
                                    <h6 className="mb-0 mt-4"><a className="button text-uppercase" href="#">Read More</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="disc" className="p_3 px-3 bg-light">
                    <div className="container-fluid">
                        <div className="disc_1 row">
                            <div className="col-md-6">
                                <div className="disc_1l">
                                    <h5 className="col_green">Wandering Souls</h5>
                                    <h1 className="mt-3">Discover Your Next   <br /> Adventure</h1>
                                    <p className="mt-3 mb-4">Whether you're planning a romantic honeymoon or a family vacation, our price section has got you covered. So, start browsing today and find the perfect vacation package at a price that won't leave you feeling guilty.</p>
                                    <h6>Organized Group Tour</h6>
                                    <div className="progress-bar mt-3">
                                        <div className="progress" style={{ width: '90%' }}>
                                        </div>
                                    </div>
                                    <h6 className="mt-4">Single Customized Trip</h6>
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
                <section id="plan" className="p_3 px-3">
                    <div className="container-fluid">
                        <div className="row plan_1">
                            <div className="col-md-6">
                                <div className="plan_1l">
                                    <div className="grid clearfix">
                                        <figure className="effect-jazz mb-0">
                                            <a href="#"><img src="img/15.jpg" className="w-100" alt="abc" /></a>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="plan_1r text-center">
                                    <h4>Plan your Next Trip</h4>
                                    <p className="mt-3">Write to us for personalized travel advice or for information on group travel and last minute travel, all travel is insured and safe.</p>
                                    <input className="form-control mt-3 font_14" placeholder="Type your name" type="text" />
                                    <input className="form-control mt-3 font_14" placeholder="Insert your email" type="text" />
                                    <textarea placeholder="Your Message" className="form-control font_14 mt-3 form_text" defaultValue={""} />
                                    <h6 className="mb-0 mt-4"><a className="button text-uppercase text-center d-block" href="#">Submit</a></h6>
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

export default Services