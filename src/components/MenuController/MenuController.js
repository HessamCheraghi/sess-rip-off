import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";
import Paper from "@mui/material/Paper";

export default function MenuController({
  handleDrawerToggle,
  mobileOpen,
  theme,
}) {
  const isDesktopViewPort = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      {isDesktopViewPort ? (
        <Grid item xs={12} lg={3}>
          <Paper elevation={4}>
            <Sidebar />
          </Paper>
        </Grid>
      ) : (
        <MobileMenu
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      )}
    </>
  );
}
