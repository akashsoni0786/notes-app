import * as React from "react";
import "./App.css";
import { v4 as uid } from "uuid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { contextname } from "./Context";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Navbar from "./Navbar";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { SentimentVerySatisfiedOutlined } from "@mui/icons-material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  backgroundColor: "white",
  transform: "translate(-50%, -50%)",
  borderRadius: "10px",
  border: "2px solid white",
  p: 4,
};
function App() {
  const contxt = React.useContext(contextname);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [editid, setEditId] = React.useState("");
  const [openadd, setOpenadd] = React.useState(false);
  const [uptitle, setUpTitle] = React.useState("");
  const [updesc, setUpDesc] = React.useState("");
  const handleOpenadd = () => setOpenadd(true);
  const handleCloseadd = () => setOpenadd(false);
  const [openread, setOpenread] = React.useState(false);
  const [openedit, setOpenedit] = React.useState(false);
  const handleOpenedit = () => {
    setOpenedit(true);
  };
  const handleCloseedit = () => setOpenedit(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setEditId(index);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const addnote = (e) => {
    e.preventDefault();
    if (title === "" || desc === "") {
      alert("All fields are mendetory");
    } else {
      let noterow = {
        id: uid(),
        title: title,
        description: desc,
        date:
          new Date().getDate() +
          "-" +
          new Date().getMonth() +
          "-" +
          new Date().getFullYear(),
      };
      contxt.setRef([...contxt.allnotes, noterow]);
      contxt.setNotes([...contxt.allnotes, noterow]);
      setTitle("");
      setDesc("");
      setEditId("");
      handleCloseadd();
    }
  };
  const editnote = (e) => {
    e.preventDefault();

    if (uptitle === "" || updesc === "") {
      alert("All fields are mendetory");
    } else {
      contxt.ref.map((i, index) => {
        if (index === editid) {
          var temp = contxt.ref;
          temp[index].title = uptitle;
          temp[index].description = updesc;
          contxt.setRef([...temp]);
          contxt.setNotes([...temp]);
          setUpTitle("");
          setUpDesc("");
          handleCloseedit();
        }
      });
    }
  };

  const deletenote = () => {
    if (window.confirm("Do you really want to delete?")) {
      contxt.ref.map((i, index) => {
        if (index === editid) {
          var temp = contxt.ref;
          temp.splice(index, 1);
          contxt.setRef([...temp]);
          contxt.setNotes([...temp]);
          setTitle("");
          setDesc("");
          handleCloseedit();
        }
      });
    }
  };

  const editfunc = () => {
    contxt.ref.map((j, ind) => {
      if (ind === editid) {
        setUpTitle(contxt.ref[ind].title);
        setUpDesc(contxt.ref[ind].description);
      }
    });
  };


 

  const handleClickread = () => {
    setOpenread(true);
    // setReadid();
  };
  const handleCloseread = () => {
    setOpenread(false);
  };


  return (
    <div>
      <Navbar />
      <div>
      <BootstrapDialog
        onClose={handleCloseread}
        aria-labelledby="customized-dialog-title"
        open={openread}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseread}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleCloseread}>
            Save changes
          </Button> */}
        </DialogActions>
      </BootstrapDialog>
        <Modal
          open={openedit}
          onClose={handleCloseedit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="content">
              <header>
                <p>Edit note</p>
                <i className="uil uil-times" onClick={handleCloseedit}></i>
              </header>
              <form
                action=""
                onSubmit={(e) => {
                  editnote(e);
                }}
              >
                <div className="row title">
                  <label>Title</label>
                  <input
                    value={uptitle}
                    onChange={(e) => {
                      setUpTitle(e.target.value);
                    }}
                    type="text"
                  />
                </div>

                <div className="row description">
                  <label>Description</label>
                  <textarea
                    value={updesc}
                    onChange={(e) => {
                      setUpDesc(e.target.value);
                    }}
                  ></textarea>
                </div>
                <button type="submit">Edit note</button>
              </form>
            </div>
          </Box>
        </Modal>

        <Modal
          open={openadd}
          onClose={handleCloseadd}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="content">
              <header>
                <p>Add new note</p>
                <i className="uil uil-times" onClick={handleCloseadd}></i>
              </header>
              <form
                action=""
                onSubmit={(e) => {
                  addnote(e);
                }}
              >
                <div className="row title">
                  <label>Title</label>
                  <input
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    type="text"
                  />
                </div>

                <div className="row description">
                  <label>Description</label>
                  <textarea
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                  ></textarea>
                </div>
                <button type="submit">Add note</button>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="allnotes">
        <div className="wrapper">
          <li className="add-box" onClick={handleOpenadd}>
            <div className="icon">
              <i className="uil uil-plus"></i>
            </div>
            <p>Add new note</p>
          </li>
          {contxt.allnotes.length !== 0 ? (
            <>
              {contxt.ref.map((i, index) => {
                return (
                  <li className="note" key={i.id} >
                    <div className="details">
                      <div className="titles">
                        {" "}
                        <p>{index + 1}.&nbsp;</p>
                        <p>{i.title}</p>
                      </div>
                      <span>{i.description}</span>
                    </div>
                    <div className="bottom-content">
                    <span onClick={handleClickread} className="read">Read</span>
                      <span>{i.date}</span>
                      <div className="settings">
                        <IconButton
                          onClick={(event) => handleClick(event, index)}
                        >
                          <MoreHorizIcon />
                        </IconButton>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              handleOpenedit();
                              editfunc();
                            }}
                          >
                            Edit
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              deletenote();
                              handleClose();
                            }}
                          >
                            Delete
                          </MenuItem>
                        </Menu>
                      </div>
                    </div>
                  </li>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
