import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { createHashHistory } from "history";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Axios from "axios";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import { apiUrl } from "../../../config";
import AuthHelperMethods from "../../../helpers/AuthHelper";

const useStyles = theme => ({
  root: {
    maxWidth: 280,
    margin: "10px"
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
    backgroundColor: red[500],
    fontSize: "8px",
    wordBreak: "break-all",
    textAlign: "center"
  }
});
// const history = createHashHistory();

class Movie extends React.Component {
  auth = new AuthHelperMethods();

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const movie = this.props.movie;

    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {movie.category.name}
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
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.id} || {movie.rating} This impressive paella is a perfect
            party dish and a fun meal to cook together with your guests. Add 1
            cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Rater total={5} rating={movie.rating} interactive={false} />
        </CardActions>
      </Card>
    );
  }
}

Movie.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Movie);
