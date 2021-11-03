import { Drawer as DrawerElement } from "@mui/material";
import Links from "./Links/Links";

const drawerWidth = 215;

const Drawer = () => {
  return (
    <DrawerElement
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
      open
    >
      <Links />
    </DrawerElement>
  );
};

export default Drawer;
