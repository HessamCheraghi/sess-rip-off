import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../../components/Header";
import SemesterTable from "../../components/SemesterTable";
import ProfileCard from "../../components/ProfileCard";
import MenuController from "../../components/MenuController";
import NewsTab from "../../components/NewsTab";
export default function Layout({ theme }) {
  //TODO make different layouts based on props

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((pre) => !pre);
  };

  return (
    <>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          direction={{ xs: "column-reverse", lg: "row" }}
          sx={{ mt: 1 }}
        >
          <MenuController
            theme={theme}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Grid item xs={12} lg={6}>
            <Box width={{ xs: "calc(100vw - 2rem)", sm: "100%" }}>
              <SemesterTable />
              <NewsTab />
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <ProfileCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
