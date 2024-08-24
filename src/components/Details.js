import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MapCard from './MapCard';
import Rating from '@mui/material/Rating';

const Details = () => {
  const location = useLocation();
  const { item } = location.state || {}; // Ensure that item is accessed safely


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card sx={{ minWidth: 275, margin: 2, width: '75%' }}>
        <CardContent>
          {item['Spot Name'] && (
            <Typography variant="h5" component="div">
              {item['Spot Name']}
            </Typography>
          )}
          {item.Division && (
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Division: {item.Division}
            </Typography>
          )}
          {item.District && (
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              District: {item.District}
            </Typography>
          )}
           {item.Ratting && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body2" sx={{ marginRight: 1 }}>
                        Rating:
                      </Typography>
                      <Rating name="read-only" value={item.Ratting} readOnly />
                    </Box>
          )}
          
          {item['Destination Type'] && (
            <Typography variant="body2">
              Destination Type: {item['Destination Type']}
            </Typography>
          )}
          {item['Features about the place'] && (
            <Typography variant="body2">
              Features: {item['Features about the place']}
            </Typography>
          )}
          {item['Starting Point (Dhaka)'] && (
            <Typography variant="body2">
              Starting Point: {item['Starting Point (Dhaka)']}
            </Typography>
          )}
          {item['By Bus'] && (
            <Typography variant="body2">
              By Bus: {item['By Bus']}
            </Typography>
          )}
          {item['By Train from Kamalapur Dhaka'] && (
            <Typography variant="body2">
              By Train: {item['By Train from Kamalapur Dhaka']}
            </Typography>
          )}
          {item['Addional Transport'] && (
            <Typography variant="body2">
              Additional Transport: {item['Addional Transport']}
            </Typography>
          )}
          {item['distance (km)'] && (
            <Typography variant="body2">
              Distance (km): {item['distance (km)']}
            </Typography>
          )}
          {item['Duration (min)'] && (
            <Typography variant="body2">
              Duration (min): {item['Duration (min)']}
            </Typography>
          )}
          {item['visited season'] && (
            <Typography variant="body2">
              Visited Season: {item['visited season']}
            </Typography>
          )}
          {item['Cab/Car booking number'] && (
            <Typography variant="body2">
              Cab/Car Booking Number: {item['Cab/Car booking number']}
            </Typography>
          )}
          {item['Local Food that must try'] && (
            <Typography variant="body2">
              Local Food to Try: {item['Local Food that must try']}
            </Typography>
          )}
          {item['Maximum hotel cost (thousands/per night)'] && (
            <Typography variant="body2">
              Maximum Hotel Cost: {item['Maximum hotel cost (thousands/per night)']}k per night
            </Typography>
          )}
          {item['Minimum hotel cost (thousands/per night)'] && (
            <Typography variant="body2">
              Minimum Hotel Cost: {item['Minimum hotel cost (thousands/per night)']}k per night
            </Typography>
          )}
          {item['hotel name'] && (
            <Typography variant="body2">
              Hotel Name: {item['hotel name']}
            </Typography>
          )}
          {item['Hotel (contact number)'] && (
            <Typography variant="body2">
              Hotel Contact Number: {item['Hotel (contact number)']}
            </Typography>
          )}
          {item['Local Guide Name'] && (
            <Typography variant="body2">
              Local Guide Name: {item['Local Guide Name']}
            </Typography>
          )}
          {item['Guide number'] && (
            <Typography variant="body2">
              Guide Number: {item['Guide number']}
            </Typography>
          )}
         
          {item.images && (
            <Typography variant="body2">
              Images: {item.images}
            </Typography>
          )}
          {item['Location (google Map)'] && (
            <Typography variant="body2">
              Location: <a href={item['Location (google Map)']} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </Typography>
            // <MapCard mapUrl={item['Location (google Map)']} />

          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Details;
