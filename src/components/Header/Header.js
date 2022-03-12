import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";

export default function Header({ handleDrawerToggle }) {
  //TODO use AI to make svg logo
  return (
    <AppBar
      position="sticky"
      sx={{
        width: "100%",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          اتوماسیون آموزشی
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ marginLeft: "auto", display: { lg: "none" } }}
        >
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
