import React, {useState} from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

export default function NestedList() {
  const [open, setOpen] = useState(true);

  const [currentCategory, setCurrentCategory] = useState("Category");
  
  const [categories] = useState ([
    {
      name: "Fotografia",
    },
    {
      name: "Dise~o Grafico e Ilustracion",
    },
    {
      name: "Musica y Pistas",
    },
    {
      name: "Reposteria",
    },
    {
      name: "Murales y Graffiti",
    },
    {
      name: "Estrategia y Manejo de Redes Sociales",
    },
    {
      name: "Servicios de Eventos",
    },
    {
      name: "Otro",
    },
  ]);

  const handleClick = (name) => {
    setOpen(!open);
    console.log(name);
  };
  

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Quieres buscar en otra categoria?
        </ListSubheader>
      }
    >
      
 
      <ListItemButton onClick={() => handleClick(categories.name)}>
        <ListItemText primary="Categorias" />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding >
          {categories.map(category => {
           return (
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={category.name} />
          </ListItemButton> 
          )})}
        </List>
      </Collapse>
    </List>
  );
};
