import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AssetLiability, AssetLiabilityType } from ".";

interface IProps {
  open: boolean;
  handleClose: () => void;
  assetLiability: AssetLiability | null;
  type: AssetLiabilityType;
}

const FormDialog = ({ open, handleClose, assetLiability, type }: IProps) => {
  const [formData, setFormData] = useState({
    name: "",
    value: 0,
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Logic to save or update the asset data
    console.log("Form Data:", formData);
    handleClose();
  };

  useEffect(() => {
    setFormData({
      name: assetLiability ? assetLiability.name : "",
      value: assetLiability ? assetLiability.value : 0,
      description: assetLiability ? assetLiability.description : "",
    });
  }, [assetLiability]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {assetLiability ? `Edit ${type}` : `Add New ${type}`}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label={type}
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={3}
        />
        <TextField
          margin="dense"
          label={type === "Asset" ? "Value" : "Amount Owed"}
          name="value"
          value={formData.value}
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
