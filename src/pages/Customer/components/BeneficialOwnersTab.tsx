import {
  Card,
  CardContent,
  TextField,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DetailCardHeader from "../../../components/DetailCardHeader";

const BeneficialOwnersTab = () => {
  const [isEditMode, setIsEditMode] = useState<{
    key?: string;
    edit: boolean;
  }>();

  const [formData, setFormData] = useState({
    beneficialOwnerName: "John Smith",
    beneficialOwnerDob: "1991-01-01",
    beneficialOwnerNationality: "Australian",
    beneficialOwnerEmail: "johnsmith@agp.com",
    beneficialOwnerPhone: "041235647878",
    beneficialOwnerAddress: "11 BAKER ST, MELBOURNE VIC 2074",
    beneficialOwnerHomeStatus: "Owning",
    beneficialOwnerProperties: 5,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <DetailCardHeader
            title="Beneficial Owners"
            showEdit={true}
            onEdit={() =>
              setIsEditMode({ key: "beneficialOwners", edit: true })
            }
          />

          {isEditMode?.key === "beneficialOwners" && isEditMode?.edit ? (
            <>
              <TextField
                label="Name"
                name="beneficialOwnerName"
                value={formData.beneficialOwnerName}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Date of Birth"
                name="beneficialOwnerDob"
                value={formData.beneficialOwnerDob}
                onChange={handleChange}
                type="date"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                select
                label="Nationality"
                name="beneficialOwnerNationality"
                value={formData.beneficialOwnerNationality}
                onChange={handleChange}
                fullWidth
                margin="normal"
              >
                <MenuItem value="Australian">Australian</MenuItem>
                {/* Add more options as needed */}
              </TextField>
              <TextField
                label="Email Address"
                name="beneficialOwnerEmail"
                value={formData.beneficialOwnerEmail}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone Number"
                name="beneficialOwnerPhone"
                value={formData.beneficialOwnerPhone}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Address"
                name="beneficialOwnerAddress"
                value={formData.beneficialOwnerAddress}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                select
                label="Home Status"
                name="beneficialOwnerHomeStatus"
                value={formData.beneficialOwnerHomeStatus}
                onChange={handleChange}
                fullWidth
                margin="normal"
              >
                <MenuItem value="Owning">Owning</MenuItem>
                <MenuItem value="Owning with Mortgage">
                  Owning with Mortgage
                </MenuItem>
              </TextField>
              <TextField
                label="Properties"
                name="beneficialOwnerProperties"
                value={formData.beneficialOwnerProperties}
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
                <span className="list-value">
                  {formData.beneficialOwnerName}
                </span>
              </div>
              <div>
                <Typography variant="caption" className="list-label">
                  Date of birth:
                </Typography>
                <span className="list-value">
                  {formData.beneficialOwnerDob}
                </span>
              </div>
              <div>
                <Typography variant="caption" className="list-label">
                  Nationality:
                </Typography>
                <span className="list-value">
                  {formData.beneficialOwnerNationality}
                </span>
              </div>
              <div>
                <Typography variant="caption" className="list-label">
                  Email address:
                </Typography>
                <span className="list-value">
                  {formData.beneficialOwnerEmail}
                </span>
              </div>
              <div>
                <Typography variant="caption" className="list-label">
                  Phone number:
                </Typography>
                <span className="list-value">
                  {formData.beneficialOwnerPhone}
                </span>
              </div>
              <div>
                <Typography variant="caption" className="list-label">
                  Address:
                </Typography>
                <span className="list-value">
                  {formData.beneficialOwnerAddress}
                </span>
              </div>
              <div>
                <Typography variant="caption" className="list-label">
                  Home status:
                </Typography>
                <span className="list-value">
                  {formData.beneficialOwnerHomeStatus}
                </span>
              </div>
              <div>
                <Typography variant="caption" className="list-label">
                  Properties:
                </Typography>
                <span className="list-value">
                  {formData.beneficialOwnerProperties}
                </span>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default BeneficialOwnersTab;
