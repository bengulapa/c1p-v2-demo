import HistoryIcon from "@mui/icons-material/History";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import CardTitleHeader from "../../../components/CardTitleHeader";
import { CreditStatus } from "../../../models/enums";
import { useLoanStore } from "../../../state";
import { Color } from "../../../styles/colors";

const StatusCard = () => {
  const { status } = useLoanStore();

  const statusList = [
    {
      index: 1,
      name: "Submitted",
      progress: 5,
    },
    {
      index: 2,
      name: "Assessing",
      progress: 20,
    },
    {
      index: 3,
      name: "Pending",
      progress: 33,
    },

    {
      index: 4,
      name: "Decisioned",
      progress: 47,
    },

    {
      index: 5,
      name: "Settlement",
      progress: 100,
    },
  ];

  const getMainStatus = (status: CreditStatus) => {
    if (status === CreditStatus.Submitted) {
      return statusList.find((s) => s.name === "Submitted");
    } else if (status === CreditStatus.UnderAssessment) {
      return statusList.find((s) => s.name === "Assessing");
    } else if (
      [
        CreditStatus.Escalated,
        CreditStatus.MissingInfo,
        CreditStatus.Pending,
      ].includes(status)
    ) {
      return statusList.find((s) => s.name === "Pending");
    } else if (
      [
        CreditStatus.Approved,
        CreditStatus.Declined,
        CreditStatus.Withdrawn,
      ].includes(status)
    ) {
      return statusList.find((s) => s.name === "Decisioned");
    } else if (status === CreditStatus.ReadyForSettlement) {
      return statusList.find((s) => s.name === "Settlement");
    }
  };

  return (
    <Card variant="outlined" className="mb-2">
      <CardHeader
        action={<HistoryIcon color="primary" />}
        subheader={<CardTitleHeader title={"The Progress: " + status} />}
        sx={{ pb: 0 }}
      />
      <CardContent>
        <div className="d-flex w-100 mb-3">
          {statusList.map((s) => (
            <Box
              key={s.index}
              sx={{
                background:
                  getMainStatus(status)?.index! < s.index ? "gray" : "green",
                color:
                  getMainStatus(status)?.index! < s.index ? "gray" : "green",
              }}
              className="status-box d-flex align-items-center justify-content-center"
            >
              <Typography variant="caption" sx={{ color: "white" }}>
                {s.name}
              </Typography>
            </Box>
          ))}
        </div>

        <Stack direction="row" alignItems="center" justifyContent="start">
          <Box
            className="status-done-progress"
            sx={{
              width: `${getMainStatus(status)?.progress}%`,
              background: Color.darkOrange,
            }}
          >
            &nbsp;
          </Box>
          <Box
            className="d-flex align-items-center justify-content-center"
            sx={{
              width: `${getMainStatus(status)?.progress}%`,
              textAlign: "center",
            }}
          >
            {status !== CreditStatus.Submitted && (
              <Box
                className="sub-status-done-progress"
                sx={{ flex: "1 1 auto", background: Color.darkOrange }}
              >
                &nbsp;
              </Box>
            )}

            <Typography className="mx-2" variant="caption">
              {status}
            </Typography>

            {status !== CreditStatus.ReadyForSettlement && (
              <Box
                className="sub-status-future-progress"
                sx={{ flex: "1 1 auto" }}
              >
                &nbsp;
              </Box>
            )}
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
