import Home from "../pages/Home";
// import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Products from "../pages/Expenses";
import Stores from "../pages/Products";

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
        path: "/products",
        component: Products,
        name: "Products",
        protected: false
    }
]

export default routes
