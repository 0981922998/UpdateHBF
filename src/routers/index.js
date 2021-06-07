import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import GroupIcon from '@material-ui/icons/Group';
import CategoryIcon from '@material-ui/icons/Category';
import PersonIcon from '@material-ui/icons/Person';

const routers = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Add request",
    path: "/add-request",
    icon: <AddIcon />,
  },
  {
    name: "List users",
    path: "/user",
    icon: <GroupIcon />,
  },
  {
    name: "Category",
    path: "/category",
    icon: <CategoryIcon />,
  },
  {
    name: "My Request",
    path: "/my-request",
    icon: <PersonIcon />,
  },
];

export default routers;
