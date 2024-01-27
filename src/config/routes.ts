import Home from "../pages/Home";
// import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Expenses from "../pages/Expenses";

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
        path: "/products",
        component: Products,
        name: "Products",
        protected: false
    },
    {
        path: "/expenses",
        component: Expenses,
        name: "Expenses",
        protected: false
    }
]

export default routes
