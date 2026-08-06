import { Navigate } from "react-router-dom";

export default function UserProtectedRoute({ children }) {

    const token = localStorage.getItem("userToken");

    return token ? children : <Navigate to="/login" />;
}