import { useEffect, useState } from "react";
import api from "../../api/axios";
import AdminLayout from "../../layouts/AdminLayout";
import "../../css/admin/product.css";
import toast from "react-hot-toast";

const Product = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const [images, setImages] = useState([]);

    const [preview, setPreview] = useState([]);

    const [form, setForm] = useState({
        name: "",
        description: "",
        category: "",
        subCategory: "",
        brand: "",
        price: "",
        discountPrice: "",
        stock: "",
        featured: false
    });

    useEffect(() => {

        fetchProducts();
        fetchCategories();
        fetchSubCategories();

    }, []);

    const fetchProducts = async () => {

        try {

            const { data } = await api.get("/product");

            setProducts(data.products);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const fetchCategories = async () => {

        const { data } = await api.get("/category");

        setCategories(data.categories);

    };

    const fetchSubCategories = async () => {

        const { data } = await api.get("/subcategory");

        setSubCategories(data.subCategories);

    };
    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setForm({

            ...form,

            [name]: type === "checkbox" ? checked : value

        });

    };

    const handleImages = (e) => {

        const files = Array.from(e.target.files);

        setImages(files);

        const imagePreview = files.map((file) =>
            URL.createObjectURL(file)
        );

        setPreview(imagePreview);

    };

    const handleSubmit = async () => {

        if (
            !form.name ||
            !form.category ||
            !form.subCategory ||
            !form.price ||
            !form.stock
        ) {

            toast.error("Please fill all required fields");

            return;

        }

        try {

            const formData = new FormData();

            formData.append("name", form.name);
            formData.append("description", form.description);
            formData.append("category", form.category);
            formData.append("subCategory", form.subCategory);
            formData.append("brand", form.brand);
            formData.append("price", form.price);
            formData.append("discountPrice", form.discountPrice);
            formData.append("stock", form.stock);
            formData.append("featured", form.featured);

            images.forEach((img) => {

                formData.append("images", img);

            });

            const { data } = await api.post(

                "/product",

                formData,

                {

                    headers: {

                        "Content-Type": "multipart/form-data"

                    }

                }

            );

            toast.success(data.message);

            setShowModal(false);

            fetchProducts();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed"

            );

        }

    };

    const [editId, setEditId] = useState(null);

    const handleEdit = (product) => {

        setEditId(product._id);

        setForm({
            name: product.name,
            description: product.description,
            category: product.category?._id || "",
            subCategory: product.subCategory?._id || "",
            brand: product.brand,
            price: product.price,
            discountPrice: product.discountPrice,
            stock: product.stock,
            featured: product.featured
        });

        // Existing Images Preview
        setPreview(product.images || []);

        // Reset selected files
        setImages([]);

        setShowModal(true);

    };
    const handleUpdate = async () => {

        try {

            const formData = new FormData();

            Object.keys(form).forEach(key => {
                formData.append(key, form[key]);
            });

            images.forEach(img => {
                formData.append("images", img);
            });

            const { data } = await api.put(
                `/product/${editId}`,
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

            setImages([]);

            setPreview([]);

            fetchProducts();

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Update Failed"
            );

        }

    };


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {

            const { data } = await api.delete(`/product/${id}`);

            toast.success(data.message);

            fetchProducts();

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Delete Failed"
            );

        }

    };

    const toggleFeatured = async (id) => {

        try {

            const { data } = await api.patch(
                `/product/featured/${id}`
            );

            toast.success(data.message);

            fetchProducts();

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Failed"
            );

        }

    };

    return (
        <>

            <AdminLayout>

                <div className="product-header">

                    <h2>Product Management</h2>

                    <button onClick={() => setShowModal(true)}>
                        Add Product
                    </button>

                </div>

                {

                    loading ?

                        <h3>Loading...</h3>

                        :

                        <table className="product-table">

                            <thead>

                                <tr>

                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>SubCategory</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    products.map((product, index) => (

                                        <tr key={product._id}>

                                            <td>{index + 1}</td>

                                            <td>

                                                <img
                                                    src={product.images?.[0]}
                                                    alt={product.name}
                                                    width="60"
                                                />

                                            </td>

                                            <td>{product.name}</td>

                                            <td>{product.category?.name}</td>

                                            <td>{product.subCategory?.name}</td>

                                            <td>₹ {product.price}</td>

                                            <td>{product.stock}</td>

                                            <td>

                                                <button className="data" onClick={() => handleEdit(product)}>
                                                    Edit
                                                </button>

                                                <button
                                                    className="delete-btn data"
                                                    onClick={() => handleDelete(product._id)}
                                                >
                                                    Delete
                                                </button>

                                                <button className="data"
                                                    onClick={() => toggleFeatured(product._id)}
                                                >
                                                    {product.featured ? "★ Featured" : "☆ Feature"}
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

                        <div className="custom-modal-box product-modal">

                            <h2>
                                {editId ? "Update Product" : "Add Product"}
                            </h2>

                            <input
                                type="text"
                                name="name"
                                placeholder="Product Name"
                                value={form.name}
                                onChange={handleChange}
                            />

                            <textarea
                                name="description"
                                placeholder="Description"
                                value={form.description}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="brand"
                                placeholder="Brand"
                                value={form.brand}
                                onChange={handleChange}
                            />

                            <select
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                            >

                                <option value="">Select Category</option>

                                {
                                    categories.map(cat => (
                                        <option
                                            key={cat._id}
                                            value={cat._id}
                                        >
                                            {cat.name}
                                        </option>
                                    ))
                                }

                            </select>

                            <select
                                name="subCategory"
                                value={form.subCategory}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select SubCategory
                                </option>

                                {
                                    subCategories.map(sub => (
                                        <option
                                            key={sub._id}
                                            value={sub._id}
                                        >
                                            {sub.name}
                                        </option>
                                    ))
                                }

                            </select>

                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={form.price}
                                onChange={handleChange}
                            />

                            <input
                                type="number"
                                name="discountPrice"
                                placeholder="Discount Price"
                                value={form.discountPrice}
                                onChange={handleChange}
                            />

                            <input
                                type="number"
                                name="stock"
                                placeholder="Stock"
                                value={form.stock}
                                onChange={handleChange}
                            />

                            <label>

                                <input
                                    type="checkbox"
                                    name="featured"
                                    checked={form.featured}
                                    onChange={handleChange}
                                />

                                Featured Product

                            </label>

                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImages}
                            />

                            <div className="preview-container">

                                {
                                    preview.map((img, index) => (

                                        <img
                                            key={index}
                                            src={img}
                                            alt=""
                                            className="preview"
                                        />

                                    ))
                                }

                            </div>

                            <div className="custom-modal-btn">

                                <button onClick={() => {

                                    setShowModal(false);

                                    setEditId(null);

                                    setImages([]);

                                    setPreview([]);

                                }}>
                                    cancel
                                </button>

                                {
                                    editId ?

                                        <button onClick={handleUpdate}>
                                            Update Product
                                        </button>

                                        :

                                        <button onClick={handleSubmit}>
                                            Save Product
                                        </button>
                                }

                            </div>

                        </div>

                    </div>

                )
            }
        </>



    );

};

export default Product;