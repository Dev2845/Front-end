import AdminLayout from "../../layouts/AdminLayout";
import "../../css/admin/dashboard.css";
import { useEffect, useState } from "react";
import api from "../../api/axios";

const Dashboard = () => {

    const [counts, setCounts] = useState({
        categories: 0,
        products: 0,
        orders: 0,
        users: 0
    });

    const fetchDashboard = async () => {

    try {

        const [
            categoryRes,
            productRes,
            orderRes,
            userRes
        ] = await Promise.all([

            api.get("/category"),
            api.get("/product"),
            api.get("/order/admin/all"),   // ✅ સાચું
            api.get("/auth/users")

        ]);

        setCounts({

            categories: categoryRes.data.categories.length,
            products: productRes.data.products.length,
            orders: orderRes.data.orders.length,
            users: userRes.data.users.length

        });

    } catch (error) {

        console.log(error);

    }

};
    useEffect(() => {

        fetchDashboard();

    }, []);

    return (

        <AdminLayout>

            <div className="dashboard-cards">

                <div className="card">

                    <h2>Categories</h2>

                    <h1>{counts.categories}</h1>

                </div>

                <div className="card">

                    <h2>Products</h2>

                    <h1>{counts.products}</h1>

                </div>

                <div className="card">

                    <h2>Orders</h2>

                    <h1>{counts.orders}</h1>

                </div>

                <div className="card">

                    <h2>Users</h2>

                   <h1>{counts.users}</h1>

                </div>

            </div>

        </AdminLayout>

    );

};

export default Dashboard;