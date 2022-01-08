import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import ServiceList from "./ServiceList";

/*
Pass all the CSS you need in your app as an object to makeStyles 
Store it inside the variable useStyles
"card" is for styling the Card, "media" is for styling the CardMedia
*/
const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
  },
  media: {
    height: 133,
    width: 200,
  },
});

export default function ServicePage() {
  // Make the styles available in this function
  const classes = useStyles();
  let data = ServiceList();
  return (
    <Grid container spacing={3}>
      {data.map((service) => (
        <Grid item xs={12} sm={4} key={service.id}>
          <Card className={classes.card} sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              className={classes.media}
              image={service.img_url}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ display: "flex" }}>
                <Typography color="primary" variant="h5">
                  {service.name}
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  {service.description}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
