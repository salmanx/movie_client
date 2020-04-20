import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Axios from "axios";
import AuthHelperMethods from "../../helpers/AuthHelper";
import withAuth from "../withAuth";
import { withStyles } from "@material-ui/core/styles";
import { apiUrl } from "../../config";

const useStyles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(0, 0, 2, 0),
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  error: {
    width: "100%",
    margin: theme.spacing(2, 0, -3, 0),
  }
});

class CreateMovie extends React.Component {
  auth = new AuthHelperMethods();

  constructor(props) {
    super(props);
    this.handleCreateMovie = this.handleCreateMovie.bind(this);

    this.state = {
      title: null,
      text: null,
      category: null,
      categories: [],
      user: {}
    };
  }

  componentDidMount() {
    this.fetchAllCategories();
    if (this.props.history.location.state) {
      const id = this.props.history.location.state.id;
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      // Setting Authorization header
      if (this.auth.loggedIn()) {
        headers["Authorization"] = this.auth.gettoken();
      }

      Axios.get(`${apiUrl}/movies/${id}`, { headers })
        .then(res => {
          this.setState({
            title: res.data.title,
            text: res.data.text,
            category: res.data.category.id
          });
        })
        .catch(err => console.log(err));
    }
  }

  fetchAllCategories = () => {
    Axios.get(`${apiUrl}/categories`)
      .then(res => {
        this.setState({
          categories: res.data
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      category: event.target.value
    });
  };

  handleCreateMovie(e) {
    e.preventDefault();

    if (!this.state.category) {
      this.setState({ error: "Please select a category" });
    } else if (!e.target.elements.title.value) {
      this.setState({ error: "Please provide movie title" });
    } else if (!e.target.elements.text.value) {
      this.setState({ error: "Please provide movie details" });
    } else {
      const title = e.target.elements.title.value;
      const text = e.target.elements.text.value;

      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      // Setting Authorization header
      if (this.auth.loggedIn()) {
        headers["Authorization"] = this.auth.gettoken();
      }

      Axios.post(
        `${apiUrl}/movies`,
        {
          movie: {
            category_id: this.state.category,
            title,
            text
          }
        },
        { headers }
      )
        .then(response => {
          this.props.history.push(`/admin/movies`);
        })
        .catch(error => {
          console.log(error);
          // this.setState(() => {
          //   return {
          //     error: error.response.data.errors
          //   };
          // });
        });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Create a movie here!
          </Typography>

          {this.state.error && (
          <div className={classes.error}>  
            <p className="alert alert-danger">{this.state.error}</p>
            </div>
          )}
          <form
            className={classes.form}
            noValidate
            onSubmit={this.handleCreateMovie}
          >
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Select Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.category || ""}
                onChange={this.handleChange}
              >
                {this.state.categories &&
                  this.state.categories.map(cat => (
                    <MenuItem value={cat.id} key={cat.id}>{cat.name}</MenuItem>
                  ))}
              </Select>
            </FormControl>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="title"
                  label="Movie Name"
                  value={this.state.title || ""}
                  onChange={e => this.setState({ title: e.target.value })}

                  // defaultValue={this.state.title || ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="text"
                  label="Movie Details"
                  autoComplete="lname"
                  value={this.state.text || ""}
                  onChange={e => this.setState({ text: e.target.value })}
                  // defaultValue={this.state.text || ""}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Create Movie
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

CreateMovie.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withAuth(withStyles(useStyles)(CreateMovie));
