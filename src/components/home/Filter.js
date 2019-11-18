import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { apiUrl } from "../../config";

const useStyles = makeStyles(theme => ({
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
}));

export default function Filter() {
  const classes = useStyles();

  const [anchorCatEl, setAnchorCatEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [categories, setCategories] = React.useState({ categories: [] });

  React.useEffect(() => {
    async function fetchCategories() {
      const data = await axios("http://localhost:3000/categories");
      setCategories(data);
    }
    fetchCategories();
  }, []);

  const handleCategoryClick = event => {
    setAnchorCatEl(event.currentTarget);
  };

  const handleCategoryClose = () => {
    setAnchorCatEl(null);
  };

  const handleRatingFilterClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleRatingFilterClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <div className={classes.filter}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          color="primary"
          className="classes.btn"
          onClick={handleCategoryClick}
        >
          Category
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorCatEl}
          keepMounted
          open={Boolean(anchorCatEl)}
          onClose={handleCategoryClose}
        >
          {categories.data &&
            categories.data.map(cat => (
              <MenuItem onClick={handleCategoryClose} key={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
        </Menu>
      </div>

      <div className={classes.filter}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          color="primary"
          className="classes.btn"
          onClick={handleRatingFilterClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleRatingFilterClose}
        >
          <MenuItem onClick={handleRatingFilterClose}>Profile1</MenuItem>
          <MenuItem onClick={handleRatingFilterClose}>My account1</MenuItem>
          <MenuItem onClick={handleRatingFilterClose}>Logout1</MenuItem>
          <MenuItem onClick={handleRatingFilterClose}>Profile1</MenuItem>
          <MenuItem onClick={handleRatingFilterClose}>My account1</MenuItem>
          <MenuItem onClick={handleRatingFilterClose}>Logout1</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
