import { Box, Typography } from "@mui/material";
import GaugeChart from "./GaugeChart";

interface IProps {
  title: string;
}

const PageHeader = ({ title }: IProps) => {
  return (
    <>
      <Box className="d-flex justify-content-between align-items-center mt-n4">
        <Typography
          variant="h6"
          className="mb-3"
          textTransform="uppercase"
          color="primary"
        >
          {title}
        </Typography>

        <div className="d-flex">
          <Box>
            <GaugeChart score={100} width={160} height={108} fontSize="10px" />
          </Box>
        </div>
      </Box>
    </>
  );
};

export default PageHeader;
