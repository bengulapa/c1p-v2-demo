import {
  Button,
  Card,
  CardContent,
  Grid2,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import DetailCardHeader from "../../../components/DetailCardHeader";

const AssetTab = () => {
  const [formData, setFormData] = useState({
    type: "Motor vehicle up to 4.5t",
    yearOfManufacture: 2023,
    make: "VW",
    model: "Golf",
    description: "Hatchback",
    supplierName: "VW Bayside",
    supplierABN: "12345678924",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={6}>
        <Card>
          <CardContent>
            <DetailCardHeader title="Asset Details"></DetailCardHeader>

            <form>
              <TextField
                select
                label="Type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                disabled
                fullWidth
                margin="normal"
              >
                <MenuItem value="Motor vehicle up to 4.5t">
                  Motor vehicle up to 4.5t
                </MenuItem>
                {/* Add more options as needed */}
              </TextField>
              <TextField
                label="Year of Manufacture"
                name="yearOfManufacture"
                value={formData.yearOfManufacture}
                onChange={handleChange}
                type="number"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Make"
                name="make"
                value={formData.make}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                multiline
                rows={3}
                margin="normal"
              />
              <TextField
                label="Supplier Name"
                name="supplierName"
                value={formData.supplierName}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Supplier ABN"
                name="supplierABN"
                value={formData.supplierABN}
                onChange={handleChange}
                type="number"
                fullWidth
                margin="normal"
              />

              <div className="text-center mt-4">
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                  Save
                </Button>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={6}>
        <Card>
          <CardContent>
            <DetailCardHeader
              title="Valuations"
              canEdit={false}
            ></DetailCardHeader>

            <img
              className="w-100"
              src={`${process.env.PUBLIC_URL}/assets/images/redbook-valuation-cert-sample.png`}
              alt="red book valuation"
            />
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default AssetTab;
