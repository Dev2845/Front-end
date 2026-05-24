import React, { use, useEffect, useState } from 'react'
import useApi from '../../Custome/useApi'
import Aheader from '../Acomman/Aheader'
import { data } from 'react-router-dom'
import axios, { Axios } from 'axios';
import useMeta from '../../Custome/useMeta';

function Servicemana()
 { useEffect (() => {
     fetchdata();
   }, []) ;

   const {getchange, getsubmit,} = useMeta("http://localhost:3000/service")

  
  
  const[pack, setservice] = useState ({ 
     id: "",
    name: "",
    loaction: "",
    desc: "",
    days: "",
    price: "",
    img: "",

  });


     const [view, setview] = useState()

    return (
        <div>
            {/* <Aheader /> */}
            <h1 className='text-center'>Service Manage Detils</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Name</th>
                            <th scope="col">desc</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getapi && getapi.map((data, key) => {
                                return (
                                    <tr className='text-center' key={data.id}>
                                        <th scope="row">{key + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.desc.slice(0, 40)}...</td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#staticBackdropService" onClick={() => setview(data)} >View</button>
                                            <button className='btn btn-success mx-2' data-bs-toggle="modal" data-bs-target="#update-status-modal-service" onClick={() => getid(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => del(data.id)}>Delete</button>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="modal fade" id="staticBackdropService" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Service</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {
                                    view && (
                                        <div>
                                            <div className="desti3im">
                                                <div className="desti3im2 shadow_box p-4">
                                                    <h5 className="fs-4"><a href="detail.html">{view.name}</a></h5>
                                                    <hr />
                                                    <p>{view.desc}</p>
                                                    <hr />
                                                    <div className="d-flex fs-4" >
                                                        <p className="px-3">Icon:</p>
                                                        <i className={view.icons}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="update-status-modal-service" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-2" id="staticBackdropLabel">Update Service</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {
                                    edit && (
                                        <div className="mx-auto">
                                            <div className="contact_2l">
                                                <form action="">
                                                    <div className="blog_dt1ib3i row">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Enter Service Name" value={edit.name} onChange={getedit} name='name' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il d-flex">
                                                                <input placeholder="Enter icon class" name='icons' value={edit.icons} onChange={getedit} className="form-control border-0 bg-light me-5" type="text" />
                                                                <div className='fs-1 me-5'><i className={edit.icons} /> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <textarea placeholder="Enter your  desc" value={edit.desc} onChange={getedit} name='desc' className="form-control form_text border-0 bg-light" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-success" data-bs-dismiss="modal" onClick={UpdateApi}>Update</button>
                                <button type="button" className="btn btn-secondary btn-danger" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-add-data">Add New Service</button>
                </div>
                <div className="modal fade" id="modal-add-data" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-2" id="staticBackdropLabel">Add New Service</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {
                                    input && (
                                        <div className="mx-auto">
                                            <div className="contact_2l">
                                                <form action="">
                                                    <div className="blog_dt1ib3i row">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Enter Service Name" value={input.name} onChange={getchange} name='name' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il d-flex">
                                                                <input placeholder="Enter icon class" name='icons' value={input.icons} onChange={getchange} className="form-control border-0 bg-light me-5" type="text" />
                                                                <div className='fs-1 me-5'><i className={input.icons} /> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <textarea placeholder="Enter your  desc" value={input.desc} onChange={getchange} name='desc' className="form-control form_text border-0 bg-light" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-success" data-bs-dismiss="modal" onClick={getsubmit}>Add Service</button>
                                <button type="button" className="btn btn-secondary btn-danger" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicemana