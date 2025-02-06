import { Button, Grid, Typography, Link } from "@mui/material"; // Correct import

export const Footer = () => {
  return (
    <Grid
      container
      sx={{ bgcolor: "black", color: "white" , fontSize:"13px", py: 3, textAlign: "center" }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" sx={{ pb: 1 }}>Company</Typography>
        <div className="flex flex-col pt-3">
        <Button sx={{ color: "white" , fontSize:"13px" }}>About</Button>
        <Button sx={{ color: "white" , fontSize:"13px" }}>Blog</Button>
        <Button sx={{ color: "white" , fontSize:"13px" }}>Press</Button>
        <Button sx={{ color: "white" , fontSize:"13px" }}>Jobs</Button>
        <Button sx={{ color: "white" , fontSize:"13px" }}>Partners</Button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" sx={{ pb: 1 }}>Solutions</Typography>
        <div className="flex flex-col pt-3">
        <Button sx={{ color: "white" , fontSize:"13px" }}>Marketing</Button>
        <Button sx={{ color: "white" , fontSize:"13px" }}>Analytics</Button>
        <Button sx={{ color: "white" , fontSize:"13px" }}>Commerce</Button>
        <Button sx={{ color: "white" , fontSize:"13px" }}>Insights</Button>
        <Button sx={{ color: "white" , fontSize:"13px" }}>Support</Button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" sx={{ pb: 1 }}>Documentation</Typography>
        <div className="flex flex-col pt-3 ">
        <Button sx={{ color: "white" , fontSize:"13px" }}>Guides</Button>
        <Button sx={{ color: "white" , fontSize:"13px" }}>API Status</Button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" sx={{ pb: 1 }}>Legal</Typography>
        <div className="flex flex-col pt-3">
        <Button sx={{ color: "white" , fontSize:"13px" }}>Claim</Button>
        <Button sx={{ color: "white" , fontSize:"13px" }}>Privacy</Button>
        <Button sx={{ color: "white" , fontSize:"13px" }}>Terms</Button>
        </div>
      </Grid>

      <Grid item xs={12} sx={{ pt: 5 }}>
        <Typography variant="body2">&copy; 2025 My Company. All rights reserved.</Typography>
        <Typography variant="body2">Made with ❤️ by me</Typography>
        <Typography variant="body2">
          Icons made by{" "}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>{" "}
          from{" "}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
