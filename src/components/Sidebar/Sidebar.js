import List from "@mui/material/List";
// import ListSubheader from "@mui/material/ListSubheader";

// list of links to display
import { rootNode } from "./sideBarList";
import Submenu from "./Submenu";

//fallback icon
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
const Icon = ({ type = HourglassEmptyRoundedIcon }) => {
  const Tagname = type;
  return <Tagname />;
};

export default function Sidebar() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     مثلا اینجا عنوان منو هست ولی من چیزی نذاشتم
      //   </ListSubheader>
      // }
    >
      {rootNode.map((node) => (
        <Submenu
          key={node.parentNode}
          menu={node.parentNode}
          menuIcon={<Icon type={node.icon} />}
          submenus={node.childNode}
        />
      ))}
    </List>
  );
}
