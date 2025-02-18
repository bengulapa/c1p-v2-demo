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

const ApplicantTab = () => {
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
    previousAbn: "56568458789",
    previousEntityName: "John Smith",
    previousIncorporationDate: "2023-06-05",
    previousEntityType: "Individual",
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
        <Card variant="outlined" className="mb-3">
          <CardContent>
            <DetailCardHeader
              title="Applicant"
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
      <Grid2 size={6}>
        <Card variant="outlined" className="mb-3">
          <CardContent>
            <DetailCardHeader
              title="Previous ABN"
              showEdit={true}
              onEdit={() => setIsEditMode({ key: "previous", edit: true })}
            ></DetailCardHeader>
            {isEditMode?.key === "previous" && isEditMode.edit ? (
              <>
                <TextField
                  label="ABN"
                  name="previousAbn"
                  value={formData.previousAbn}
                  disabled
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Entity Name"
                  name="previousEntityName"
                  value={formData.previousEntityName}
                  disabled
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Incorporation Date"
                  name="previousIncorporationDate"
                  value={formData.previousIncorporationDate}
                  disabled
                  type="date"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  select
                  label="Entity Type"
                  name="previousEntityType"
                  value={formData.previousEntityType}
                  disabled
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="Individual">Individual</MenuItem>
                  {/* Add more options as needed */}
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
                  <span className="list-value">{formData.previousAbn}</span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Entity name:
                  </Typography>
                  <span className="list-value">
                    {formData.previousEntityName}
                  </span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Incorporation date
                  </Typography>
                  <span className="list-value">
                    {formData.previousIncorporationDate}
                  </span>
                </div>
                <div>
                  <Typography variant="caption" className="list-label">
                    Entity type:
                  </Typography>
                  <span className="list-value">
                    {formData.previousEntityType}
                  </span>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default ApplicantTab;
