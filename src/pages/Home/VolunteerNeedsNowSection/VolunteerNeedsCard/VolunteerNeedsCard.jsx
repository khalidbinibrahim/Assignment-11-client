import { Link } from 'react-router-dom';
import { LuTimer } from "react-icons/lu";
import { IoLocationOutline } from 'react-icons/io5';

const VolunteerNeedsCard = ({ volunteer }) => {
    console.log(volunteer);
    const { _id, thumbnail, postTitle, category, deadline, location } = volunteer;

    return (
        <div className="rounded overflow-hidden shadow-xl p-6">
            <img className="w-full rounded" src={thumbnail} alt={postTitle} />
            <div className="px-6 py-4">
                <div className="font-semibold text-2xl mb-3 font-workSans">{postTitle}</div>
                <p className="text-gray-700 text-xl mb-4 font-montserrat font-semibold">{category}</p>
                <p className="flex gap-2 items-center text-gray-700 text-base font-medium mb-3 font-poppins"><LuTimer className='text-xl' /> Deadline: {deadline}</p>
                <div className="flex items-center mb-6">
                    <span className="flex items-center gap-2 text-gray-600 font-semibold mr-2"><IoLocationOutline className='text-2xl' /> Location:</span>
                    <span className="text-gray-800 font-montserrat text-lg font-medium">{volunteer.location}</span>
                </div>
                <Link to={`/volunteer/${_id}`} className="bg-[#dda15e] hover:bg-[#bc6c25] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">View Details</Link>
            </div>
        </div>
    );
};

export default VolunteerNeedsCard;
