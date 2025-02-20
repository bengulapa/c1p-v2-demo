import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Box,
  TextField,
  MenuItem,
  IconButton,
  Typography,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import { DetailFormProps } from "../../../models/interfaces";
import IdentityValidationDialog from "./IdentityValidationDialog";

const GuarantorForm = ({
  index,
  remove,
  isEditing,
  toggleEditMode,
  isNew,
}: DetailFormProps) => {
  const { control, getValues } = useFormContext();
  const guarantor = getValues(`guarantors.${index}`);
  const [openIdDialog, setOpenIdDialog] = useState(false);

  if (!isEditing) {
    return (
      <Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="mb-2"
        >
          <Typography variant="subtitle2">Details</Typography>
          <div>
            <IconButton
              color="primary"
              onClick={() => toggleEditMode(index)}
              size="small"
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => remove(index)}
              size="small"
              disabled={index === 0}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        </Stack>

        <div>
          <Typography variant="caption" className="list-label">
            Name:
          </Typography>
          <span className="list-value">{guarantor.name}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Date of birth:
          </Typography>
          <span className="list-value">{guarantor.dateOfBirth}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Nationality:
          </Typography>
          <span className="list-value">{guarantor.nationality}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Email address:
          </Typography>
          <span className="list-value">{guarantor.email}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Phone number:
          </Typography>
          <span className="list-value">{guarantor.phone}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Address:
          </Typography>
          <span className="list-value">{guarantor.address}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Home status:
          </Typography>
          <span className="list-value">{guarantor.homeStatus}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Properties:
          </Typography>
          <span className="list-value">{guarantor.propertiesCount}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Identity Validation Report:
          </Typography>
          <span className="list-value" onClick={() => setOpenIdDialog(true)}>
            <Button>VIEW ID Validation REPORT</Button>
          </span>

          <IdentityValidationDialog
            open={openIdDialog}
            setOpen={setOpenIdDialog}
            reportUrl={guarantor.identityValidationReport}
          />
        </div>

        {index === 0 && (
          <>
            <Typography variant="subtitle2">Alternate Contact</Typography>
            <div>
              <Typography variant="caption" className="list-label">
                Name:
              </Typography>
              <span className="list-value">
                {guarantor.alternateContact.fullName}
              </span>
            </div>
            <div>
              <Typography variant="caption" className="list-label">
                Email:
              </Typography>
              <span className="list-value">
                {guarantor.alternateContact.email}
              </span>
            </div>
            <div>
              <Typography variant="caption" className="list-label">
                Phone:
              </Typography>
              <span className="list-value">
                {guarantor.alternateContact.phone}
              </span>
            </div>
            <div>
              <Typography variant="caption" className="list-label">
                Relationship:
              </Typography>
              <span className="list-value">
                {guarantor.alternateContact.relationship}
              </span>
            </div>
          </>
        )}

        <Divider className="my-3" />
      </Box>
    );
  }

  return (
    <Box>
      <Controller
        name={`guarantors.${index}.name`}
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Name" fullWidth margin="normal" />
        )}
      />
      <Controller
        name={`guarantors.${index}.dateOfBirth`}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Date of Birth"
            type="text"
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name={`guarantors.${index}.nationality`}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Nationality"
            fullWidth
            margin="normal"
          >
            <MenuItem value="Australian">Australian</MenuItem>
            {/* Add more options as needed */}
          </TextField>
        )}
      />
      <Controller
        name={`guarantors.${index}.email`}
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Email" fullWidth margin="normal" />
        )}
      />
      <Controller
        name={`guarantors.${index}.phone`}
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Phone" fullWidth margin="normal" />
        )}
      />
      <Controller
        name={`guarantors.${index}.address`}
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Address" fullWidth margin="normal" />
        )}
      />
      <Controller
        name={`guarantors.${index}.homeStatus`}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Home Status"
            fullWidth
            margin="normal"
          >
            <MenuItem value="Owning">Owning</MenuItem>
            {/* Add more options as needed */}
          </TextField>
        )}
      />
      <Controller
        name={`guarantors.${index}.propertiesCount`}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Properties Count"
            type="number"
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name={`guarantors.${index}.identityValidationReport`}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Identity Validation Report"
            fullWidth
            margin="normal"
          />
        )}
      />
      {index === 0 && (
        <>
          <Typography className="mt-1" variant="subtitle1">
            Alternate Contact
          </Typography>
          <Controller
            name={`guarantors.${index}.alternateContact.fullName`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Full Name"
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name={`guarantors.${index}.alternateContact.email`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Email" fullWidth margin="normal" />
            )}
          />
          <Controller
            name={`guarantors.${index}.alternateContact.phone`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Phone" fullWidth margin="normal" />
            )}
          />
          <Controller
            name={`guarantors.${index}.alternateContact.relationship`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Relationship"
                fullWidth
                margin="normal"
              />
            )}
          />
        </>
      )}

      <Stack spacing={1} direction={"row"} justifyContent={"end"}>
        <Button
          variant="outlined"
          color="error"
          onClick={() => remove(index)}
          size="small"
        >
          Remove
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => toggleEditMode(index)}
          size="small"
        >
          Save
        </Button>
      </Stack>
      <Divider className="my-3" />
    </Box>
  );
};

export default GuarantorForm;
