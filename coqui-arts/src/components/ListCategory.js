//This component is the section 'How Does It Works' (HDIW) of the app in home
import axios from 'axios';
//Dependencies
import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import ListSubheader from "@mui/material/ListSubheader";
//import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function ListCategory({ currentCategory }) {
  
  // Categories list options
  const [categories, setCategories] = useState([
    {
      name: "Graphic Design & Illustrations",
      open: currentCategory === "Graphic Design & Illustrations",
      id: "1"
    },
    {
      name: "Photography",
      open: currentCategory === "Photography",
      id: "2"
    },
    {
      name: "Music & Jingles",
      open: currentCategory === "Music & Jingles",
      id: "3"
    },
    {
      name: "Baked goods",
      open: currentCategory === "Bakedgoods",
      id: "4"
    },
    {
      name: "Mural & Graffiti",
      open: currentCategory === "Mural & Graffiti",
      id: "5"
    },
    {
      name: "Strategy & Management for Social Media",
      open: currentCategory === "Strategy & Management for Social Media",
      id:"6"
    },
    {
      name: "Events Services",
      open: currentCategory === "Event Services",
      id:"7"
    },
    {
      name: "Other",
      open: currentCategory === "Other",
      id:"8"
    },
  ]);
  const [open, setOpen] = useState(false);

  // Track selected category index
  const [selected, setSelected] = useState();

  const handleMenuClick = () => {
    setOpen(!open);
  };

 const [userCat, setUsers] = useState([]);

  const handleToggle = (index) => {
    setSelected(index)
    setCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      newCategories[index].open = !newCategories[index].open;
      console.log(index);
      handleMenuClick(index);
      return newCategories;
    });
  };
  useEffect(() => {
    axios.get(`http://localhost:5001/api/user`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

// Filter users by category
const users = userCat.filter(user => user.cat_id === categories.id);

  return (
    <List
      /* Styling to overwrite global style from mui */
      sx={{
        left: "26%",
        width: "70%",
        maxWidth: 360,
        bgcolor: "background.transparent",
        border: "solid 3px var(--black)",
        borderRadius: "10px",

        "& .css-10hburv-MuiTypography-root": {
          fontFamily: "var(--primary)",
        },
        "& .css-qpfz6y-MuiList-root": {
          border: "solid 3px var(--black)",
        },
      }}
    >
      <ListItemButton onClick={handleMenuClick}>
        <ListItem primary={categories[selected]?.name || "--" } />
        <ExpandMoreIcon />
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map((category, index) => (
            <ListItemButton
             
              sx={{
                pl: 4,
                backgroundColor:
                  category.name === currentCategory
                    ? "rgba(0, 0, 0, 0.1)"
                    : "transparent",
              }}
            >
             <ListItem
        key={index}
        onClick={() => handleToggle(index)}
        selected={index === selected}
        primary={category.name}
      >
      </ListItem>  {users}
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
