import { useEffect, useState } from "react";
import api from "../../api/axios";
import AdminLayout from "../../layouts/AdminLayout";
import "../../css/admin/category.css";
import toast from "react-hot-toast";

const Category = () => {

    const [showModal, setShowModal] = useState(false);

    const [form, setForm] = useState({
        name: "",
        description: ""
    });

    const [image, setImage] = useState(null);

    const [preview, setPreview] = useState("");

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCategories = async () => {

        try {

            const { data } = await api.get("/category");

            setCategories(data.categories);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleImage = (e) => {

        const file = e.target.files[0];

        setImage(file);

        setPreview(URL.createObjectURL(file));

    };

    const handleSubmit = async () => {

        if (!form.name || !form.description || !image) {

            toast.error("Please fill all fields");

            return;

        }

        try {

            const formData = new FormData();

            formData.append("name", form.name);
            formData.append("description", form.description);
            formData.append("image", image);

            const { data } = await api.post(

                "/category",

                formData,

                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }

            );

            toast.success(data.message || "Category Added");

            setShowModal(false);

            setForm({
                name: "",
                description: ""
            });

            setImage(null);

            setPreview("");

            fetchCategories();

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Something went wrong"

            );

        }

    };

    useEffect(() => {

        fetchCategories();

    }, []);

    // Update 
    const [editId, setEditId] = useState(null);
    const handleEdit = (category) => {

        setEditId(category._id);

        setForm({
            name: category.name,
            description: category.description
        });

        setPreview(category.image);

        setImage(null);

        setShowModal(true);

    };

    const handleUpdate = async () => {

        try {

            const formData = new FormData();

            formData.append("name", form.name);
            formData.append("description", form.description);

            if (image) {
                formData.append("image", image);
            }

            const { data } = await api.put(

                `/category/${editId}`,

                formData,

                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }

            );

            toast.success(data.message);

            setShowModal(false);

            setEditId(null);

            setForm({
                name: "",
                description: ""
            });

            setImage(null);

            setPreview("");

            fetchCategories();

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Update Failed"
            );

        }

    };

    const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    try {

        const { data } = await api.delete(`/category/${id}`);

        toast.success(data.message);

        fetchCategories();

    } catch (error) {

        toast.error(
            error.response?.data?.message ||
            "Delete Failed"
        );

    }

};

    return (
        <>

            <AdminLayout>

                <div className="category-header">

                    <h2>Category Management</h2>

                    <button onClick={() => setShowModal(true)}>
                        Add Category
                    </button>

                </div>

                {
                    loading ?

                        <h3>Loading...</h3>

                        :

                        <table className="category-table">

                            <thead>

                                <tr>

                                    <th>#</th>

                                    <th>Image</th>

                                    <th>Name</th>

                                    <th>Description</th>

                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    categories.map((cat, index) => (

                                        <tr key={cat._id}>

                                            <td>{index + 1}</td>

                                            <td>

                                                <img
                                                    src={cat.image}
                                                    alt={cat.name}
                                                />

                                            </td>

                                            <td>{cat.name}</td>

                                            <td>{cat.description}</td>

                                            <td>

                                                <button onClick={() => handleEdit(cat)}>
                                                    Edit
                                                </button>

                                               <button onClick={() => handleDelete(cat._id)}>
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

                                {editId ? "Edit Category" : "Add Category"}

                            </h2>

                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                placeholder="Category Name"
                                onChange={handleChange}
                            />

                            <textarea
                                name="description"
                                value={form.description}
                                placeholder="Description"
                                onChange={handleChange}
                            />

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImage}
                            />

                            {
                                preview && (

                                    <img
                                        src={preview}
                                        alt=""
                                        className="preview"
                                    />

                                )
                            }

                            <div className="custom-modal-btn">

                                <button
                                    onClick={() => {

                                        setShowModal(false);
                                        setEditId(null);
                                        setForm({
                                            name: "",
                                            description: ""
                                        });

                                        setImage(null);

                                        setPreview("");

                                    }}
                                >

                                    Cancel

                                </button>

                                <button
                                    onClick={
                                        editId
                                            ? handleUpdate
                                            : handleSubmit
                                    }
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

export default Category;