import { useRoutes } from "react-router-dom";
import ProtectedRoutes from "../routesVaildation/ProtectedRoutes";
import RoleProtected from "../routesVaildation/RoleProtected";
import Login from "../pages/Login";
import MainLayout from "../components/MainLayout";
import Dashboard from "../pages/Dashboard";
import VendorInvites from "../pages/VendorInvites";
import Profile from "../pages/Profile";

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
                        { path: "dashboard", element: <Dashboard/> },
                        { path: "profile", element: <Profile/> },
                        {
                            element: <RoleProtected roles={["superadmin"]} />,
                            children: [
                                { path: "vendor-invites", element: <VendorInvites/> }
                            ]
                        }
                    ]
                }
            ]
        }
    ])
}

export default Router;