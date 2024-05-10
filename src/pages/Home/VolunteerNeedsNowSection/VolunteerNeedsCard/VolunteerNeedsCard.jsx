import { Card, Button } from '@mui/material';

const VolunteerNeedsCard = ({ thumbnail, title, category, deadline }) => {
    return (
        <Card>
            <img src={thumbnail} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>Category: {category}</p>
                <p>Deadline: {deadline}</p>
                <Button variant="contained" color="primary">View Details</Button>
            </div>
        </Card>
    );
};

export default VolunteerNeedsCard;
