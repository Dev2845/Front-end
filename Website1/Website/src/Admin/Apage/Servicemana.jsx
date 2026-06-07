import React, { useEffect, useState } from 'react';
import useApi from '../../Custome/useApi';
import Aheader from '../Acomman/Aheader';
import axios from 'axios';
import { toast } from 'react-toastify';

function Servicemana() {

    const { api, fetchdata } = useApi("http://localhost:3000/service");

    // View state
    const [service, setservice] = useState({
        id: "",
        name: "",
        desc: ""
    });

    // Add state
    const [addservice, setaddservice] = useState({
        name: "",
        desc: ""
    });

    // Edit state
    const [editing, setediting] = useState({
        id: "",
        name: "",
        desc: ""
    });

    useEffect(() => {
        fetchdata();
    }, []);

    // ================= VIEW =================
    const getservice = async (id) => {
        const res = await axios.get(`http://localhost:3000/service/${id}`);
        setservice(res.data);
    };

    // ================= ADD =================
    const handleAddChange = (e) => {
        setaddservice({
            ...addservice,
            [e.target.name]: e.target.value
        });
    };

    const addService = async (e) => {
        e.preventDefault();

        if (!addservice.name || !addservice.desc) {
            toast.error("Please fill all fields");
            return;
        }

        try {
            await axios.post(
                "http://localhost:3000/service",
                addservice
            );

            toast.success("Service added successfully");

            setaddservice({
                name: "",
                desc: ""
            });

            fetchdata();

        } catch (error) {
            toast.error("Add failed");
        }
    };

    // ================= DELETE =================
    const deleteService = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/service/${id}`);
            toast.success("Deleted successfully");
            fetchdata();
        } catch (error) {
            toast.error("Delete failed");
        }
    };

    // ================= EDIT =================
    const getdata = (service) => {
        setediting(service);
    };

    const getchange = (e) => {
        setediting({
            ...editing,
            [e.target.name]: e.target.value
        });
    };

    const Updateservice = async (e) => {
        e.preventDefault();

        try {
            await axios.put(
                `http://localhost:3000/service/${editing.id}`,
                editing
            );

            toast.success("Updated successfully");
            fetchdata();

        } catch (error) {
            toast.error("Update failed");
        }
    };

    return (
        <div>
            <Aheader />

            <div className="container mt-4">

                <div className="d-flex justify-content-between mb-3">
                    <h2>Service Management</h2>

                    {/* ADD BUTTON */}
                    <button
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#addServiceModal"
                    >
                        Add Service
                    </button>
                </div>

                {/* TABLE */}
                <table className="table table-bordered">
                    <thead>
                        <tr className="text-center">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            api && api.map((service) => (
                                <tr key={service.id} className="text-center">
                                    <td>{service.id}</td>
                                    <td>{service.name}</td>
                                    <td>{service.desc}</td>

                                    <td>
                                        <button
                                            className="btn btn-info me-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#viewServiceModal"
                                            onClick={() => getservice(service.id)}
                                        >
                                            View
                                        </button>

                                        <button
                                            className="btn btn-warning me-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#editServiceModal"
                                            onClick={() => getdata(service)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteService(service.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {/* ================= ADD MODAL ================= */}
                <div className="modal fade" id="addServiceModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5>Add Service</h5>
                                <button className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={addService}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Service Name"
                                        className="form-control mb-3"
                                        value={addservice.name}
                                        onChange={handleAddChange}
                                    />

                                    <textarea
                                        name="desc"
                                        placeholder="Description"
                                        className="form-control mb-3"
                                        value={addservice.desc}
                                        onChange={handleAddChange}
                                    />

                                    <button
                                        className="btn btn-success"
                                        data-bs-dismiss="modal"
                                    >
                                        Add Service
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ================= VIEW MODAL ================= */}
                <div className="modal fade" id="viewServiceModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5>Service Details</h5>
                                <button className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div className="modal-body">
                                <h4>{service.name}</h4>
                                <p>{service.desc}</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ================= EDIT MODAL ================= */}
                <div className="modal fade" id="editServiceModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5>Edit Service</h5>
                                <button className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={Updateservice}>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control mb-3"
                                        value={editing.name}
                                        onChange={getchange}
                                    />

                                    <textarea
                                        name="desc"
                                        className="form-control mb-3"
                                        value={editing.desc}
                                        onChange={getchange}
                                    />

                                    <button
                                        className="btn btn-warning"
                                        data-bs-dismiss="modal"
                                    >
                                        Update
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Servicemana;