import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UpdateVolunteerPost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { postId } = useParams();
    const [ allVolunteerPost, setAllVolunteerPost ] = useState();
    
        const response = axios.get('https://assignment-11-server-woad-one.vercel.app/api/add_volunteer_post', { withCredentials: true });
        if (response.status === 201) {
            setAllVolunteerPost(response.data);
            console.log(response.data);
        } else {
            toast.error('Failed to load volunteer post');
        }

    const volunteer = allVolunteerPost.find(spot => spot._id === postId);

    useEffect(() => {
        console.log(volunteer);
    }, [volunteer]);

    const { description, location, thumbnail, postTitle, volunteersNeeded, deadline, organizerName, organizerEmail } = volunteer;

    const onSubmit = async data => {
        console.log(data);
        try {
            await axios.put(`https://assignment-11-server-woad-one.vercel.app/api/add_volunteer_post/${postId}`, data, { withCredentials: true })

            window.location.href = '/manage_my_post';
            toast.success('Your Volunteer Updated Successfully');
        } catch (error) {
            console.error('Error updating volunteer:', error.message);
        }
    }

    return (
        <div>
            <div className='mb-8'>
                <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl">Update Volunteer Post</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-6 mx-72 my-8'>
                    <Grid item xs={12}>
                        <TextField
                            {...register('thumbnail', { required: 'Thumbnail is required' })}
                            label="Thumbnail"
                            fullWidth
                            defaultValue={thumbnail}
                            error={!!errors.thumbnail}
                            helperText={errors.thumbnail ? errors.thumbnail.message : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('postTitle', { required: 'Post Title is required' })}
                            label="Post Title"
                            fullWidth
                            defaultValue={postTitle}
                            error={!!errors.postTitle}
                            helperText={errors.postTitle ? errors.postTitle.message : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('description', { required: 'Description is required' })}
                            label="Description"
                            multiline
                            rows={4}
                            fullWidth
                            defaultValue={description}
                            error={!!errors.description}
                            helperText={errors.description ? errors.description.message : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth error={!!errors.category}>
                            <InputLabel>Category</InputLabel>
                            <Select
                                {...register('category', { required: 'Category is required' })}
                            >
                                <MenuItem value="healthcare">Healthcare</MenuItem>
                                <MenuItem value="education">Education</MenuItem>
                                <MenuItem value="socialService">Social Service</MenuItem>
                                <MenuItem value="animalWelfare">Animal Welfare</MenuItem>
                            </Select>
                            {errors.category && <Typography variant="caption" color="error">{errors.category.message}</Typography>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('location')}
                            label="Location"
                            fullWidth
                            defaultValue={location}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('volunteersNeeded', { required: 'No. of Volunteers Needed is required' })}
                            label="No. of Volunteers Needed"
                            fullWidth
                            defaultValue={volunteersNeeded}
                            type="number"
                            error={!!errors.volunteersNeeded}
                            helperText={errors.volunteersNeeded ? errors.volunteersNeeded.message : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('deadline', { required: 'Deadline is required' })}
                            label="Deadline"
                            type="date"
                            fullWidth
                            defaultValue={deadline}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={!!errors.deadline}
                            helperText={errors.deadline ? errors.deadline.message : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('organizerName', { required: 'Organizer Name is required' })}
                            label="Organizer Name"
                            fullWidth
                            defaultValue={organizerName}
                            InputProps={{
                                readOnly: true,
                            }}
                            error={!!errors.organizerName}
                            helperText={errors.organizerName ? errors.organizerName.message : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('organizerEmail', { required: 'Organizer Email is required' })}
                            label="Organizer Email"
                            fullWidth
                            defaultValue={organizerEmail}
                            InputProps={{
                                readOnly: true,
                            }}
                            error={!!errors.organizerEmail}
                            helperText={errors.organizerEmail ? errors.organizerEmail.message : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <button className="bg-[#dda15e] w-1/2 h-full hover:bg-[#bc6c25] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">Update Post</button>
                    </Grid>
                </div>
            </form>
        </div>
    );
};

export default UpdateVolunteerPost;