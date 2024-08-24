import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function valuetext(value) {
  return `${value}K`; // Display in thousands
}

function valueRating(value) {
  return `${value}`;
}

function CostRangeSlider({ onChange }) {
  const [value, setValue] = useState([1, 10]); // Default range from 1 to 10 thousand

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue); // Pass the new value to the parent component
  };

  return (
    <Box sx={{ width: 300 }}>
      <div>
        <p style={{ fontWeight: 'bold' }}>Select Cost in thousands</p>
        <p>Minimum Cost: {value[0]}K</p>
        <p>Maximum Cost: {value[1]}K</p>
      </div>
      <Slider
        getAriaLabel={() => 'Cost range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0} // Minimum cost
        max={50} // Maximum cost
      />
    </Box>
  );
}

function RatingSlider({ value, onChange }) {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <div>
        <p style={{ fontWeight: 'bold' }}>Select Rating of the place</p>
        <p>Rating: {value}</p>
      </div>
      <Slider
        aria-label="Rating"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
      />
    </Box>
  );
}

function DescriptionField({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ width: 300 }}>
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={6}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}

const DestinationForm = () => {
  const navigate = useNavigate();

  const [isRatingSelected, setIsRatingSelected] = useState(false);
  const [formData, setFormData] = useState({
    max_distance: '',
    max_duration: '',
    max_cost: 10, // Default range for cost
    min_cost: 1,
    rating: null, // Default null, indicating no rating
    description: ''
  });

  const handleCostChange = (costRange) => {
    setFormData({
      ...formData,
      min_cost: costRange[0],
      max_cost: costRange[1],
    });
  };

  const handleRatingChange = (newRating) => {
    setFormData({
      ...formData,
      rating: newRating,
    });
  };

  const handleDescriptionChange = (newDescription) => {
    setFormData({
      ...formData,
      description: newDescription,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingToggle = (event) => {
    setIsRatingSelected(event.target.checked);
    if (!event.target.checked) {
      setFormData({
        ...formData,
        rating: null, // Reset rating if deselected
      });
    } else {
      setFormData({
        ...formData,
        rating: 3, // Set default rating to 3 when selected
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter out empty values from formData
    const filteredData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== "" && value !== null)
    );

    // Construct the query parameters
    const params = new URLSearchParams(filteredData).toString();

    // Assuming your API endpoint is '/get-places/'
    axios.get(`http://127.0.0.1:8000/get-places/?${params}`)
      .then(response => {
        // Redirect to the view page with the response data
        navigate('/view', { state: { data: response.data } });
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '75ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Maximum Distance (km)"
            variant="filled"
            name="max_distance"
            value={formData.max_distance}
            onChange={handleChange}
          />
          <TextField
            id="filled-basic"
            label="Maximum Duration (Minutes)"
            variant="filled"
            name="max_duration"
            value={formData.max_duration}
            onChange={handleChange}
          />
          <CostRangeSlider onChange={handleCostChange} />
          <FormControlLabel
            control={
              <Checkbox
                checked={isRatingSelected}
                onChange={handleRatingToggle}
                name="ratingToggle"
              />
            }
            label="Include Rating"
          />
          {isRatingSelected && (
            <RatingSlider value={formData.rating} onChange={handleRatingChange} />
          )}
          <DescriptionField value={formData.description} onChange={handleDescriptionChange} />
        </Box>
        <Stack spacing={2} direction="row">
          <Button variant="contained" type="submit">Submit</Button>
        </Stack>
      </form>
    </div>
  );
};

export default DestinationForm;
