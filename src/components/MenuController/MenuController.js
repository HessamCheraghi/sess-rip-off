import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";

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
          <Sidebar />
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
