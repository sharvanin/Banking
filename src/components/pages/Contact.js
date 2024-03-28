import { Grid, Typography } from '@mui/material';
import pic3 from '../../images/pic3.jpg';

const Contact = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundImage: `url(${pic3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Set minimum height to fill the viewport
        padding: '20px', // Add padding for readability
      }}
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div>
         
          <hr style={{ backgroundColor: 'white' }} />
          <Typography variant="body1" color="textPrimary">
            Welcome to Fortuna Bank, a leading financial institution dedicated to providing exceptional banking services with a focus on integrity, transparency, and innovation. Established in 2013, Fortuna Bank has been a trusted partner for individuals and businesses alike, helping them achieve their financial goals and secure their futures.
          </Typography>
          <Typography variant="body1" color="textPrimary">
            At Fortuna Bank, our mission is simple yet profound: to empower our customers to achieve financial success. We accomplish this by offering personalized banking solutions, delivering exceptional customer service, and continuously innovating with cutting-edge financial products. Building strong, long-lasting relationships with our customers based on trust, reliability, and transparency is at the core of everything we do.
          </Typography>
          <ul>
            <li>
              <Typography variant="body1" color="textPrimary" fontWeight="bold">
                Customer-Centricity:
              </Typography> Our customers are at the heart of our operations. We prioritize their needs and preferences in every aspect of our business.
            </li>
            <li>
              <Typography variant="body1" color="textPrimary" fontWeight="bold">
                Integrity:
              </Typography> We conduct ourselves with the highest standards of honesty, transparency, and ethical practices. Integrity is non-negotiable in all our dealings.
            </li>
            <li>
              <Typography variant="body1" color="textPrimary" fontWeight="bold">
                Innovation:
              </Typography> We believe in constantly pushing boundaries and exploring new horizons. Innovation drives us to offer better, more efficient solutions to our customers' financial needs.
            </li>
            <li>
              <Typography variant="body1" color="textPrimary" fontWeight="bold">
                Community Engagement:
              </Typography> Giving back to the communities we serve is integral to our identity. We are committed to making a positive impact through various social responsibility initiatives and community outreach programs.
            </li>
            <li>
              <Typography variant="body1" color="textPrimary" fontWeight="bold">
                Teamwork:
              </Typography> We foster a culture of collaboration and mutual respect within our organization. Every member of our team is valued and empowered to contribute to our collective success.
            </li>
          </ul>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
