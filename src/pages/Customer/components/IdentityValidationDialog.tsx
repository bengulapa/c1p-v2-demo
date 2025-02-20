import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from "@mui/material";
import { ContentCopy as ContentCopyIcon } from "@mui/icons-material";

export interface IdentityDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  reportUrl: string;
}

const IdentityValidationDialog = ({
  open,
  setOpen,
  reportUrl,
}: IdentityDialogProps) => {
  const [copied, setCopied] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setCopied(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(reportUrl);
    setCopied(true);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
        <DialogTitle>Identity Validation Report</DialogTitle>
        <DialogContent>
          {reportUrl ? (
            <iframe
              src={reportUrl}
              width="100%"
              height="400px"
              title="Identity Validation Report"
            />
          ) : (
            <>
              <TextField
                label="Link"
                value="https://link.to?id=CA01G1"
                fullWidth
                margin="normal"
                disabled
                slotProps={{
                  input: {
                    endAdornment: (
                      <IconButton color="primary" onClick={handleCopyClick}>
                        <ContentCopyIcon />
                      </IconButton>
                    ),
                  },
                }}
              />

              {copied && <span>Copied!</span>}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default IdentityValidationDialog;
