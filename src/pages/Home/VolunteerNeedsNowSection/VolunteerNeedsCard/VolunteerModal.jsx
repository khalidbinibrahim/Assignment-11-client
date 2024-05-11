import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../providers/AuthProvider';

const VolunteerModal = ({ volunteerPost, onClose }) => {
    const [suggestion, setSuggestion] = useState('');
    const { user } = useContext(AuthContext);
    const { _id } = volunteerPost;

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://assignment-11-server-woad-one.vercel.app/api/request_volunteer', {
                postId: _id,
                volunteerName: user.email,
                volunteerEmail: user.displayName,
                suggestion
            });

            onClose();
        } catch (error) {
            console.error('Error submitting volunteer request:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Volunteer Form</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Suggestion:</label>
                        <textarea
                            className="w-full border-gray-300 rounded-md focus:ring focus:ring-blue-200 p-2"
                            rows="4"
                            value={suggestion}
                            onChange={(e) => setSuggestion(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VolunteerModal;
