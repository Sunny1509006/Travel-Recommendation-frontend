import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const View = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Access the response data passed from the form

  return (
    <>
      {data && data.length > 0 ? (
        <h1 style={{ color: 'blue', marginLeft: '50px' }}>
          Here are some places you can walk around
        </h1>
      ) : (
        <></>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexWrap: 'wrap' }}>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <Link 
              key={index} 
              to={{
                pathname: `/details/${index}`, // Create a unique path for each item
              }} 
            //   state: { {item: item}} // Pass the specific item data to the new page
              style={{ textDecoration: 'none', width: '30%',minWidth: 275 }}
              state={{item: item}}
            >
              <Card sx={{ minWidth: 275, margin: 2 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item['Spot Name']}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    District: {item.District}
                  </Typography>
                  <Typography variant="body2">
                    Rating: {item.Ratting}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <Typography>No data available</Typography>
        )}
      </Box>
    </>
  );
};

export default View;
