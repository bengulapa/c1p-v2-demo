import {
  Button,
  Card,
  CardContent,
  Grid2,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DetailCardHeader from "../../../components/DetailCardHeader";

const AssetTab = () => {
  const [formData, setFormData] = useState({
    type: "Motor vehicle up to 4.5t",
    yearOfManufacture: 2023,
    make: "Nissan",
    model: "Subaru",
    description: "Hatchback",
    supplierName: "Edison Motors",
    supplierABN: "9895684787",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={6}>
        <Card>
          <CardContent>
            <DetailCardHeader
              title="Asset Details"
              showEdit={true}
              onEdit={() => setIsEditMode(true)}
            />
            {isEditMode ? (
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
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 2 }}
                    onClick={() => setIsEditMode(false)}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setIsEditMode(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              <>
                <div>
                  <Typography variant="caption" className="list-label">
                    Type:
                  </Typography>
                  <span className="list-value">Motor vehicle up to 4.5t</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Year of manufacture:
                  </Typography>
                  <span className="list-value">
                    {formData.yearOfManufacture}
                  </span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Make:
                  </Typography>
                  <span className="list-value">{formData.make}</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Model:
                  </Typography>
                  <span className="list-value">{formData.model}</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Description:
                  </Typography>
                  <span className="list-value">{formData.description}</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Supplier ABN:
                  </Typography>
                  <span className="list-value">{formData.supplierABN}</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Supplier name:
                  </Typography>
                  <span className="list-value">{formData.supplierName}</span>
                </div>
              </>
            )}
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
