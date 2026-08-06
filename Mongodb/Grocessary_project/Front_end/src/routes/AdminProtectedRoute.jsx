import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {

    const token = localStorage.getItem("adminToken");
    const admin = JSON.parse(localStorage.getItem("admin"));

    if (!token || !admin) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

export default AdminProtectedRoute;