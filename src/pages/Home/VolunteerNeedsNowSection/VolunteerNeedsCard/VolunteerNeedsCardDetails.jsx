import { useState, useEffect } from 'react';
import axios from 'axios';

const VolunteerNeedCardDetails = ({ match }) => {
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`/api/volunteer-post/${match.params.postId}`);
        setPostDetails(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [match.params.postId]);

  if (!postDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display post details */}
      <h2>{postDetails.postTitle}</h2>
      <p>{postDetails.description}</p>
      {/* Display other post details */}
      <button>Be a Volunteer</button>
    </div>
  );
};

export default VolunteerNeedCardDetails;
