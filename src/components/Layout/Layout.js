import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Layout({ theme }) {
  //TODO make different layouts based on props

  const isDesktopViewPort = useMediaQuery(theme.breakpoints.up("lg"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((pre) => !pre);
  };

  return (
    <>
      {/* FIX this naming! */}
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          direction={{ xs: "column-reverse", lg: "row" }} // necessary for mobile responsiveness
          sx={{ mt: 1 }}
        >
          {isDesktopViewPort ? (
            <Grid item xs={12} lg={3}>
              <Sidebar />
            </Grid>
          ) : (
            <MobileMenu
              handleDrawerToggle={handleDrawerToggle}
              mobileOpen={mobileOpen}
            />
          )}
          <Grid item xs={12} lg={6}>
            <Box sx={{ bgcolor: "#cfe8fc", height: "25vh" }}>
              <Typography>وسط</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box sx={{ bgcolor: "#cfe8fc", height: "25vh" }}>
              <Typography>پروفایل</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          component="footer"
          sx={{ bgcolor: "#cfe8fc", height: "25vh", marginTop: "16px" }}
        >
          <Typography>فوتر</Typography>
        </Box>
      </Container>
    </>
  );
}
