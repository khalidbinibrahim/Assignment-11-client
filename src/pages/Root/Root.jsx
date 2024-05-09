import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer"
import Navigation from "../Shared/Navigation/Navigation";

const Root = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;