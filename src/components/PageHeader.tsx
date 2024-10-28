import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Box, Button, Drawer, Typography } from "@mui/material";
import React from "react";
import AuditLogs from "./AuditLogs";

interface IProps {
  title: string;
}

const PageHeader = ({ title }: IProps) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box className="d-flex justify-content-between align-items-center pr-3">
        <Typography variant="h6" className="mb-3">
          {title}
        </Typography>

        <div className="d-flex ">
          <Button
            color="secondary"
            className="d-flex flex-column"
            onClick={toggleDrawer(true)}
          >
            <ReceiptLongIcon />
            <span>Audit Logs</span>
          </Button>
        </div>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Box
          sx={{ width: 320, mt: 5, pt: 5, px: 1, height: "100%" }}
          role="presentation"
        >
          <AuditLogs />
        </Box>
      </Drawer>
    </>
  );
};

export default PageHeader;
