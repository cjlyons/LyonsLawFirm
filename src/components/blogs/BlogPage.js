import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import BlogEntries from "./BlogEntries";

const useStyles = makeStyles({
  card: {
    maxWidth: 1200,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
  },
  media: {
    height: 133,
    width: 200,
  },
});

function createMarkup(html) {
  return { __html: html };
}

export default function BlogPage() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const classes = useStyles();
  let blogs = BlogEntries();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} key={blogs.items[page - 1].link}>
        <Pagination
          count={blogs.items.length}
          page={page}
          onChange={handleChange}
          variant="outlined"
          showFirstButton
          showLastButton
          sx={{ paddingBottom: 2 }}
        />
        <Card className={classes.card} sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            className={classes.media}
            image={blogs.items[page - 1].thumbnail}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ display: "flex" }}>
              <Typography color="primary" variant="h5">
                {blogs.items[page - 1].title}
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                <div
                  dangerouslySetInnerHTML={createMarkup(
                    blogs.items[page - 1].content
                  )}
                />
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
