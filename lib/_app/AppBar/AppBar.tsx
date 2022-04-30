import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import { Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { TextField } from "@mui/material";
export function AppBar() {
  const [seachClick, setSeachClick] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    // setAnchorEl(event.currentTarget);
  };
  const searchClicked = () => {
    setSeachClick(!seachClick);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          height: "30px",
        }}
      >
        {!seachClick ? (
          <Box>
            <Image
              src="/images/logo.svg"
              width={420}
              height={25}
              alt="Hollowverse"
              layout="fixed"
            />
            <Typography>Important people and facts</Typography>
          </Box>
        ) : (
          <OutlinedInput
            size="small"
            sx={{ width: "420px" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        )}
        <IconButton
          onClick={searchClicked}
          size="large"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {seachClick ? <CloseIcon /> : <SearchIcon />}
        </IconButton>
      </Box>
    </React.Fragment>
  );
}
