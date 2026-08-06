import "../../css/admin/topNavbar.css";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {

    const navigate = useNavigate();

    const admin = JSON.parse(localStorage.getItem("admin"));

    const logout = () => {

        localStorage.removeItem("adminToken");
        localStorage.removeItem("admin");

        navigate("/admin/login");

    };

    return (

        <div className="top-navbar">

            <div>

                <h2>Dashboard</h2>

            </div>

            <div className="top-right">

                <span>

                    Welcome, {admin?.name}

                </span>

                <button onClick={logout}>

                    Logout

                </button>

            </div>

        </div>

    );

};

export default TopNavbar;