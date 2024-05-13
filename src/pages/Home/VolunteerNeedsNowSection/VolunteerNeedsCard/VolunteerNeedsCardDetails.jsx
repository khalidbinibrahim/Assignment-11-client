import { useEffect, useState } from 'react';
import axios from 'axios';
import VolunteerModal from './VolunteerModal';
import { LuTimer, LuPencil } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { useParams } from 'react-router-dom';

const VolunteerNeedCardDetails = () => {
  const [allVolunteer, setAllVolunteer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { postId } = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`https://assignment-11-server-woad-one.vercel.app/api/add_volunteer_post`, { withCredentials: true });
        setAllVolunteer(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, []);

  const volunteerCardDetails = allVolunteer && allVolunteer.find(volunteer => volunteer._id === postId);

  useEffect(() => {
    console.log(volunteerCardDetails);
  }, [volunteerCardDetails]);

  const handleBeVolunteerClick = () => {
    setShowModal(true);
  };

  if (!volunteerCardDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl">
            <img src={volunteerCardDetails.thumbnail} alt={volunteerCardDetails.postTitle} className="w-full h-64 object-cover object-center" />
            <div className="p-6">
              <h1 className="text-3xl font-semibold font-workSans text-gray-800 mb-6">{volunteerCardDetails.postTitle}</h1>
              <div className="flex items-center mb-4">
                <span className="flex items-center gap-2 text-gray-600 font-semibold mr-2"><LuPencil className='text-2xl' /> Review:</span>
                <span className="text-gray-700 text-lg font-poppins">{volunteerCardDetails.description}</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="flex items-center gap-2 text-gray-600 font-semibold mr-2"><BiCategory className='text-2xl' /> Category:</span>
                <span className="text-gray-800 font-montserrat text-xl font-medium">{volunteerCardDetails.category}</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="flex items-center gap-2 text-gray-600 font-semibold mr-2"><IoLocationOutline className='text-2xl' /> Location:</span>
                <span className="text-gray-800 font-montserrat text-xl font-medium">{volunteerCardDetails.location}</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="flex items-center gap-2 text-gray-600 font-semibold mr-2"><LuUsers2 className='text-2xl' /> Volunteers Needed:</span>
                <span className="text-gray-800 font-montserrat text-xl font-medium">{volunteerCardDetails.volunteersNeeded}</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="flex items-center gap-2 text-gray-600 font-semibold mr-2"><LuTimer className='text-2xl' /> Deadline:</span>
                <span className="text-gray-800 font-montserrat text-xl font-medium">{new Date(volunteerCardDetails.deadline).toLocaleDateString()}</span>
              </div>
              <button
                onClick={handleBeVolunteerClick}
                className="bg-[#dda15e] hover:bg-[#bc6c25] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Be a Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <VolunteerModal volunteerPost={volunteerCardDetails} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default VolunteerNeedCardDetails;
