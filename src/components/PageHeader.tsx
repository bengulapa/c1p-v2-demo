import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Box, Button, Typography } from "@mui/material";

interface IProps {
  title: string;
}

const PageHeader = ({ title }: IProps) => {
  return (
    <Box className="d-flex justify-content-between align-items-center pr-3">
      <Typography variant="h6" className="mb-3">
        {title}
      </Typography>

      <Button color="secondary" className="d-flex flex-column">
        <ReceiptLongIcon />
        <span>Audit Logs</span>
      </Button>
    </Box>
  );
};

export default PageHeader;
