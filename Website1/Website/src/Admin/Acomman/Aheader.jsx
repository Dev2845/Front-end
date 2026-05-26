import React from 'react'
import { NavLink } from 'react-router-dom'

function Aheader() {

    
  return (
    <div>
        <div>
            <div>
                <section id="header">
                    <nav className="navbar navbar-expand-md navbar-light shadow_box px-3" id="navbar_sticky">
                        <div className="container-fluid">
                            <NavLink className="col_voilet p-0 navbar-brand fw-bold" to="/dash">Dashboard</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-0 ms-auto nav_left">
                                     <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Package
                                        </a>
                                        <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                                            <li><NavLink className="dropdown-item" to="/PackMange">package Manage</NavLink></li>
                                            <li><NavLink className="dropdown-item border-0" to="/packadd" > Package Add</NavLink></li>
                                        </ul>
                                    </li>
                                     <li className="nav-item">
                                        <NavLink className="nav-link"  to="/Servicemana" >Services </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link"  to="/about">About </NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Blog
                                        </a>
                                        <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                                            <li><NavLink className="dropdown-item" to="/blogs" > Blog</NavLink></li>
                                            <li><NavLink className="dropdown-item border-0" to="/blogsd" > Blog Detail</NavLink></li>
                                        </ul>
                                    </li>
                                   
                                   
                                    <li className="nav-item">
                                        <NavLink className="nav-link"  to="/price" >Pricing </NavLink>
                                    </li>
                                 
                                    <li className="nav-item">
                                         <NavLink className="nav-link"  to="/contact" >Contact </NavLink>
                                    </li>
                                </ul>
                                <ul className="navbar-nav mb-0 ms-auto nav_right">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-facebook" /> </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-twitter" /> </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-youtube-play" /> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Aheader