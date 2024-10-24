import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Typography,
} from "@mui/material";

const AcceptanceCriteria = () => {
  return (
    <>
      <Typography gutterBottom>Acceptance Criteria</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Typography variant="overline" className="list-label">
              ABN
            </Typography>
            <Chip label="Active" color="success" className="ac-chip"></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Typography variant="overline" className="list-label">
              ABN Registration Length
            </Typography>
            <Chip label="515" color="error" className="ac-chip"></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Typography variant="overline" className="list-label">
              GST Registration
            </Typography>
            <Chip label="Unknown" className="ac-chip"></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="d-flex justify-content-between align-items-center w-100">
            <Typography variant="overline" className="list-label">
              Equifax
            </Typography>
            <Chip label="-1" color="error" className="ac-chip"></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="d-flex justify-content-between align-items-center w-100">
            <Typography variant="overline" className="list-label">
              Criteria
            </Typography>
            <Chip label="2021" color="error" className="ac-chip"></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="d-flex justify-content-between align-items-center w-100">
            <Typography variant="overline" className="list-label">
              Criteria
            </Typography>
            <Chip label="650" color="success" className="ac-chip"></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="d-flex justify-content-between align-items-center w-100">
            <Typography variant="overline" className="list-label">
              Criteria
            </Typography>
            <Chip label="Yes" color="success" className="ac-chip"></Chip>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AcceptanceCriteria;
