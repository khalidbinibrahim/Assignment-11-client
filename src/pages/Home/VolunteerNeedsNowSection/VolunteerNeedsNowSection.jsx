import { useEffect, useState } from 'react';
import axios from 'axios';
import VolunteerNeedsCard from './VolunteerNeedsCard/VolunteerNeedsCard';
import { NavLink } from 'react-router-dom';

const VolunteerNeedsNowSection = () => {
    const [volunteerNeeds, setVolunteerNeeds] = useState([]);

    useEffect(() => {
        const fetchVolunteerNeeds = async () => {
            try {
                const response = await axios.get('https://assignment-11-server-woad-one.vercel.app/api/add_volunteer_post');
                setVolunteerNeeds(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching volunteer needs:', error);
            }
        };
        fetchVolunteerNeeds();
    }, []);

    console.log(volunteerNeeds);

    const limitedVolunteerNeeds = volunteerNeeds.slice(0, 6);

    return (
        <div className='mb-10'>
            <div className="mb-12">
                <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-4">Volunteer Needs Now Section</h2>
                <p className="font-poppins font-normal text-[#878787] text-center">Volunteering allows you to connect to your community and make it a better <br /> place. Even helping out with the smallest tasks can make a real difference to the lives of people, animals, and organizations in need.</p>
            </div>
            <div className="px-32 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {limitedVolunteerNeeds.map(volunteer => (
                    <VolunteerNeedsCard
                        key={volunteer._id}
                        volunteer={volunteer}
                    />
                ))}
            </div>
            <div className='text-center'>
                <NavLink to="/need_volunteer_page" className="btn bg-[#dda15e] text-black font-bold font-montserrat px-7">See All</NavLink>
            </div>
        </div>
    );
};

export default VolunteerNeedsNowSection;
