import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import PageTitle from "./PageTitle";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteIcon from "@mui/icons-material/Delete";

const Attachments = () => {
  return (
    <>
      <PageTitle title="Attachments" />

      <Card>
        <CardContent>
          <List dense>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AttachFileIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Sample file name - Passport"
                secondary={"Jan 1, 2023"}
              />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AttachFileIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Sample file name - Medicare"
                secondary={"Jan 1, 2023"}
              />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AttachFileIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Sample file name - Passport"
                secondary={"Jan 1, 2023"}
              />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AttachFileIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Sample file name - Passport"
                secondary={"Jan 1, 2023"}
              />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AttachFileIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Sample file name - Passport"
                secondary={"Jan 1, 2023"}
              />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AttachFileIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Sample file name - Passport"
                secondary={"Jan 1, 2023"}
              />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AttachFileIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Sample file name - Passport"
                secondary={"Jan 1, 2023"}
              />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AttachFileIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Sample file name - Passport"
                secondary={"Jan 1, 2023"}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default Attachments;
