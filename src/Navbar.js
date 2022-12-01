import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { contextname } from "./Context";
import { Tooltip } from "@mui/material";
import {useNavigate} from "react-router-dom"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  color: "black",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  // color:"red",
  // backgroundColor:"red",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  border:"1px solid #FE07FE",
  borderRadius:"5px",
  backgroundColor: "transparent",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const contxt = React.useContext(contextname);
  const navigate = useNavigate()
  const searchfunc = (e) => {
    var show = [];
    contxt.allnotes.map((i) => {
      if (i.title.toLowerCase().includes(e)) {
        show = [...show, i];
      }
    });
    contxt.setRef(show);
  };
  const logout = ()=>{
    contxt.setLogin("");
    navigate("/")
    
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FF73E1",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/889/889648.png"
            style={{ width: "40px" }}
          />
          <Search>
            <SearchIconWrapper sx={{ color: "black" }}>
              <SearchIcon sx={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => {
                searchfunc(e.target.value);
              }}
              placeholder="Search title..…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Tooltip title="Logout">
            <img
            onClick={logout}
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png"
              style={{ width: "40px", cursor: "pointer" }}
            />
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
