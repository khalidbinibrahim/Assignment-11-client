import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';

const MyVolunteerRequestedPage = () => {
    const [volunteerRequests, setVolunteerRequests] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchVolunteerRequests = async () => {
            try {
                const response = await axios.get(`https://assignment-11-server-woad-one.vercel.app/api/user_request_volunteer/${user.uid}`, { withCredentials: true });
                setVolunteerRequests(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching volunteer requests:', error);
            }
        };
        fetchVolunteerRequests();
    }, [user]);

    const handleCancelRequest = async (requestId) => {
        const confirmCancel = window.confirm('Are you sure you want to cancel this volunteer request?');
        if (confirmCancel) {
            try {
                await axios.delete(`https://assignment-11-server-woad-one.vercel.app/api/request_volunteer/${requestId}`, { withCredentials: true });
                setVolunteerRequests(volunteerRequests.filter(request => request._id !== requestId));
            } catch (error) {
                console.error('Error canceling volunteer request:', error);
            }
        }
    };

    return (
        <div>
            <Helmet>
                <title>VolunteerHub | My Volunteer Requested Page</title>
            </Helmet>

            <div className="container mx-auto w-9/12 my-14">
                <div className="mx-8 my-10 px-14 py-8 border rounded-md border-gray-400 font-montserrat text-center">
                    <h1 className="text-3xl font-bold my-4">My Volunteer Requests</h1>
                    {volunteerRequests.length === 0 ? (
                        <p>No volunteer requests found.</p>
                    ) : (
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Suggestion</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {volunteerRequests.map(volunteer => (
                                    <tr key={volunteer._id}>
                                        <td className="border px-4 py-2">{volunteer.suggestion}</td>
                                        <td className="border px-4 py-2">
                                            <button
                                                onClick={() => handleCancelRequest(volunteer._id)}
                                                className="btn text-red-500 hover:text-red-700 font-bold px-7 text-center rounded-md border-none"
                                            >
                                                Cancel
                                            </button>
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

export default MyVolunteerRequestedPage;
