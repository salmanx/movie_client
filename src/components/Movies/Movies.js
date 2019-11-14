import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Chip from "@material-ui/core/Chip";
import axios from "axios";
import { apiUrl } from "../../config";
const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#FAF7F2"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Movies() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState({ movies: [] });

  React.useEffect(() => {
    async function fetchMovies() {
      const result = await axios("http://localhost:3000/movies");
      setData(result);
    }
    fetchMovies();
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(data);

  return (
    <div className="container">
      <div className="row">
        {data.data &&
          data.data.map(movie => (
            <div className="col-3 mb-3" key={movie.id}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {movie.owner}
                    </Avatar>
                  }
                  title={movie.title}
                  subheader={movie.created_at}
                />
                <CardMedia
                  className={classes.media}
                  image="https://avatars1.githubusercontent.com/u/3165635?s=460&v=4"
                  title="Paella dish"
                />
                <CardActions disableSpacing>
                  <Box
                    component="fieldset"
                    mb={3}
                    fontSize={10}
                    borderColor="transparent"
                  >
                    <Chip
                      label={movie.category.name}
                      href="#chip"
                      clickable
                      color="primary"
                      size="small"
                      variant="outlined"
                    />
                    <br />
                    <br />
                    <Rating
                      name="simple-controlled"
                      value={4}
                      onChange={() => {
                        console.log("rated");
                      }}
                    />
                  </Box>
                </CardActions>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
