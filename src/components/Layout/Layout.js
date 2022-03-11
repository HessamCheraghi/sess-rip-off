import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//components
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Layout() {
  //TODO make different layouts based on props
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "25vh", marginBottom: "16px" }}>
          <Header />
        </Box>
        <Grid
          container
          spacing={2}
          direction={{ xs: "column-reverse", lg: "row" }} // necessary for mobile responsiveness
        >
          <Grid item xs={12} lg={3}>
            <Sidebar />
          </Grid>
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
        <Box sx={{ bgcolor: "#cfe8fc", height: "25vh", marginTop: "16px" }}>
          <Typography>فوتر</Typography>
        </Box>
      </Container>
    </>
  );
}
