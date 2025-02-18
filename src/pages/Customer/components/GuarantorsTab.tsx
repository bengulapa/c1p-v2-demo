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

const GuarantorsTab = () => {
  const [isEditMode, setIsEditMode] = useState<{
    key?: string;
    edit: boolean;
  }>();

  const [formData, setFormData] = useState({
    abn: "22605215227",
    entityName: "GULA PATISSERIE",
    legalName: "GULA PATISSERIE",
    incorporationDate: "2023-06-05",
    entityType: "Private Company",

    guarantorName: "Ben Gula",
    guarantorDob: "1991-01-01",
    guarantorNationality: "Australian",
    guarantorEmail: "ben.gula@agp.com",
    guarantorPhone: "041235647878",
    guarantorAddress: "11 BAKER ST, MELBOURNE VIC 2074",
    guarantorHomeStatus: "Owning",
    guarantorProperties: 5,
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
        <Card variant="outlined">
          <CardContent>
            <DetailCardHeader
              title="Guarantors"
              showEdit={true}
              onEdit={() => setIsEditMode({ key: "guarantor", edit: true })}
            />

            {isEditMode?.key === "guarantor" && isEditMode?.edit ? (
              <>
                <TextField
                  label="Name"
                  name="guarantorName"
                  value={formData.guarantorName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Date of Birth"
                  name="guarantorDob"
                  value={formData.guarantorDob}
                  onChange={handleChange}
                  type="date"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  select
                  label="Nationality"
                  name="guarantorNationality"
                  value={formData.guarantorNationality}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="Australian">Australian</MenuItem>
                  {/* Add more options as needed */}
                </TextField>
                <TextField
                  label="Email Address"
                  name="guarantorEmail"
                  value={formData.guarantorEmail}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Phone Number"
                  name="guarantorPhone"
                  value={formData.guarantorPhone}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Address"
                  name="guarantorAddress"
                  value={formData.guarantorAddress}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  select
                  label="Home Status"
                  name="guarantorHomeStatus"
                  value={formData.guarantorHomeStatus}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="Owning">Owning</MenuItem>
                  {/* Add more options as needed */}
                </TextField>
                <TextField
                  label="Properties"
                  name="guarantorProperties"
                  value={formData.guarantorProperties}
                  disabled
                  fullWidth
                  margin="normal"
                />

                <div className="text-center mt-4">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 2 }}
                    onClick={() => setIsEditMode({ edit: false })}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setIsEditMode({ edit: false })}
                  >
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Typography variant="caption" className="list-label">
                    Name:
                  </Typography>
                  <span className="list-value">{formData.guarantorName}</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Date of birth:
                  </Typography>
                  <span className="list-value">{formData.guarantorDob}</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Nationality:
                  </Typography>
                  <span className="list-value">
                    {formData.guarantorNationality}
                  </span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Email address:
                  </Typography>
                  <span className="list-value">{formData.guarantorEmail}</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Phone number:
                  </Typography>
                  <span className="list-value">{formData.guarantorPhone}</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Address:
                  </Typography>
                  <span className="list-value">
                    {formData.guarantorAddress}
                  </span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Home status:
                  </Typography>
                  <span className="list-value">
                    {formData.guarantorHomeStatus}
                  </span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Properties:
                  </Typography>
                  <span className="list-value">
                    {formData.guarantorProperties}
                  </span>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={6}>
        <Card variant="outlined" className="mb-3">
          <CardContent>
            <DetailCardHeader
              title="Co-Support Companies"
              showEdit={true}
              onEdit={() => setIsEditMode({ key: "applicant", edit: true })}
            ></DetailCardHeader>
            {isEditMode?.key === "applicant" && isEditMode.edit ? (
              <>
                <TextField
                  label="ABN"
                  name="abn"
                  value={formData.abn}
                  disabled
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Entity Name"
                  name="entityName"
                  value={formData.entityName}
                  disabled
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Legal Name"
                  name="legalName"
                  value={formData.legalName}
                  disabled
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Incorporation Date"
                  name="incorporationDate"
                  value={formData.incorporationDate}
                  disabled
                  type="date"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  select
                  label="Entity Type"
                  name="entityType"
                  value={formData.entityType}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="Individual">Individual</MenuItem>
                  <MenuItem value="Public Company">Public Company</MenuItem>
                  <MenuItem value="Private Company">Private Company</MenuItem>
                </TextField>

                <div className="text-center mt-4">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 2 }}
                    onClick={() => setIsEditMode({ edit: false })}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setIsEditMode({ edit: false })}
                  >
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Typography variant="caption" className="list-label">
                    ABN:
                  </Typography>
                  <span className="list-value">{formData.abn}</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Entity name:
                  </Typography>
                  <span className="list-value">{formData.entityName}</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Legal name
                  </Typography>
                  <span className="list-value">{formData.legalName}</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Incorporation date
                  </Typography>
                  <span className="list-value">
                    {formData.incorporationDate}
                  </span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Entity type:
                  </Typography>
                  <span className="list-value">{formData.entityType}</span>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default GuarantorsTab;
