import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import CardTitleHeader from "./CardTitleHeader";

interface IProps {
  loan?: any;
}

const StatusCard = ({ loan }: IProps) => {
  const status = ["Submitted", "Assessing", "Pending", "Decisioned", "Settled"];

  return (
    <Card variant="outlined" className="mb-2">
      <CardHeader
        subheader={
          <CardTitleHeader title={"The Progress: " + loan.creditStatus} />
        }
        sx={{ pb: 0 }}
      />
      <CardContent>
        <div className="d-flex w-100 mb-3">
          {status.map((s, i) => (
            <Box
              key={i}
              sx={{
                background: i > 1 ? "inherit" : "green",
                color: i > 1 ? "inherit" : "white",
              }}
              className="status-box d-flex align-items-center justify-content-center"
            >
              <Typography variant="caption">{s}</Typography>
            </Box>
          ))}
        </div>

        <Stack direction="row" alignItems="center">
          <Box
            className="status-done-progress"
            sx={{ width: "30%", height: 4, background: "blue" }}
          >
            &nbsp;
          </Box>
          <Typography sx={{ width: "20%", textAlign: "center" }}>
            {loan.creditStatus}
          </Typography>{" "}
          <Box className="status-future-progress" sx={{ width: "50%" }}></Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
