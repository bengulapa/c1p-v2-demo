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
              Equifax
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
              Ben Gulapa - Veda
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
              Credit Shopped
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
              Deposit to Reduce to Low Doc
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
              Existing Customer Performance
            </Typography>
            <Chip
              label=">= 6 months"
              color="success"
              className="ac-chip"
            ></Chip>
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
              Loan to Value Ratio
            </Typography>
            <Chip label="66.67%" color="success" className="ac-chip"></Chip>
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
              Serviceability Evident
            </Typography>
            <Chip label="Unknown" color="default" className="ac-chip"></Chip>
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
              Debt Service Coverage Ration
            </Typography>
            <Chip label="Unknown" color="default" className="ac-chip"></Chip>
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
