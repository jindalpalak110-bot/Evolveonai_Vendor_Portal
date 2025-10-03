import { useRoutes } from "react-router-dom";
import ProtectedRoutes from "../routesVaildation/ProtectedRoutes";
import Login from "../pages/Login";
import MainLayout from "../components/MainLayout";

function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Login />
        }, {
            element: <ProtectedRoutes />,
            children: [
                {
                    path: "/",
                    element: <MainLayout/>,
                    children: [
                        { path: "dashboard", element: <div>Dashboard</div> }
                    ]
                }
            ]
        }
    ])
}

export default Router;