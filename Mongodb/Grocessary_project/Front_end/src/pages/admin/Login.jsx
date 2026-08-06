import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import toast from "react-hot-toast";
import "./Login.css";

const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const { data } = await api.post("/auth/login", form);

            localStorage.setItem("adminToken", data.token);
            localStorage.setItem("admin", JSON.stringify(data.user));

            toast.success("Login Successful");

            navigate("/admin/dashboard");

        } catch (err) {

            toast.error(
                err.response?.data?.message || "Login Failed"
            );

        }

    };

    return (

        <div className="admin-login-container">

            <form className="admin-login-box" onSubmit={handleSubmit}>

                <h2>Admin Login</h2>

                <div className="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-group">

                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />

                </div>

                <button type="submit" className="login-btn">
                    Login
                </button>

            </form>

        </div>

    );

};

export default Login;