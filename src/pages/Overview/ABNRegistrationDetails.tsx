import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Button, Grid2, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";

interface IProps {
  loan?: any;
}

const ABNRegistrationDetails = ({ loan }: IProps) => {
  return (
    <>
      <Grid2 container spacing={1} className="mb-3">
        <Grid2 size={4}>
          <Typography variant="body2">ABN:</Typography>
          <Typography variant="body2">Status:</Typography>
          <Typography variant="body2">ABN Registration Length:</Typography>
          <Typography variant="body2">Entity name:</Typography>
          <Typography variant="body2">Entity type:</Typography>
          <Typography variant="body2" gutterBottom>
            Main Business Location:
          </Typography>
          <Typography variant="body2">GST Registration:</Typography>
          <Typography variant="body2" gutterBottom>
            GST Registration Length:
          </Typography>
          <Typography variant="body1">Previous ABN</Typography>
          <Typography variant="body2">ABN:</Typography>
          <Typography variant="body2">Status:</Typography>
          <Typography variant="body2">ABN Registration Length:</Typography>
        </Grid2>
        <Grid2 size={4}>
          <Typography variant="body2" color="secondary">
            {loan.abn}
          </Typography>
          <div className="d-flex justify-content-between">
            <Typography variant="body2">Active from 28 Mar 2000</Typography>
            <CheckCircleOutlineIcon color="success" fontSize="small" />
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="body2">24 years</Typography>
            <CheckCircleOutlineIcon color="success" fontSize="small" />
          </div>
          <Typography variant="body2" color="secondary">
            {loan.entityName}
          </Typography>
          <Typography variant="body2" color="secondary">
            {loan.entityType}
          </Typography>
          <Typography variant="body2" color="secondary" gutterBottom>
            NSW 2000
          </Typography>
          <div className="d-flex justify-content-between">
            <Typography variant="body2">Registered from 01 Jul 2000</Typography>
            <CheckCircleOutlineIcon color="success" fontSize="small" />
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="body2" gutterBottom>
              24 years
            </Typography>
            <CheckCircleOutlineIcon color="success" fontSize="small" />
          </div>
          <Typography variant="body1" color="secondary">
            &nbsp;
          </Typography>
          <Typography variant="body2" color="secondary">
            65103457485
          </Typography>
          <Typography variant="body2" color="secondary">
            Cancelled from 28 Jan 2000
          </Typography>
          <Typography variant="body2" color="secondary">
            2 years
          </Typography>
        </Grid2>

        <Grid2 size={4}>
          <Button className="ml-5" endIcon={<LaunchIcon />}>
            <Link
              target="_blank"
              to={`https://abr.business.gov.au/ABN/View?id=${loan.abn}`}
            >
              VIEW ABN Lookup
            </Link>
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ABNRegistrationDetails;
