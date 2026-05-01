import React from 'react'

function Footer() {
  return (
       <div>
            <section id="footer">
            <div className="serv_hm bg_backo pt-5 pb-5 px-3">
                <div className="container-fluid">
                    <div className="footer_1 row">
                        <div className="col-md-4">
                            <div className="footer_1i">
                                <h1 className="text-white mb-0">Travel beyond your imagination, with our Travel Agency!</h1>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer_1i">
                                <h4 className="text-white mt-2 mb-3">Address</h4>
                                <h6 className="text-light lh-base">1270 Semper Auf<br />
                                    Lorem - Porta<br />
                                    U.S. of America</h6>
                                <ul className="mb-0 fs-5">
                                    <li className="d-inline-block"><a className="text-white" href="#"><i className="fa fa-facebook" /></a></li>
                                    <li className="d-inline-block mx-2"><a className="text-white" href="#"><i className="fa fa-twitter" /></a></li>
                                    <li className="d-inline-block"><a className="text-white" href="#"><i className="fa fa-youtube-play" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer_1i">
                                <h4 className="text-white mt-2 mb-3">Contact</h4>
                                <h6 className="mb-4"><a className="button_1" href="#">info@gmail.com</a></h6>
                                <h4 className="mb-0 text-white">+(000) 345 67 89</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer_1i">
                                <h4 className="text-white mt-2 mb-3">Our NewsLetter</h4>
                                <p className="text-light">Enter your e-mail and subscribe to our newsletter.</p>
                                <input className="form-control border-0 bg_dark text-light" placeholder="Enter Your Email" type="text" />
                                <h6 className="mb-0 mt-3"><a className="button_1 text-center d-block" href="#">Subscribe <i className="fa fa-chevron-right ms-1 font_14" /></a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="footer_2 row text-center mt-4">
                        <div className="col-md-12">
                            <p className="mb-0 text-light">© 2013 Your Website Name. All Rights Reserved | Design by <a className="col_green" href="http://www.templateonweb.com">TemplateOnWeb</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>


  )
}

export default Footer