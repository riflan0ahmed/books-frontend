import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Link, useLocation } from "react-router-dom";

const Links = () => {
  const location = useLocation();
  const router = location.pathname;

  return (
    <div>
      <div className="flex items-center justify-center w-full h-20 mb-3 bg-gray-50">
        <span>LOGO</span>
      </div>
      <List>
        <Link to={"/"}>
          <ListItem
            button
            style={{
              backgroundColor: `${router === "/" ? "red" : "transparent"}`,
            }}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to={"/books"}>
          <ListItem
            button
            style={{
              backgroundColor: `${router === "/books" ? "red" : "transparent"}`,
            }}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="List" />
          </ListItem>
        </Link>
        <Link to={"/books/archive"}>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Archive" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Links;
