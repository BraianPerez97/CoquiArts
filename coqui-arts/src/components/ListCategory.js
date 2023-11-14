//This component is the section 'How Does It Works' (HDIW) of the app in home

//Dependencies
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import ListSubheader from "@mui/material/ListSubheader";
//import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function ListCategory({ currentCategory, users }) {
  
  // Categories list options
  const [categories, setCategories] = useState([
    {
      name: "Photography",
      open: currentCategory === "Photography",
    },
    {
      name: "Graphic Design & Illustrations",
      open: currentCategory === "Graphic Design & Illustrations",
    },
    {
      name: "Music & Jingles",
      open: currentCategory === "Music & Jingles",
    },
    {
      name: "Bakedgoods",
      open: currentCategory === "Bakedgoods",
    },
    {
      name: "Mural & Graffiti",
      open: currentCategory === "Mural & Graffiti",
    },
    {
      name: "Strategy & Management for Social Media",
      open: currentCategory === "Strategy & Management for Social Media",
    },
    {
      name: "Events Services",
      open: currentCategory === "Event Services",
    },
    {
      name: "Other",
      open: currentCategory === "Other",
    },
  ]);
  const [open, setOpen] = useState(false);

  // Track selected category index
  const [selected, setSelected] = useState();

  const handleMenuClick = () => {
    setOpen(!open);
  };

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
      </ListItem>  
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
