import HistoryIcon from "@mui/icons-material/History";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { Color } from "../../styles/colors";
import CardTitleHeader from "../../components/CardTitleHeader";

interface IProps {
  loan?: any;
}

const StatusCard = ({ loan }: IProps) => {
  const status = ["Submitted", "Assessing", "Pending", "Decisioned", "Settled"];

  return (
    <Card variant="outlined" className="mb-2">
      <CardHeader
        action={<HistoryIcon color="primary" />}
        subheader={
          <CardTitleHeader title={"The Progress: " + loan.creditStatus} />
        }
        sx={{ pb: 0 }}
      />
      <CardContent>
        <div className="d-flex w-100 mb-3">
          {status.map((s, i) => (
            <>
              <Box
                key={i}
                sx={{
                  background: i > 1 ? "gray" : "green",
                  color: i > 1 ? "gray" : "green",
                }}
                className="status-box d-flex align-items-center justify-content-center"
              >
                <Typography variant="caption" sx={{ color: "white" }}>
                  {s}
                </Typography>
              </Box>
            </>
          ))}
        </div>

        <Stack direction="row" alignItems="center" justifyContent="start">
          <Box
            className="status-done-progress"
            sx={{ width: "20%", background: Color.darkOrange }}
          >
            &nbsp;
          </Box>
          <Box
            className="d-flex align-items-center justify-content-center"
            sx={{ width: "20%", textAlign: "center" }}
          >
            <Box
              className="sub-status-done-progress"
              sx={{ flex: "1 1 auto", background: Color.darkOrange }}
            >
              &nbsp;
            </Box>

            <Typography className="mx-2" variant="caption">
              {loan.creditStatus}
            </Typography>

            <Box
              className="sub-status-future-progress"
              sx={{ flex: "1 1 auto" }}
            >
              &nbsp;
            </Box>
          </Box>

          <Box
            className="status-future-progress"
            sx={{ flex: "1 1 auto" }}
          ></Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
