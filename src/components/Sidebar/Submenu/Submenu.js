import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

// menuIcon renderer
const Icon = ({ type = HourglassEmptyRoundedIcon }) => {
  const Tagname = type;
  return <Tagname />;
};

export default function Submenu({ menu, menuIcon, submenus = [] }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((previousState) => !previousState);
  };

  return (
    <>
      <ListItemButton
        onClick={() => {
          handleClick(menu);
        }}
      >
        <ListItemIcon>
          <Icon type={menuIcon} />
        </ListItemIcon>
        <ListItemText primary={menu} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {submenus.map((sub) => (
            <ListItemButton sx={{ pl: 2 }} key={sub}>
              <ListItemText primary={sub} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}
