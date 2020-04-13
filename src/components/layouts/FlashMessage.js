import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.open) {
      return {
        open: props.open
      };
    }
    return null;
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState(prevState => {
      return {
        open: !prevState.open
      };
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Snackbar
          open={this.state.open}
          autoHideDuration={4000}
          onClose={this.handleClose}
        >
          {this.props.flashType === "requiredAuth" ? (
            <Alert onClose={this.handleClose} severity="warning">
              You have to signin first
            </Alert>
          ) : (
            <Alert onClose={this.handleClose} severity="success">
              You have successfully rated the movie!
            </Alert>
          )}
        </Snackbar>
      </div>
    );
  }
}

export default withStyles(useStyles)(FlashMessage);
