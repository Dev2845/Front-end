import { useEffect, useState } from "react";
import api from "../../api/axios";
import AdminLayout from "../../layouts/AdminLayout";
import "../../css/admin/users.css";
import toast from "react-hot-toast";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const { data } = await api.get("/auth/users");

            console.log("API Response:", data);
            console.log("Users:", data.users);

            setUsers(data.users);

        } catch (error) {
            console.log("Error:", error.response);

            toast.error(
                error.response?.data?.message || "Failed to load users"
            );
        } finally {
            setLoading(false);
        }
    };
    //  View user
    const handleView = async (id) => {

        try {

            const { data } = await api.get(`/auth/users/${id}`);

            setSelectedUser(data.user);

            setShowModal(true);

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Failed"
            );

        }

    };
    // Block / Unblock

    const handleBlock = async (id) => {

        try {

            const { data } = await api.patch(
                `/auth/users/block/${id}`
            );

            toast.success(data.message);

            fetchUsers();

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Failed"
            );

        }

    };

    // Delete User
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this user?"
        );

        if (!confirmDelete) return;

        try {

            const { data } = await api.delete(
                `/auth/users/${id}`
            );

            toast.success(data.message);

            fetchUsers();

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Delete Failed"
            );

        }

    };

    return (
        <>

            <AdminLayout>

                <div className="users-header">

                    <h2>User Management</h2>

                </div>

                {
                    loading ?

                        <h3>Loading...</h3>

                        :

                        <table className="users-table">

                            <thead>

                                <tr>

                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Status</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    users.map((user, index) => (

                                        <tr key={user._id}>

                                            <td>{index + 1}</td>

                                            <td>

                                                <img
                                                    src={
                                                        user.profileImage ||
                                                        "https://via.placeholder.com/50"
                                                    }
                                                    alt=""
                                                    className="user-img"
                                                />

                                            </td>

                                            <td>{user.name}</td>

                                            <td>{user.email}</td>

                                            <td>{user.phone}</td>

                                            <td>

                                                {
                                                    user.status ?

                                                        <span className="active">
                                                            Active
                                                        </span>

                                                        :

                                                        <span className="blocked">
                                                            Blocked
                                                        </span>
                                                }

                                            </td>
                                            <td>

                                                <button
                                                    onClick={() => handleView(user._id)}
                                                >
                                                    View
                                                </button>

                                                <button
                                                    onClick={() => handleBlock(user._id)}
                                                >
                                                    {user.status ? "Block" : "Unblock"}
                                                </button>

                                                <button
                                                    onClick={() => handleDelete(user._id)}
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                }

            </AdminLayout>

            {
                showModal && selectedUser && (

                    <div className="modal">

                        <div className="modal-box">

                            <h2>User Details</h2>

                            <img
                                src={
                                    selectedUser.profileImage ||
                                    "https://via.placeholder.com/100"
                                }
                                className="user-preview"
                                alt=""
                            />

                            <p><b>Name :</b> {selectedUser.name}</p>

                            <p><b>Email :</b> {selectedUser.email}</p>

                            <p><b>Phone :</b> {selectedUser.phone}</p>

                            <p><b>Role :</b> {selectedUser.role}</p>

                            <p>
                                <b>Status :</b>

                                {selectedUser.status
                                    ? " Active"
                                    : " Blocked"}
                            </p>

                            <button
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>

                        </div>

                    </div>

                )
            }
        </>

    );

};

export default Users;