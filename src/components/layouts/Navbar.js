import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { fade, makeStyles } from "@material-ui/core/styles";
import AuthHelperMethods from "../../helpers/AuthHelper";
import {
  getMoviesBySearch,
  getAllMovies,
  setSelectedCategory,
  setSelectedRating
} from "../../redux/actions/movies";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: 0,
    marginLeft: theme.spacing(3),
    width: "70%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(9),
      width: "70%"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },

  link: {
    marginRight: "15px",
    marginTop: "10px",
    border: "1px solid #fff",
    height: "30px",
    color: "#fff",
    textTransform: "uppercase",
    lineHeight: "14px",
    borderRadius: "5px",
    fontSize: "15px",
    fontWeight: "normal",
    padding: theme.spacing(1),
    "&:hover": {
      color: "#fff",
      textDecoration: "none"
    }
  },
  menuLink: {
    backgroundColor: "none",
    color: "#000",
    "&:hover": {
      color: "#000",
      backgroundColor: "none",
      textDecoration: "none"
    }
  },
  menuLinkBrand: {
    backgroundColor: "none",
    color: "#fff",
    "&:hover": {
      color: "#fff",
      backgroundColor: "none",
      textDecoration: "none"
    },
    cursor: "pointer"
  }
}));

function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const auth = new AuthHelperMethods();

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSearch = event => {
    if (event.keyCode === 13) {
      if (event.target.value) {
        props.getMoviesBySearch({ query: event.target.value });
        event.target.value = "";
      } else {
        props.getMoviesBySearch();
      }
    }
  };

  const redirectToHome = () => {
    props.setSelectedCategory({});
    props.setSelectedRating(null);
    props.getAllMovies();
    return <Redirect to="/" />;
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        {auth.loggedIn() && (
          <Link to={`/admin/movies`} className={classes.menuLink}>
            Your Movies
          </Link>
        )}
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        {auth.loggedIn() && (
          <Link to={`/movies/new`} className={classes.menuLink}>
            Create Movie
          </Link>
        )}
      </MenuItem>

      <MenuItem onClick={() => auth.logout()}>Signout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {auth.loggedIn() && (
        <div>
          <MenuItem onClick={handleMenuClose}>
            <Link to={`/admin/movies`} className={classes.menuLink}>
              Your Movies
            </Link>
          </MenuItem>

          <MenuItem onClick={handleMenuClose}>
            <Link to={`/movies/new`} className={classes.menuLink}>
              Create Movie
            </Link>
          </MenuItem>

          <MenuItem onClick={handleProfileMenuOpen}>
            <p onClick={() => auth.logout()}>Signout</p>
          </MenuItem>
        </div>
      )}

      {!auth.loggedIn() && (
        <MenuItem>
          <Link to="/signin">Sign in</Link>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div
            className={classes.menuLinkBrand}
            role="button"
            onClick={redirectToHome}
          >
            <Typography className={classes.title} variant="h6" noWrap>
              FMovie
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              onKeyDown={event => {
                handleSearch(event);
              }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {auth.loggedIn() && (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className="mr-5"
              >
                <AccountCircle />
              </IconButton>
            )}
            {!auth.loggedIn() && (
              <Link to="/signin" className={classes.link}>
                Sign in
              </Link>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getMoviesBySearch: data => dispatch(getMoviesBySearch(data)),
    getAllMovies: data => dispatch(getAllMovies(data)),
    setSelectedCategory: data => dispatch(setSelectedCategory(data)),
    setSelectedRating: data => dispatch(setSelectedRating(data))
  };
}

export default connect(null, mapDispatchToProps)(NavBar);
