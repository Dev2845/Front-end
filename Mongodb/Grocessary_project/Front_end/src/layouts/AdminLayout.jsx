import Sidebar from "../components/admin/Sidebar";
import TopNavbar from "../components/admin/TopNavbar";
import "../css/admin/adminLayout.css";

const AdminLayout = ({ children }) => {

    return (

        <div className="admin-container">

            <Sidebar />

            <div className="admin-main">

                <TopNavbar />

                <div className="admin-content">

                    {children}

                </div>

            </div>

        </div>

    );

};

export default AdminLayout;