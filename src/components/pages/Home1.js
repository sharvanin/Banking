
import { Grid, Typography } from '@mui/material';
import pic2 from '../../images/pic2.jpg'; // Import the image file

const Home1 = () => {
  return (
    <Grid
      container
      sx={{
        height: '90vh',
        backgroundImage: `url(${pic2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // Set text color to white
        textAlign: 'center', // Center-align text
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Fortuna Bank
      </Typography>
      <Typography variant="body1">
        Your financial well-being is our top priority. At Fortuna, we understand the importance of security when it comes to managing your money and making transactions. That's why we're dedicated to providing you with a banking experience that not only meets your needs but also ensures the <span style={{ backgroundColor: 'yellow', color: 'black', fontWeight: 'bold' }}>safety and security</span> of your funds.
      </Typography>
    </Grid>
  );
};

export default Home1;
