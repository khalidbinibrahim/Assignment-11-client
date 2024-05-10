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
            } catch (error) {
                console.error('Error fetching volunteer needs:', error);
            }
        };
        fetchVolunteerNeeds();
    }, []);

    console.log(volunteerNeeds)

    return (
        <div>
            <h2>Volunteer Needs Now</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {volunteerNeeds.map(need => (
                    <VolunteerNeedsCard
                        key={need._id}
                        thumbnail={need.thumbnail}
                        title={need.title}
                        category={need.category}
                        deadline={need.deadline}
                    />
                ))}
            </div>
            <Button variant="contained" color="primary" href="/need-volunteer">See All</Button>
        </div>
    );
};

export default VolunteerNeedsNowSection;
