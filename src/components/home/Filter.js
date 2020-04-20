import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import Rater from "react-rater";
import { apiUrl } from "../../config";
import { withStyles } from "@material-ui/core/styles";
import {
  getAllMovies,
  setSelectedCategory,
  setSelectedRating
} from "../../redux/actions/movies";

const useStyles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "#ddd",
    padding: "20px",
    justifyContent: "center",
    marginBottom: "30px",
    paddingBottom: "30px",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  btn: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
});

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorCatEl: null,
      anchorEl: null,
      categories: [],
      selectedCategory: {},
      setSelectedRating: null
    };

    this.handleCategoryMenuClick = this.handleCategoryMenuClick.bind(this);
    this.handleCategoryMenuClose = this.handleCategoryMenuClose.bind(this);
    this.handleCategoryMenuItemClick = this.handleCategoryMenuItemClick.bind(
      this
    );
    this.handleRatingFilterClick = this.handleRatingFilterClick.bind(this);
    this.handleRatingFilterClose = this.handleRatingFilterClose.bind(this);
  }

  handleCategoryMenuClick(event) {
    this.setState({ anchorCatEl: event.currentTarget });
  }

  handleCategoryMenuClose() {
    this.setState({ anchorCatEl: null });
  }

  handleCategoryMenuItemClick() {
    this.setState({ anchorCatEl: null });
  }

  handleRatingFilterClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleRatingFilterClose(index) {
    this.setState({ anchorEl: null });
  }

  filterMoviesByCategory(category) {
    if (category) {
      this.props.getAllMovies({
        category: category.id,
        rating: this.props.movies.setSelectedRating
      });
      this.setState({ selectedCategory: category });
      this.props.setSelectedCategory(category);
    } else {
      this.props.getAllMovies({
        rating: this.props.movies.setSelectedRating
      });
      this.setState({ selectedCategory: {} });
      this.props.setSelectedCategory({});
    }
  }

  filterMoviesByRating(rating) {
    if (rating) {
      this.props.getAllMovies({
        rating: rating,
        category: this.props.movies.selectedCategory.id
      });
      this.setState({ setSelectedRating: rating });
      this.props.setSelectedRating(rating);
    } else {
      this.props.getAllMovies({
        category: this.props.movies.selectedCategory.id
      });
      this.setState({ setSelectedRating: null });
      this.props.setSelectedRating(null);
    }
  }

  componentDidMount() {
    axios
      .get(`${apiUrl}/categories`)
      .then(res => {
        this.setState({
          categories: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.state.categories && (
          <div className={classes.filter}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              color="primary"
              className="classes.btn"
              onClick={this.handleCategoryMenuClick}
            >
              {Object.keys(this.props.movies.selectedCategory).length
                ? this.props.movies.selectedCategory.name
                : "Category"}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorCatEl}
              keepMounted
              open={Boolean(this.state.anchorCatEl)}
              onClose={this.handleCategoryMenuClose}
            >
              <MenuItem
                onClick={e => {
                  this.handleCategoryMenuClose();
                  this.filterMoviesByCategory(null);
                }}
              >
                All
              </MenuItem>
              {this.state.categories.map((cat, index) => (
                <MenuItem
                  onClick={() => {
                    this.handleCategoryMenuItemClick();
                    this.filterMoviesByCategory(cat);
                  }}
                  key={cat.id}
                  value={cat.id}
                  name="category"
                >
                  {cat.name}
                </MenuItem>
              ))}
            </Menu>
          </div>
        )}

        <div className={classes.filter}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            color="primary"
            className="classes.btn"
            onClick={this.handleRatingFilterClick}
          >
            {this.props.movies.setSelectedRating ? (
              <Rater
                total={5}
                rating={this.props.movies.setSelectedRating}
                interactive={false}
              />
            ) : (
              "Rating"
            )}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleRatingFilterClose}
          >
            <MenuItem
              onClick={() => {
                this.handleRatingFilterClose();
                this.filterMoviesByRating(null);
              }}
            >
              All
            </MenuItem>

            <MenuItem
              onClick={() => {
                this.handleRatingFilterClose();
                this.filterMoviesByRating(5);
              }}
            >
              <Rater total={5} rating={5} interactive={false} />
            </MenuItem>
            <MenuItem
              onClick={() => {
                this.handleRatingFilterClose();
                this.filterMoviesByRating(4);
              }}
            >
              <Rater total={5} rating={4} interactive={false} />
            </MenuItem>
            <MenuItem
              onClick={() => {
                this.handleRatingFilterClose();
                this.filterMoviesByRating(3);
              }}
            >
              <Rater total={5} rating={3} interactive={false} />
            </MenuItem>
            <MenuItem
              onClick={() => {
                this.handleRatingFilterClose();
                this.filterMoviesByRating(2);
              }}
            >
              <Rater total={5} rating={2} interactive={false} />
            </MenuItem>
            <MenuItem
              onClick={() => {
                this.handleRatingFilterClose();
                this.filterMoviesByRating(1);
              }}
            >
              <Rater total={5} rating={1} interactive={false} />
            </MenuItem>
          </Menu>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    movies: state.movieReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllMovies: data => dispatch(getAllMovies(data)),
    setSelectedCategory: data => dispatch(setSelectedCategory(data)),
    setSelectedRating: data => dispatch(setSelectedRating(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(Filter));
