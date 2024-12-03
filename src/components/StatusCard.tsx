import { Card, CardContent, CardHeader } from "@mui/material";
import CardTitleHeader from "./CardTitleHeader";

interface IProps {
  loan?: any;
}

const StatusCard = ({ loan }: IProps) => {
  return (
    <Card variant="outlined" className="mb-2">
      <CardHeader
        subheader={
          <CardTitleHeader title={"The Progress: " + loan.creditStatus} />
        }
        sx={{ pb: 0 }}
      />
      <CardContent
        className="d-flex justify-content-between"
        sx={{ pt: 1 }}
      ></CardContent>
    </Card>
  );
};

export default StatusCard;
