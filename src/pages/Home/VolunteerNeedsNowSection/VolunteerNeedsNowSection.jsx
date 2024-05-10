import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import VolunteerNeedsCard from './VolunteerNeedsCard/VolunteerNeedsCard';

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

    return (
        <div>
            <div className="mb-12">
                <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-4">Volunteer Needs Now Section</h2>
                <p className="font-poppins font-normal text-[#878787] text-center">Volunteering allows you to connect to your community and make it a better <br /> place. Even helping out with the smallest tasks can make a real difference to the lives of people, animals, and organizations in need.</p>
            </div>
            <div className="px-32 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {volunteerNeeds.map(volunteer => (
                    <VolunteerNeedsCard
                        key={volunteer._id}
                        volunteer={volunteer}
                    />
                ))}
            </div>
            <Button variant="contained" color="primary" href="/need-volunteer">See All</Button>
        </div>
    );
};

export default VolunteerNeedsNowSection;
