import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function NestedList() {
  const [open, setOpen] = useState(false);

  /* ======================
        LIST OPTIONS 
  ========================*/
  const [categories] = useState([
    {
      name: "Photography",
    },
    {
      name: "Graphic Design & Illustrations",
    },
    {
      name: "Music & Jingles",
    },
    {
      name: "Bakegoods",
    },
    {
      name: "Mural & Graffiti",
    },
    {
      name: "Strategy & Management for Social Media",
    },
    {
      name: "Events Services",
    },
    {
      name: "Other",
    },
  ]);

  const handleClick = (name) => {
    setOpen(!open);
    console.log(name);
  };

  return (
    <List
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
      <ListItemButton onClick={() => handleClick(categories.name)}>
        <ListItemText primary="--" />
        <ExpandMoreIcon></ExpandMoreIcon>
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map((category) => {
            return (
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={category.name} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}
