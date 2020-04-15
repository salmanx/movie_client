import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { apiUrl } from "../../config";
import { withStyles } from "@material-ui/core/styles";
import { getAllMovies } from "../../redux/actions/movies";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#ddd",
    padding: "20px",
    justifyContent: "center",
    marginBottom: "30px",
    paddingBottom: "30px",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  btn: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
});

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorCatEl: null,
      anchorEl: null,
      categories: [],
      selectedCategory: {},
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

  handleCategoryMenuItemClick(index) {
    this.setState({ anchorCatEl: null });
  }

  handleRatingFilterClick(event) {
    // setAnchorEl(event.currentTarget);
    this.setState({ anchorEl: event.currentTarget });
  }

  handleRatingFilterClose(index) {
    this.setState({ anchorEl: null });
  }

  filterMoviesByCategory(category) {
    if (category) {
      this.props.getAllMovies({ category: category.id });
      this.setState({ selectedCategory: category });
    } else {
      this.props.getAllMovies();
      this.setState({ selectedCategory: {} });
    }
  }

  componentDidMount() {
    axios
      .get(`${apiUrl}/categories`)
      .then((res) => {
        this.setState({
          categories: res.data,
        });
      })
      .catch((err) => console.log(err));
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
              {Object.keys(this.state.selectedCategory).length
                ? this.state.selectedCategory.name
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
                onClick={(e) => {
                  this.handleCategoryMenuClose();
                  this.filterMoviesByCategory(null);
                }}
              >
                All
              </MenuItem>
              {this.state.categories.map((cat, index) => (
                <MenuItem
                  onClick={() => {
                    this.handleCategoryMenuItemClick(index + 1);
                    this.filterMoviesByCategory(cat);
                  }}
                  key={cat.id}
                  value={cat.id}
                  name="category"
                >
                  {cat.name} ({cat.total_movies})
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
            Open Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleRatingFilterClose}
          >
            <MenuItem onClick={this.handleRatingFilterClose}>Profile1</MenuItem>
            <MenuItem onClick={this.handleRatingFilterClose}>
              My account1
            </MenuItem>
            <MenuItem onClick={this.handleRatingFilterClose}>Logout1</MenuItem>
            <MenuItem onClick={this.handleRatingFilterClose}>Profile1</MenuItem>
            <MenuItem onClick={this.handleRatingFilterClose}>
              My account1
            </MenuItem>
            <MenuItem onClick={this.handleRatingFilterClose}>Logout1</MenuItem>
          </Menu>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    getAllMovies: (data) => dispatch(getAllMovies(data)),
  };
}

export default connect(null, mapDispatchToProps)(withStyles(useStyles)(Filter));
