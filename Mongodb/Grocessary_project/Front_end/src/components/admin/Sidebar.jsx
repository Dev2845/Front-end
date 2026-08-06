import { NavLink, useNavigate, Link} from "react-router-dom";
import "./../../css/admin/sidebar.css";

const Sidebar = () => {

    const navigate = useNavigate();

    const admin = JSON.parse(localStorage.getItem("admin"));

    const logout = () => {

        localStorage.removeItem("adminToken");
        localStorage.removeItem("admin");

        navigate("/admin/login");

    };

    return (

        <div className="sidebar">

            <div className="sidebar-logo">

                <h2>SmartMall</h2>

                <p>Admin Panel</p>

            </div>

            <div className="admin-info">

                <h4>{admin?.name}</h4>

                <small>{admin?.email}</small>

            </div>

            <ul>

                <li>
                    <NavLink to="/admin/dashboard">
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/admin/category">
                        Categories
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/admin/subcategory">
                        Sub Categories
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/admin/product">
                        Products
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/admin/orders">
                        Orders
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/admin/users">
                        Users
                    </NavLink>
                </li>
                <li>
                    <Link to="/admin/product">
                        📦 Products
                    </Link>
                </li>

            </ul>

            <button
                className="logout-btn"
                onClick={logout}
            >
                Logout
            </button>

        </div>

    );

};

export default Sidebar;