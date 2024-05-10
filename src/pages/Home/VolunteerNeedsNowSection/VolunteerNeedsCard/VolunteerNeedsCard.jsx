import { Link } from 'react-router-dom';
import { LuTimer } from "react-icons/lu";

const VolunteerNeedsCard = ({ volunteer }) => {
    console.log(volunteer);
    const { _id, thumbnail, postTitle, category, deadline } = volunteer;

    return (
            <div className="rounded overflow-hidden shadow-xl p-6">
                <img className="w-full rounded" src={thumbnail} alt={postTitle} />
                <div className="px-6 py-4">
                    <div className="font-semibold text-2xl mb-2 font-workSans">{postTitle}</div>
                    <p className="text-gray-700 text-xl mb-3 font-montserrat font-semibold">{category}</p>
                    <p className="flex gap-2 items-center text-gray-700 text-base font-medium mb-3 font-poppins"><LuTimer className='text-xl' /> Deadline: {deadline}</p>
                    <Link to={`/volunteer/${_id}`} className="text-blue-500 hover:text-blue-800">View Details</Link>
                </div>
            </div>
    );
};

export default VolunteerNeedsCard;
