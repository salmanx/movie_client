import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { getAllMovies } from "../../redux/actions/movies";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

function Moviepaginator(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    props.getAllMovies({ page: value, category: props.movies.selectedCategory.id })
  };
  return (
    <div className={classes.root}>
      <Pagination count={props.total_pages} color="primary" onChange={handleChange} />
    </div>
  );
}


function mapStateToProps(state) {
  return {
    movies: state.movieReducer
  };
}


function mapDispatchToProps(dispatch) {
  return {
    getAllMovies: data => dispatch(getAllMovies(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Moviepaginator);
