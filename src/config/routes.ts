import Home from "../pages/Home";
// import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Items from "../pages/Items";
import Stores from "../pages/Stores";

interface RouteType{
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
        protected: false
    },
    { 
        path: "/login",
        component: Login,
        name: "Login",
        protected: false
    },
    {
        path: "/stores",
        component: Stores,
        name: "Stores",
        protected: false
    },
    {
        path: "/items",
        component: Items,
        name: "Items",
        protected: false
    }
]

export default routes
