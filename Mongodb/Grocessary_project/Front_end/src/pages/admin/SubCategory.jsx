import { useEffect, useState } from "react";
import api from "../../api/axios";
import AdminLayout from "../../layouts/AdminLayout";
import "../../css/admin/subcategory.css";
import toast from "react-hot-toast";

const SubCategory = () => {

    const [subCategories, setSubCategories] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSubCategories();
        fetchCategories();
    }, []);

    const fetchSubCategories = async () => {

        try {

            const { data } = await api.get("/subcategory");

            setSubCategories(data.subCategories);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const fetchCategories = async () => {

        try {

            const { data } = await api.get("/category");

            setCategories(data.categories);

        } catch (error) {

            console.log(error);

        }

    };

    const [showModal, setShowModal] = useState(false);

    const [form, setForm] = useState({
        category: "",
        name: "",
        description: ""
    });

    const handleSubmit = async () => {

        if (
            !form.category ||
            !form.name
        ) {

            toast.error("Please fill all fields");

            return;

        }

        try {

            const { data } = await api.post(

                "/subcategory",

                form

            );

            toast.success(data.message);

            setShowModal(false);

            setForm({

                category: "",
                name: "",
                description: ""

            });

            fetchSubCategories();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed"

            );

        }

    };

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const [editId, setEditId] = useState(null);

    const handleEdit = (sub) => {

        setEditId(sub._id);

        setForm({

            category: sub.category._id,

            name: sub.name,

            description: sub.description

        });

        setShowModal(true);

    };
    const handleUpdate = async () => {

        try {

            const { data } = await api.put(

                `/subcategory/${editId}`,

                form

            );

            toast.success(data.message);

            setEditId(null);

            setShowModal(false);

            setForm({

                category: "",

                name: "",

                description: ""

            });

            fetchSubCategories();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Update Failed"

            );

        }

    };

    const handleDelete = async (id) => {

        if (

            !window.confirm(

                "Delete this SubCategory?"

            )

        ) return;

        try {

            const { data } = await api.delete(

                `/subcategory/${id}`

            );

            toast.success(data.message);

            fetchSubCategories();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Delete Failed"

            );

        }

    };

    return (
        <>
            <AdminLayout>

                <div className="subcategory-header">

                    <h2>Sub Category Management</h2>

                    <button onClick={() => setShowModal(true)}>
                        Add Sub Category
                    </button>

                </div>

                {
                    loading ?

                        <h3>Loading...</h3>

                        :

                        <table className="subcategory-table">

                            <thead>

                                <tr>

                                    <th>#</th>

                                    <th>Category</th>

                                    <th>Sub Category</th>

                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    subCategories.map((sub, index) => (

                                        <tr key={sub._id}>

                                            <td>{index + 1}</td>

                                            <td>{sub.category?.name}</td>

                                            <td>{sub.name}</td>

                                            <td>

                                                <button onClick={() => handleEdit(sub)}>
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() => handleDelete(sub._id)}
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
                showModal && (

                    <div className="custom-modal">

                        <div className="custom-modal-box">

                            <h2>

                                {editId ?

                                    "Edit Sub Category"

                                    :

                                    "Add Sub Category"

                                }

                            </h2>

                            <select
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select Category
                                </option>

                                {

                                    categories.map((cat) => (

                                        <option
                                            key={cat._id}
                                            value={cat._id}
                                        >
                                            {cat.name}
                                        </option>

                                    ))

                                }

                            </select>

                            <input
                                type="text"
                                name="name"
                                placeholder="Sub Category Name"
                                value={form.name}
                                onChange={handleChange}
                            />

                            <textarea
                                name="description"
                                placeholder="Description"
                                value={form.description}
                                onChange={handleChange}
                            />

                            <div className="custom-modal-btn">

                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        setEditId(null);
                                        setForm({
                                            category: "",
                                            name: "",
                                            description: ""
                                        });
                                    }}
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={editId ? handleUpdate : handleSubmit}
                                >
                                    {editId ? "Update" : "Save"}
                                </button>

                            </div>

                        </div>

                    </div>

                )
            }
        </>


    );

};

export default SubCategory;