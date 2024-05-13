import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="p-10 bg-gray-950 text-neutral-content font-poppins">
            <footer className="footer mb-14 font-poppins flex items-center justify-between">
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center mr-6 text-white text-3xl mb-2">
                        <img width={180} height={180} src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_b8826cc01484bd77dfb2070118eacbd0/volunteerhub.png" alt="" />
                    </div>
                    <p className="font-montserrat text-base-300 font-medium mb-6">A volunteer job is a non-paid position where you assist an organization <br /> by providing volunteer labor for a variety of tasks. Your responsibilities <br /> depend entirely on the type of organization for which you volunteer. <br /> There are many different types of volunteer positions.</p>
                </div>
                <nav>
                    <NavLink to="/" className="link link-hover text-white hover:text-[#606c38]">Home</NavLink>
                    <NavLink to="/need_volunteer_page" className="link link-hover text-white hover:text-[#606c38]">Need Volunteer Page</NavLink>
                    <NavLink to="/add_volunteer_post" className="link link-hover text-white hover:text-[#606c38]">Add Volunteer Post</NavLink>
                    <NavLink to="/manage_my_post" className="link link-hover text-white hover:text-[#606c38]">Manage My Post</NavLink>
                    <NavLink to="/login" className="link link-hover text-white hover:text-[#606c38]">Login</NavLink>
                </nav>
                <div className="mb-4 lg:mb-0">
                    <h2 className="text-lg font-bold mb-2">Stay Connected</h2>
                    <p>Subscribe to our newsletter to get the latest updates and offers!</p>
                    <form className="mt-4 flex">
                        <input type="email" placeholder="Your email" className="bg-gray-700 text-white rounded-l-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Subscribe</button>
                    </form>
                </div>
            </footer>
            <div className="mt-8 border-t border-gray-600 pt-4 font-montserrat text-center">
                <p>&copy; {new Date().getFullYear()} VolunteerHub. All rights reserved.</p>
                <p>Designed with <span role="img" aria-label="heart">❤️</span> by Your Team</p>
                <p>1234 Main St, City, State, 12345 | Phone: (123) 456-7890 | Email: info@example.com</p>
            </div>
        </div>
    );
};

export default Footer;