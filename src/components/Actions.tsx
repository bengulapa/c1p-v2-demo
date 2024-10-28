import {
  Button,
  Chip,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface IProps {
  loan: any;
}

const Actions = ({ loan }: IProps) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <Typography gutterBottom>Actions</Typography>

        <Chip
          label={loan.creditStatus}
          size="small"
          variant="outlined"
          color="primary"
        />
      </div>

      <List dense>
        <ListItem
          disablePadding
          secondaryAction={
            <Button variant="outlined" size="small" color="secondary">
              Update
            </Button>
          }
        >
          <ListItemText primary="Status" secondary="Not set" />
        </ListItem>
        <ListItem
          disablePadding
          secondaryAction={
            <Button variant="outlined" size="small" color="secondary">
              Set
            </Button>
          }
        >
          <ListItemText primary="Conditions" />
        </ListItem>
        <ListItem
          disablePadding
          secondaryAction={
            <Link to={`/${loan.creditArrangementId}/decision`}>
              <Button variant="outlined" size="small" color="secondary">
                Update
              </Button>
            </Link>
          }
        >
          <ListItemText primary="ANZSIC Codes" secondary="Not set" />
        </ListItem>
        {loan.creditArrangementId === "CA02" && (
          <>
            <ListItem
              disablePadding
              secondaryAction={
                <Button variant="outlined" size="small" color="error">
                  Assess Risk
                </Button>
              }
            >
              <ListItemText
                primary="First Guarantor"
                secondary="Found on Watchlist"
              />
            </ListItem>
            <ListItem
              disablePadding
              secondaryAction={
                <Button variant="outlined" size="small" color="error">
                  Rerun
                </Button>
              }
            >
              <ListItemText
                primary="First Guarantor"
                secondary="ID Matrix unknown"
              />
            </ListItem>
            <ListItem
              disablePadding
              secondaryAction={
                <Button variant="outlined" size="small" color="error">
                  Request
                </Button>
              }
            >
              <ListItemText
                primary="Identification Documents"
                secondary="Missing Passport"
              />
            </ListItem>
            <ListItem
              disablePadding
              secondaryAction={
                <Button variant="outlined" size="small" color="error">
                  Rerun
                </Button>
              }
            >
              <ListItemText
                primary="Gula Patisserie"
                secondary="Missing Equifax Report"
              />
            </ListItem>
          </>
        )}
      </List>
    </>
  );
};

export default Actions;
