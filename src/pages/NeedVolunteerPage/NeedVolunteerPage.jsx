import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import VolunteerNeedsCard from '../Home/VolunteerNeedsNowSection/VolunteerNeedsCard/VolunteerNeedsCard';

const NeedVolunteerPage = () => {
    const [volunteerNeeds, setVolunteerNeeds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredVolunteerNeeds = volunteerNeeds.filter(volunteer =>
        volunteer.postTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Helmet>
                <title>VolunteerHub | Need Volunteer Page</title>
            </Helmet>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Volunteer Needs</h1>
                <TextField
                    label="Search by Post Title"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    fullWidth
                    className="mb-4"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredVolunteerNeeds.map(volunteer => (
                        <VolunteerNeedsCard key={volunteer._id} volunteer={volunteer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NeedVolunteerPage;
