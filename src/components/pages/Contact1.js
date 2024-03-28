import { Grid, Typography, TextField, Button } from '@mui/material';

const Contact1 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2">Contact Us</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          Have a question or feedback? Feel free to reach out to us using the form below. We'd love to hear from you!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="name"
                label="Your Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Your Email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Contact1;
