import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import "./menu.css";

function SimpleDialog(props) {
  const { onClose, selectedValue, open, DialogColor } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <div className={"MenuDialog " + DialogColor}>
        <h3>MENU</h3>
        <hr />
        <List sx={{ pt: 0 }}>
          <ListItem>
            <button >
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </button>
          </ListItem>
          <ListItem>
            <button>
              <Link to="/mentor" style={{ textDecoration: "none" }}>
                Mentor
              </Link>
            </button>
          </ListItem>
          <ListItem>
            <button>
              <a
                href="https://teamcuc.herokuapp.com/"
                style={{ textDecoration: "none" }}
              >
                Teamcuc
              </a>
            </button>
          </ListItem>
          <ListItem>
            <button className="Become-mentor">
              <Link to="/mentor/register" style={{ textDecoration: "none" }}>
                Become mentor
              </Link>
            </button>
          </ListItem>
        </List>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Menu(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="menuDiv">
      <Button
        variant="contained"
        onClick={handleClickOpen}
        color={props.buttonColor}
      >
        <img
          src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
          alt="icon"
        />
        Menu
      </Button>
      <SimpleDialog
        className={SimpleDialog}
        open={open}
        onClose={handleClose}
        DialogColor={props.DialogColor}
      />
    </div>
  );
}
