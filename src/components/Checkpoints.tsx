import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Checkpoints = () => {
  return (
    <>
      <Typography gutterBottom>Checkpoints</Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Typography variant="overline" className="list-label">
              Qualify Asset
            </Typography>
            <Chip label="PASS" color="success" className="ac-chip"></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <List dense disablePadding>
            <ListItem
              secondaryAction={<Chip label="No" color="success"></Chip>}
            >
              <ListItemText primary="Is industry restricted?" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="No" color="success"></Chip>}
            >
              <ListItemText primary="Is asset restricted?" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="Yes" color="success"></Chip>}
            >
              <ListItemText primary="Is asset backed?" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="Yes" color="success"></Chip>}
            >
              <ListItemText primary="Is asset age at EOT allowed?" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="Yes" color="success"></Chip>}
            >
              <ListItemText primary="Is the supplier accredited?" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Typography variant="overline" className="list-label">
              KYC & Guarantor Check
            </Typography>
            <Chip label="PASS" color="success"></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <List dense disablePadding>
            <ListItem
              secondaryAction={<Chip label="Yes" color="success"></Chip>}
            >
              <ListItemText primary="Is score above minimum?" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="Pass" color="success"></Chip>}
            >
              <ListItemText primary="KYC result" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="Pass" color="success"></Chip>}
            >
              <ListItemText primary="DVS pass" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="Pass" color="success"></Chip>}
            >
              <ListItemText primary="Fraud Check" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="Pass" color="success"></Chip>}
            >
              <ListItemText primary="Politically Exposed Person" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="Pass" color="success"></Chip>}
            >
              <ListItemText primary="Sanctions" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="Pass" color="success"></Chip>}
            >
              <ListItemText primary="Velocity" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Typography variant="overline" className="list-label">
              Applicant Check
            </Typography>
            <Chip label="PASS" color="success" className="ac-chip"></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <List dense disablePadding>
            <ListItem
              secondaryAction={<Chip label="Active" color="success"></Chip>}
            >
              <ListItemText primary="Is ABN Active?" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="32 months" color="success"></Chip>}
            >
              <ListItemText primary="Minimum required ABN (24 months)" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="1.2 years" color="success"></Chip>}
            >
              <ListItemText primary="Minimum GST registration (1 year)" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="650" color="success"></Chip>}
            >
              <ListItemText primary="Minimum borrower Veda score (500)" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Typography variant="overline" className="list-label">
              Arrangement Check
            </Typography>
            <Chip label="PASS" color="success" className="ac-chip"></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <List dense disablePadding>
            <ListItem
              secondaryAction={<Chip label="$25,411.02" color="success"></Chip>}
            >
              <ListItemText primary="Total obligor exposure" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="$5,411.02" color="success"></Chip>}
            >
              <ListItemText primary="Minimum required deposit rate (10%)" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Typography variant="overline" className="list-label">
              Biometrics Check
            </Typography>
            <Chip label="PASS" color="success" className="ac-chip"></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <List dense disablePadding>
            <ListItem
              secondaryAction={<Chip label="$25,411.02" color="success"></Chip>}
            >
              <ListItemText primary="Total obligor exposure" />
            </ListItem>
            <ListItem
              secondaryAction={<Chip label="$5,411.02" color="success"></Chip>}
            >
              <ListItemText primary="Minimum required deposit rate (10%)" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Checkpoints;
