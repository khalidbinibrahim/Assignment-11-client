import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const ManageMyPost = () => {
    const { user } = useContext(AuthContext);
    const [volunteerNeeds, setVolunteerNeeds] = useState([]);

    useEffect(() => {
        const fetchUserVolunteerPosts = async () => {
            if (user) {
                try {
                    const response = await fetch(`https://assignment-11-server-woad-one.vercel.app/api/user_volunteer_post/${user.uid}`, {
                        headers: {
                            Authorization: `Bearer ${user.token}`
                        }
                    }, { withCredentials: true });
                    if (!response.ok) {
                        throw new Error('Failed to fetch user volunteer posts');
                    }
                    const data = await response.json();
                    console.log(data);
                    setVolunteerNeeds(data);
                } catch (error) {
                    console.error('Error fetching user volunteer posts:', error.message);
                    toast.error('An error occurred while fetching your volunteer posts.');
                }
            }
        };

        fetchUserVolunteerPosts();
    }, [user]);

    const handleDelete = (id) => {
        fetch(`https://assignment-11-server-woad-one.vercel.app/api/add_volunteer_post/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }, { withCredentials: true })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok, status: ${res.status}, statusText: ${res.statusText}`);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setVolunteerNeeds(prev => prev.filter(item => item._id !== id));
                toast.success('Your Volunteer Post Deleted Successfully');
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                toast.error('An error occurred while processing your request. Please try again later.');
            });

    };

    return (
        <div>
            <Helmet>
                <title>VolunteerHub | Manage My Post</title>
            </Helmet>
            <div className="container mx-auto w-9/12 my-14">
                <div className="mx-8 my-10 px-14 py-8 border rounded-md border-gray-400 font-montserrat text-center">
                    <h1 className="text-3xl font-bold my-4">My Volunteer Posts</h1>
                    {volunteerNeeds.length === 0 ? (
                        <p>No volunteer posts found.</p>
                    ) : (
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Post Title</th>
                                    <th className="px-4 py-2">Category</th>
                                    <th className="px-4 py-2">Location</th>
                                    <th className="px-4 py-2">Deadline</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {volunteerNeeds.map(volunteer => (
                                    <tr key={volunteer._id}>
                                        <td className="border px-4 py-2">{volunteer.postTitle}</td>
                                        <td className="border px-4 py-2">{volunteer.category}</td>
                                        <td className="border px-4 py-2">{volunteer.location}</td>
                                        <td className="border px-4 py-2">{new Date(volunteer.deadline).toLocaleDateString()}</td>
                                        <td className="border px-4 py-2">
                                            <NavLink to={`/update_volunteer_post/${volunteer._id}`} className="btn text-blue-500 hover:text-blue-700 font-bold px-7 text-center rounded-md border-none mb-2">Update</NavLink>
                                            <button onClick={() => handleDelete(volunteer._id)} className="btn text-red-500 hover:text-red-700 font-bold px-7 text-center rounded-md border-none">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageMyPost;
