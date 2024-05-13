import { Link } from "react-router-dom";

const VolunteerNeedsTable = ({ volunteerNeeds }) => {
    return (
        <div className="overflow-x-auto mx-8 my-10 px-14 py-8 rounded-md font-montserrat flex justify-center">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Post Title</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Location</th>
                        <th className="px-4 py-2">Deadline</th>
                        <th className="px-4 py-2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {volunteerNeeds.map(volunteer => (
                        <tr key={volunteer._id}>
                            <td className="border px-4 py-2">{volunteer.postTitle}</td>
                            <td className="border px-4 py-2">{volunteer.category}</td>
                            <td className="border px-4 py-2">{volunteer.location}</td>
                            <td className="border px-4 py-2">{new Date(volunteer.deadline).toLocaleDateString()}</td>
                            <td className="border px-4 py-4">
                                <Link to={`/volunteer/${volunteer._id}`} className="bg-[#dda15e] hover:bg-[#bc6c25] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">View Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VolunteerNeedsTable;
