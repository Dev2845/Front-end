import React, { useEffect } from 'react'
import Header from '../Comman/Header'
import NavTitle from '../Comman/NavTitle'
import Footer from '../Comman/Footer'
import useApi from '../../Custome/useApi'

function Package() {
  
    const {api,fetchdata} = useApi("http://localhost:3000/package")
    
    useEffect (() => {
        fetchdata()
    },[])
  
  return (
    <div>
      <Header/>
        <NavTitle name="Tour Packages" title="Tour Packages" img="https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg" /> 
            <section id="pack" className="p_3 px-3">
                <div className="container-fluid">
                    <div className="pack_1 row">
                        <div className="col-md-3">
                            <div className="pack_1l">
                                <div className="pack_1l1">
                                    <h5 className="mb-4">Select your destination :</h5>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>All Destinations</option>
                                        <option value={1}>Africa</option>
                                        <option value={2}>India</option>
                                        <option value={3}>England</option>
                                        <option value={4}>Greece</option>
                                        <option value={5}>France</option>
                                        <option value={6}>Italy</option>
                                    </select>
                                </div>
                                <div className="pack_1l1 mt-4">
                                    <h5 className="mb-4">Select your date :</h5>
                                    <input className="form-control" id="example-date" type="date" name="date" />
                                </div>
                                <div className="pack_1l1 mt-4">
                                    <h5 className="mb-4">Typologies :</h5>
                                    <div className="pack_1l1i row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="pack_1l1il">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">Sports Activities</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label"> Heritage Tours</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">Budget Travel</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">Eco-tourism</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">Beach Holidays</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="pack_1l1il">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">Family-Friendly</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label"> Road Trips</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label"> Culinary Tourism</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">Adventure Travel</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">Cultural Tours</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pack_1l1 mt-4">
                                    <h5 className="mb-4">Max Price :</h5>
                                    <h6 className="text-end">$ 4000</h6>
                                    <input type="range" className="form-range" />
                                    <div className="form-check mt-2">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label">  See only promotions</label>
                                    </div>
                                </div>
                                <div className="pack_1l1 mt-4">
                                    <h5 className="mb-4">Durations :</h5>
                                    <div className="pack_1l1i row">
                                        <div className="col-md-6 col-6">
                                            <div className="pack_1l1il">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">1 Week</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label"> 15 Days</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-6">
                                            <div className="pack_1l1il">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">12 Days</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label"> 13 Days</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pack_1l1 mt-4">
                                    <h5 className="mb-4">Difficulty :</h5>
                                    <div className="pack_1l1i row">
                                        <div className="col-md-6 col-6">
                                            <div className="pack_1l1il">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">Challenging</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label"> Easy</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-6">
                                            <div className="pack_1l1il">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">Difficult</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label"> Medium</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pack_1l1 mt-4">
                                    <h5 className="mb-4">Min Age :</h5>
                                    <div className="pack_1l1i row">
                                        <div className="col-md-6 col-6">
                                            <div className="pack_1l1il">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">0</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label"> 20</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-6">
                                            <div className="pack_1l1il">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">18</label>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label"> 10</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="pack_1r px-4">
                                <div className="desti3 row">
                                   {
                                    api && api.map((data,index)=>{
                                    
                                        return(
                                             <div className="col-md-6 my-3" key={data.id}>
                                        <div className="desti3im">
                                            <div className="desti3im1 position-relative">
                                                <div className="desti3im1i">
                                                    <div className="grid clearfix">
                                                        <figure className="effect-jazz mb-0">
                                                            <a href="detail.html"><img src={data.img} className="w-100" alt="abc" /></a>
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="desti3im1i1 shadow_box p-3 bg-white rounded-3 position-absolute">
                                                    <div className="desti3im1i1i row">
                                                        <div className="col-md-6 col-6">
                                                            <div className="desti3im1i1il">
                                                                <h6 className="mb-0 font_14"><a href="detail.html"><i className="fa fa-clock-o me-1 col_green" /> 1 Week</a></h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-6">
                                                            <div className="desti3im1i1ir text-end">
                                                                <h6 className="mb-0 font_14"><a href="detail.html"><i className="fa fa-envelope col_green" /></a> <a href="detail.html"><i className="fa fa-map-pin col_green ms-2" /></a></h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="desti3im1i2 top-0 position-absolute w-100 text-end p-3">
                                                    <h6 className="d-inline-block mb-0 bg_green text-white p-1 px-3 font_14 rounded_50">SALE</h6>
                                                </div>
                                            </div>
                                            <div className="desti3im2 shadow_box p-4">
                                                <h5 className="mt-4 fs-4"><a href="detail.html">{data.name}</a></h5>
                                                <h6><i className="fa fa-map-marker me-1 col_green" /> {data.loaction}</h6>
                                                <hr />
                                                <p>{data.desc}</p>
                                                <hr />
                                                <div className="desti3im2i row">
                                                    <div className="col-md-6 col-6">
                                                        <div className="desti3im2il">
                                                            <h6 className="mb-0 mt-2"><a className="button" href="detail.html">Details</a></h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-6">
                                                        <div className="desti3im2ir text-end">
                                                            <h4 className="mb-0"><span className="fw-normal font_14 text-muted">From</span><br />
                                                                $ {data.price}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        )
                                    })
                                   }
                                </div>
                              
                                <div className="pages mt-4 text-center row">
                                    <div className="col-md-12">
                                        <ul className="mb-0">
                                            <li><a href="detail.html"><i className="fa fa-chevron-left" /></a></li>
                                            <li><a className="act" href="detail.html">1</a></li>
                                            <li><a href="detail.html">2</a></li>
                                            <li><a href="detail.html">3</a></li>
                                            <li><a href="detail.html">4</a></li>
                                            <li><a href="detail.html">5</a></li>
                                            <li><a href="detail.html">6</a></li>
                                            <li><a href="detail.html"><i className="fa fa-chevron-right" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer />
    </div>
  )
}

export default Package