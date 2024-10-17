import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";

const AuditLogs = () => {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <React.Fragment>
                <strong className="mr-2">API User Australia</strong>
                <small>5/02/2024, 8:45 AM</small>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="div"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  Deal was edited by Ben Gulapa.
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <React.Fragment>
                <strong className="mr-2">API User Australia</strong>
                <small>5/02/2024, 9:45 AM</small>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="div"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  Deal was edited by Ben Gulapa.
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <React.Fragment>
                <strong className="mr-2">API User Australia</strong>
                <small>5/02/2024, 1:45 AM</small>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="div"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  Ready for settlement is triggered by Filip Tarn.
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider component="li" />
      </List>
    </>
  );
};

export default AuditLogs;
