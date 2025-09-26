import { useRoutes } from "react-router-dom";
import ProtectedRoutes from "../routesVaildation/ProtectedRoutes";
import Login from "../pages/Login";

function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Login />
        }, {
            element: <ProtectedRoutes />,
            children: [
                {
                    path: "dashboard",
                    element: <h1>Dashboard Page</h1>
                }
            ]
        }
    ])
}

export default Router;