import React from 'react'
import Footer from '../Comman/Footer'
import Header from '../Comman/Header'
import NavTitle from '../Comman/NavTitle'

function Contact() {
  return (
    <div>
        <Header />
            <NavTitle name="Contact Us" title="Contact Us"  img="https://cdn.pixabay.com/photo/2023/11/01/11/16/lake-8357182_1280.jpg" />
            <section id="contact" className="p_3 px-3">
                <div className="container-fluid">
                    <div className="row contact_1">
                        <div className="col-md-4">
                            <div className="contact_1i">
                                <h5><span className="d-inline-block bg_green fs-3 me-3 text-white text-center rounded-circle"><i className="fa fa-map-marker" /></span> Location</h5>
                                <h6 className="mt-4 mb-3 fw-bold">Travel Agency</h6>
                                <p>1429 Semper Aue, Niami Beach <br />
                                    FG 32136, United States</p>
                                <h6 className="mt-4 mb-3 fw-bold">Travel Operator</h6>
                                <p className="mb-0">3003 Lorem Bmxd, Amet<br />
                                    Fc 32139, United States</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact_1i">
                                <h5><span className="d-inline-block bg_green fs-3 me-3 text-white text-center rounded-circle"><i className="fa fa-phone" /></span> Give us a call</h5>
                                <h6 className="mt-4 mb-3 fw-bold">Mobile Number</h6>
                                <p>Amet Lorem "Tour Consultant" : +(123) 456-7890 <br />
                                    Dolor Sed "Local Guide" : +(123) 456-7890</p>
                                <h6 className="mt-4 mb-3 fw-bold">Office Number</h6>
                                <p className="mb-0">Administration : +(123) 456-7890<br />
                                    Technical Office +(123) 456-7890</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact_1i">
                                <h5><span className="d-inline-block bg_green fs-3 me-3 text-white text-center rounded-circle"><i className="fa fa-envelope" /></span> Write for anything</h5>
                                <h6 className="mt-4 mb-3 fw-bold">Quotes</h6>
                                <p>Write to this email for a detailed quotation <br /> info@gmail.com and information.</p>
                                <h6 className="mt-4 mb-3 fw-bold">Consulting</h6>
                                <p className="mb-0">Our free consultation service can be requested here <br /> info@gmail.com every day.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row contact_2 mt-5">
                        <div className="col-md-6">
                            <div className="contact_2l">
                                <h5 className="col_green">Plan your Next Trip</h5>
                                <h1 className="mt-3">Get in Touch</h1>
                                <p className="mt-3">Write to us for personalized travel advice or for information on group travel and last minute travel, all travel is insured and safe.</p>
                                <div className="blog_dt1ib3i row">
                                    <div className="col-md-6">
                                        <div className="blog_dt1ib3il">
                                            <input placeholder="Name" className="form-control border-0 bg-light" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="blog_dt1ib3il">
                                            <input placeholder="Email" className="form-control border-0 bg-light" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_dt1ib3i row mt-4">
                                    <div className="col-md-6">
                                        <div className="blog_dt1ib3il">
                                            <input placeholder="Website" className="form-control border-0 bg-light" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="blog_dt1ib3il">
                                            <input placeholder="Subject" className="form-control border-0 bg-light" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_dt1ib3i row mt-4">
                                    <div className="col-md-12">
                                        <div className="blog_dt1ib3il">
                                            <textarea placeholder="Enter your comment here..." className="form-control form_text border-0 bg-light" defaultValue={""} />
                                            <h6 className="mb-0 mt-4"><a className="button d-block text-center" href="#">Submit <i className="fa fa-long-arrow-right ms-1" /></a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact_2r">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920266738!3d25.782390733064336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C+FL%2C+USA!5e0!3m2!1sen!2sin!4v1530774403788" height={530} style={{ border: 0, width: '100%' }} allowFullScreen />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
    </div>
  )
}

export default Contact