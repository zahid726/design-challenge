import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
export const Footer = () => {
  return (
    <footer style={{ display: "flex" }}>
      <Grid
        container
        spacing={3}
        rowSpacing={3}
        columnSpacing={3}
        padding="3% 13%"
      >
        <Grid item xs={12} md={3}>
          <Box>
            <Image
              width={50}
              height={50}
              alt="Hollowverse"
              src="/images/letter-logo.png"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              color: "rgba(0, 0, 0, 0.7)",
              padding: "4px",
              marginLeft: "-6px",
            }}
          >
            <InfoOutlinedIcon />
            <Typography> About</Typography>
          </Box>
          <Typography>
            Hollowverse is about the important people and their beliefs.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              color: "rgba(0, 0, 0, 0.7)",
              padding: "4px",
              marginLeft: "-6px",
            }}
          >
            <LocalPostOfficeOutlinedIcon />
            <Typography> Email us at</Typography>
          </Box>
          <Typography>Info@gmail.com</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              color: "rgba(0, 0, 0, 0.7)",
              padding: "4px",
              marginLeft: "-6px",
            }}
          >
            <CopyrightOutlinedIcon />
            <Typography> Copyrights</Typography>
          </Box>
          <Typography>We reserve none. Everything here is free</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};
