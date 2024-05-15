import { NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleLogOut = () => {
        logOut()
            .then(toast.success('User log out successfully'))
            .catch(error => {
                console.error(error);
            })
    }

    const navLinks = <>
        <NavLink to="/" className="mr-3 font-bold text-black hover:bg-base-300 hover:text-[#606c38] focus:text-[#606c38] focus:font-semibold rounded-lg py-2 px-3">Home</NavLink>
        <NavLink to="/need_volunteer_page" className="mr-3 font-bold text-black hover:bg-base-300 hover:text-[#606c38] focus:text-[#606c38] focus:font-semibold rounded-lg py-2 px-3">Need Volunteer Page</NavLink>
        <li className="">
            <details>
                <summary className="font-bold text-black hover:bg-base-300 hover:text-[#606c38] focus:text-[#606c38] focus:font-semibold rounded-lg py-2 px-3">My Profile</summary>
                <ul className="flex flex-col">
                    <NavLink to="/add_volunteer_post" className="mr-3 font-bold text-black hover:bg-base-300 hover:text-[#606c38] focus:text-[#606c38] focus:font-semibold rounded-lg py-2 px-3">Add Volunteer Post</NavLink>
                    <NavLink to="/manage_my_post" className="mr-3 font-bold text-black hover:bg-base-300 hover:text-[#606c38] focus:text-[#606c38] focus:font-semibold rounded-lg py-2 px-3">Manage My Post</NavLink>
                    <NavLink to="/my_volunteer_requested_post" className="mr-3 font-bold text-black hover:bg-base-300 hover:text-[#606c38] focus:text-[#606c38] focus:font-semibold rounded-lg py-2 px-3">My Volunteer Requested Post</NavLink>
                </ul>
            </details>
        </li>
    </>

    return (
        <div className="navbar font-montserrat px-32 py-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <Fade cascade damping={0.1} triggerOnce={true}>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </Fade>
                </div>
                <div className="flex gap-2 items-center mr-6 text-3xl">
                    <img width={220} height={220} src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_b8826cc01484bd77dfb2070118eacbd0/volunteerhub.png" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex mr-4 ml-4">
                <Fade cascade damping={0.2} triggerOnce={true}>
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </Fade>
            </div>
            <div className="navbar-end">
                <label className="swap swap-rotate mr-4">
                    <input onClick={toggleTheme} type="checkbox" />
                    <div className="swap-on text-3xl"><MdDarkMode /></div>
                    <div className="swap-off text-3xl"><FaRegLightbulb /></div>
                </label>

                {
                    user ?
                        <div className="flex gap-2 items-center">
                            <button onClick={handleLogOut} className="btn bg-[#dda15e] text-black font-bold px-7">Log Out</button>
                            <NavLink to="/update_profile">
                                <img id="userPhoto" alt="" src={user?.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} className="w-14 h-14 rounded-full" />
                            </NavLink>
                            <Tooltip
                                anchorId="userPhoto"
                                place="top"
                                content={user.displayName}
                            />
                        </div> :
                        <NavLink to="/login" className="btn bg-[#dda15e] text-black font-bold px-7">Login</NavLink>
                }

            </div>
        </div>
    );
};

export default Navigation;