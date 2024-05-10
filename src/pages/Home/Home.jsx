import { Helmet } from "react-helmet-async";
import Header from "./Header/Header";
import VolunteerNeedsNowSection from "./VolunteerNeedsNowSection/VolunteerNeedsNowSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>VolunteerHub | Home</title>
            </Helmet>
            <Header />
            <VolunteerNeedsNowSection />
        </div>
    );
};

export default Home;