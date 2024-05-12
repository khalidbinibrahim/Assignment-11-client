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
                const response = await axios.get(`https://assignment-11-server-woad-one.vercel.app/api/user_request_volunteer/${user.uid}`);
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
                await axios.delete(`https://assignment-11-server-woad-one.vercel.app/api/request_volunteer/${requestId}`);
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

            {volunteerRequests.length > 0 ? (
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>Information 1</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {volunteerRequests.map(request => (
                            <tr key={request._id}>
                                <td>{request.suggestion}</td>
                                <td>
                                    <button onClick={() => handleCancelRequest(request._id)}>Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No volunteer requests found.</p>
            )}
        </div>
    );
};

export default MyVolunteerRequestedPage;
