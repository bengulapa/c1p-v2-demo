import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Chip,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

interface IProps {
  updateScore: (value: number) => void;
}

const assetChecklist = [
  "Is industry allowed?",
  "Is asset allowed?",
  "Is asset backed?",
  "Is asset age at EOT allowed?",
  "Is the supplier accredited?",
];

const guarantorChecklist = [
  "Is score above minimum?",
  "KYC result",
  "DVS pass",
  "Fraud Check",
  "Politically Exposed Person",
  "Sanctions",
  "Velocity",
];

const Checkpoints = ({ updateScore }: IProps) => {
  const [checked, setChecked] = React.useState([""]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      updateScore(20);
    } else {
      newChecked.splice(currentIndex, 1);
      updateScore(-20);
    }

    setChecked(newChecked);
  };

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
            {assetChecklist.map((v, i) => {
              const key = "a" + i;
              return (
                <ListItem
                  key={key}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(key)}
                      checked={checked.includes(key)}
                    />
                  }
                >
                  <ListItemText primary={v} />
                </ListItem>
              );
            })}
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
            {guarantorChecklist.map((v, i) => {
              const key = "g" + i;
              return (
                <ListItem
                  key={key}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(key)}
                      checked={checked.includes(key)}
                    />
                  }
                >
                  <ListItemText primary={v} />
                </ListItem>
              );
            })}
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
