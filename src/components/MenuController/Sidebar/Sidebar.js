import List from "@mui/material/List";
import Submenu from "./Submenu";

// list of links to display
import { rootNode } from "./sideBarList";

export default function Sidebar() {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {rootNode.map(({ parentNode, icon, childNode }) => (
        <Submenu
          key={parentNode}
          menu={parentNode}
          menuIcon={icon}
          submenus={childNode}
        />
      ))}
    </List>
  );
}
