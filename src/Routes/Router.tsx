import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import HomePage from "../Pages/HomePage/HomePage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignPage/DesignPage";
import DesignPageV2 from "../Pages/DesignPage/DesignPageV2";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "", element: <HomePage/>},
            { path: "search", element: <SearchPage/>},
            { path: "design-guide", element: <DesignPage/>},
            { path: "design-guide-hungtee", element: <DesignPageV2/>},
            { path: "company/:ticker", element: <CompanyPage/>,
                children: [
                    { path: "company-profile", element: <CompanyProfile/>},
                    { path: "income-statement", element: <IncomeStatement/>}
                ]
            },
        ]
    }
])