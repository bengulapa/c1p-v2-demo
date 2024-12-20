import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Grid2, Stack, Typography } from "@mui/material";

interface IProps {
  loan?: any;
}

const EKYCDetails = ({ loan }: IProps) => {
  const guarantorChecklist = [
    "Fraud Check",
    "Politically Exposed Person",
    "Sanctions",
    "Velocity",
  ];

  return (
    <>
      <Typography gutterBottom>EQUIFAX</Typography>
      <Grid2 container spacing={1} className="mb-3">
        <Grid2 size={6}>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Equifax File No:</Typography>
            <Typography variant="body2" color="secondary">
              194578932
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">KYC Result:</Typography>
            <Typography variant="body2" color="success">
              Pass
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">DVS pass:</Typography>
            <Typography variant="body2" color="error">
              Fail
            </Typography>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <Typography variant="caption">Fraud Assessment:</Typography>
            <Typography variant="body2" color="success">
              Pass
            </Typography>
          </div>
          <div className="ml-3">
            {guarantorChecklist.map((c, i) => (
              <div key={i} className="d-flex justify-content-between">
                <Typography variant="caption">{c}:</Typography>
                <Typography variant="body2" color="success">
                  <CheckCircleIcon fontSize="small" />
                </Typography>
              </div>
            ))}
          </div>
        </Grid2>
        <Grid2 size={6}>
          <Stack alignItems="start" className="ml-5">
            <Button>VIEW Equifax Report</Button>
            <Button>VIEW Driver's License</Button>
            <Button>VIEW Australian Passport</Button>
            <Button>VIEW Medicare Card</Button>
          </Stack>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={1}>
        <Grid2 size={6}>
          <Typography gutterBottom>BIOMETRICS</Typography>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">
              BioID PhotoVerify File No:
            </Typography>
            <Typography variant="body2" color="secondary">
              194578932
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">ID Ownership:</Typography>
            <Typography variant="body2" color="success">
              Pass
            </Typography>
          </div>
        </Grid2>
        <Grid2 size={6}>
          <Button className="ml-5">VIEW BioID Report</Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default EKYCDetails;
