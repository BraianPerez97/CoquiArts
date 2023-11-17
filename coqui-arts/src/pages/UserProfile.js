// This component is the user carousel already filtered by category selected
//Dependencies
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//Components
import ListCategory from "../components/ListCategory";
//Materialize
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Fingerprint from "@mui/icons-material/Fingerprint";
import MoreVertIcon from "@mui/icons-material/MoreVert";
//to be deleted
import tester from "../assets/tester.jpg";

export default function UserProfile({ Users }) {
  //login status status
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //conditional menu options status
  const [editing, setEditing] = useState(false);
  const [users, setUsers] = useState([]);

  //card expansion status
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect((index) => {
    //Bring user selected
    axios
      .get(`http://localhost:5001/api/user`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="margin"></div>
      <ListCategory></ListCategory>
      <Card style={{ maxWidth: 345 }} id="users" className="carousel-container">
        {users.map((user) => (
          <div
            className="carousel-item"
            id="carousel"
            user={user}
            key={user.cat_id}
          >
            <CardHeader>
              avatar=
              {
                <Avatar
                  style={{ backgroundColor: red[500] }}
                  aria-label="recipe"
                >
                  {user.first_name[0]}
                </Avatar>
              }
              {/* Only show edit button if user logged in */}
              {user.isLoggedIn && (
                <IconButton
                  color="secondary"
                  onClick={() => setEditing(!editing)}
                >
                  <Fingerprint />
                </IconButton>
              )}
              {/* Show edit menu if editing state is true */}
              {editing && (
                <div className="edit-menu">
                  <Button variant="contained" endIcon={<EditIcon />}>
                    Edit
                  </Button>
                  <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardMedia
              component="img"
              height="194"
              image={tester}
              alt="user image"
            />
            <Typography
              variant="body2"
              color="text.primary"
              fontSize="2em"
              paddingTop="20px"
            >
              {user.first_name + " " + user.last_name}
            </Typography>
            <CardContent>
              <Typography> list of user.skills</Typography>
            </CardContent>

            <CardActions disableSpacing>
              <div id="button-4" className="button">
                <div id="underline"></div>
                <a href={"mailto:" + user.email} key={user.email}>
                  Contact me
                  <img alt="" id="arrow-hover" src={SendIcon} />
                </a>
              </div>

              <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography> {user.email}</Typography>
                <Typography>user.phone</Typography>
              </CardContent>

              <CardContent>
                About me and my services
                <Typography paragraph>
                  {user.description} + user description
                </Typography>
                <CardContent>
                  {" "}
                  user tops 3 woks photo
                  <img alt="" src={user.works}></img>
                </CardContent>
                <Typography>
                  social media icons of user active social medias
                </Typography>
              </CardContent>
            </Collapse>
          </div>
        ))}
      </Card>
    </div>
  );
}
