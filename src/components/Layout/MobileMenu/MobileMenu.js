import Sidebar from "../../Sidebar";
import Drawer from "@mui/material/Drawer";

export default function MobileMenu({ mobileOpen, handleDrawerToggle }) {
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", lg: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 240,
        },
      }}
    >
      <Sidebar />
    </Drawer>
  );
}
