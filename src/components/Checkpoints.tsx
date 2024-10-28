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
  loan: any;
}

const assetChecklist = [
  "Is industry allowed?",
  "Is asset allowed?",
  "Is asset backed?",
  "Is asset age at EOT allowed?",
  "Is the supplier accredited?",
  "Is Asset Aligned to Business Activity?",
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

const applicantChecklist = [
  "Is ABN Active?",
  "Minimum required ABN > 24 months?",
  "Minimum GST registration > 1 year?",
  "Minimum borrower Veda score > 500?",
];

const arrangementChecklist = [
  "Total obligor exposure less than threshold?",
  "Minimum required deposit rate at least 10%?",
  "Skilled trade?",
];

const biometricsChecklist = ["Biometrics passed?"];

const Checkpoints = ({ updateScore, loan }: IProps) => {
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

  const getCheckedTotal = (prefix: string): number => {
    const x = checked.filter((v) => v.startsWith(prefix)).length * 20;
    return x;
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
            <Chip
              label={getCheckedTotal("a") > 50 ? "PASS" : "FAIL"}
              color={getCheckedTotal("a") > 50 ? "success" : "error"}
              className="ac-chip"
            ></Chip>
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
            <Chip
              label={getCheckedTotal("g") > 60 ? "PASS" : "FAIL"}
              color={getCheckedTotal("g") > 60 ? "success" : "error"}
            ></Chip>
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
            <Chip
              label={getCheckedTotal("b") >= 40 ? "PASS" : "FAIL"}
              color={getCheckedTotal("b") >= 40 ? "success" : "error"}
              className="ac-chip"
            ></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <List dense disablePadding>
            {applicantChecklist.map((v, i) => {
              const key = "b" + i;
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
              Arrangement Check
            </Typography>
            <Chip
              label={getCheckedTotal("l") >= 40 ? "PASS" : "FAIL"}
              color={getCheckedTotal("l") >= 40 ? "success" : "error"}
              className="ac-chip"
            ></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <List dense disablePadding>
            {arrangementChecklist.map((v, i) => {
              const key = "l" + i;
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
      {loan.overallRisk === "High Risk" && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className="d-flex justify-content-between align-items-center w-100">
              <Typography variant="overline" className="list-label">
                Biometrics Check
              </Typography>
              <Chip
                label={getCheckedTotal("bio") >= 20 ? "PASS" : "FAIL"}
                color={getCheckedTotal("bio") >= 20 ? "success" : "error"}
                className="ac-chip"
              ></Chip>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <List dense disablePadding>
              {biometricsChecklist.map((v, i) => {
                const key = "bio" + i;
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
      )}
    </>
  );
};

export default Checkpoints;
