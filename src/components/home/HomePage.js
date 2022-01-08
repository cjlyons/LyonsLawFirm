import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

/*
Pass all the CSS you need in your app as an object to makeStyles 
Store it inside the variable useStyles
"card" is for styling the Card, "media" is for styling the CardMedia
*/
const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
  },
});

export default function HomePage() {
  // Make the styles available in this function
  const classes = useStyles();
  return (
    <Grid className={classes.grid} container spacing={0}>
      <Card className={classes.card} sx={{ display: "flex" }}>
        <CardContent>
          <Typography variant="h5">Welcome to Lyons Law Firm</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1">
            Lyons Law Firm is a ??? located in Waterloo, IA.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
