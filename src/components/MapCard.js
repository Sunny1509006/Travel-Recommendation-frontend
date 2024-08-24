import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MapCard = ({ mapUrl }) => {
  // Convert the URL to an embeddable URL for the iframe
  const embedUrl = mapUrl.replace('/maps.app.goo.gl/', '/maps.google.com/maps?source=embed&');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <Card sx={{ minWidth: 275, maxWidth: 600, margin: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Location Map
          </Typography>
          <Box sx={{ mt: 2 }}>
            <iframe
              src={embedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MapCard;
