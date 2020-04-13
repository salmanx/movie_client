import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MoviesConsumer } from "../../context";
import axios from "axios";
import { apiUrl } from "../../config";
import { withStyles } from "@material-ui/core/styles";

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
      selectedCategory: null,
      categories: []
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
    this.setState({ selectedCategory: index }, () =>
      console.log(this.state.selectedCategory)
    );
  }

  handleRatingFilterClick(event) {
    // setAnchorEl(event.currentTarget);
    this.setState({ anchorEl: event.currentTarget });
  }

  handleRatingFilterClose(index) {
    this.setState({ anchorEl: null });
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
      <MoviesConsumer>
        {data => (
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
                  Category
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
                      data.filterMoviesByCategory(null);
                    }}
                  >
                    All
                  </MenuItem>
                  {this.state.categories.map((cat, index) => (
                    <MenuItem
                      onClick={() => {
                        this.handleCategoryMenuItemClick(index + 1);
                        data.filterMoviesByCategory(cat);
                      }}
                      key={cat.id}
                      value={cat.id}
                      name="category"
                      selected={cat.id === this.state.selectedCategory}
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
                <MenuItem onClick={this.handleRatingFilterClose}>
                  Profile1
                </MenuItem>
                <MenuItem onClick={this.handleRatingFilterClose}>
                  My account1
                </MenuItem>
                <MenuItem onClick={this.handleRatingFilterClose}>
                  Logout1
                </MenuItem>
                <MenuItem onClick={this.handleRatingFilterClose}>
                  Profile1
                </MenuItem>
                <MenuItem onClick={this.handleRatingFilterClose}>
                  My account1
                </MenuItem>
                <MenuItem onClick={this.handleRatingFilterClose}>
                  Logout1
                </MenuItem>
              </Menu>
            </div>
          </div>
        )}
      </MoviesConsumer>
    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Filter);
