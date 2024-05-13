import { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import VolunteerNeedsCard from '../Home/VolunteerNeedsNowSection/VolunteerNeedsCard/VolunteerNeedsCard';
import VolunteerNeedsTable from '../Home/VolunteerNeedsNowSection/VolunteerNeedsTable/VolunteerNeedsTable';
import { CiGrid41, CiViewTable } from "react-icons/ci";

const NeedVolunteerPage = () => {
    const [volunteerNeeds, setVolunteerNeeds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [layoutMode, setLayoutMode] = useState('grid');

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

    const toggleLayoutMode = () => {
        setLayoutMode(layoutMode === 'grid' ? 'table' : 'grid');
    };

    const filteredVolunteerNeeds = volunteerNeeds.filter(volunteer =>
        volunteer.postTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Helmet>
                <title>VolunteerHub | Need Volunteer Page</title>
            </Helmet>
            <div className="px-4 py-8">
                <h1 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-6">Volunteer Needs</h1>
                <div className='w-1/3 mx-auto my-4'>
                    <TextField
                        label="Search by Post Title"
                        variant="outlined"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        fullWidth
                        className="mb-4"
                    />
                </div>
                <div className="flex justify-end mr-24">
                    <Button variant="contained" onClick={toggleLayoutMode}>
                        {layoutMode === 'grid' ? <CiViewTable className='text-3xl' /> : <CiGrid41 className='text-3xl' />}
                    </Button>
                </div>
                {/* Render either grid or table layout based on the layout mode */}
                {layoutMode === 'grid' ? (
                    <div className="px-32 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {filteredVolunteerNeeds.map(volunteer => (
                            <VolunteerNeedsCard key={volunteer._id} volunteer={volunteer} />
                        ))}
                    </div>
                ) : (
                    <VolunteerNeedsTable volunteerNeeds={filteredVolunteerNeeds} />
                )}
            </div>
        </div>
    );
};

export default NeedVolunteerPage;
