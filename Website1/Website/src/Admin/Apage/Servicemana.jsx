import React, { useEffect } from 'react'
import useApi from '../../Custome/useApi'
import Aheader from '../Acomman/Aheader'
import useView from '../../Custome/useView';

function Servicemana() {


    const { api, fetchdata } = useApi("http://localhost:3000/service");
    const { view, fetchview } = useView("http://localhost:3000/service");

useEffect(() => {
   fetchview()
}, [])


// 


    //  get view services
    return (
        <div>
            <Aheader />
            <h1 className='text-center'>Service Manage Detils</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">desc</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            api && api.map((service, key) => {
                                return (
                                    // console.log(data)
                                    <tr className='text-center' key={key}>
                                        <th scope="row">{service.id}</th>
                                        <td>{service.name}</td>
                                        <td>{service.desc} ...</td>
                                        <td>
                                            <button className='btn btn-info'
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdropService"
                                                onClick={() => fetchview(service.id)}>view</button>
                                            <button className='btn btn-danger'>Edit</button>
                                            <button className='btn btn-primary'>delete</button>
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
        view && view.map((item, key) => {
            return (
                <div key={key}>
                    <div className="desti3im">
                        <div className="desti3im2 shadow_box p-4">
                            <h5 className="fs-4">
                                <a href="detail.html">{item.name}</a>
                            </h5>
                            <hr />
                            <p>{item.desc}</p>
                            <hr />
                            <div className="d-flex fs-4">
                                <p className="px-3">Icon:</p>
                                <i className={item.icons}></i>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
</div>
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Servicemana
