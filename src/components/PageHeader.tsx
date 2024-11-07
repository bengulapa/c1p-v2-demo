import { Box, Typography } from "@mui/material";
import GaugeChart from "./GaugeChart";

interface IProps {
  title: string;
}

const PageHeader = ({ title }: IProps) => {
  return (
    <>
      <Box className="d-flex justify-content-between align-items-center pr-3">
        <Typography variant="h6" className="mb-3">
          {title}
        </Typography>

        <div className="d-flex ">
          <Box className="mx-auto" sx={{ height: 150, width: 150 }}>
            <GaugeChart score={100} width={170} height={170} />
          </Box>
        </div>
      </Box>
    </>
  );
};

export default PageHeader;
