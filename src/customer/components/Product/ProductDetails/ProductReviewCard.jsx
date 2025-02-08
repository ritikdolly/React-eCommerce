import { Avatar, Box, Grid, Rating } from "@mui/material";

export const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: "56", height: "56", bgcolor: "#9155fd" }}
            >Rk</Avatar>
          </Box>
        </Grid>
        <Grid item xs={9} >
            <div className="space-y-2">
                <div>
                    <p className="font-semibold text-lg mb-0">Ram</p>
                    <p className="opacity-70 mb-0">February 7, 2025</p>
                </div>
            </div>
            <Rating value={4.5} name="half-rating" readOnly precision={.5}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </Grid>
      </Grid>
    </div>
  );
};
