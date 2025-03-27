import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { DetailFormProps } from "../../../models/interfaces";

const CoSupportForm = ({
  index,
  remove,
  isEditing,
  toggleEditMode,
  isNew,
}: DetailFormProps) => {
  const { control, getValues } = useFormContext();
  const coSupport = getValues(`coSupport.${index}`);

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
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        </Stack>

        <div>
          <Typography variant="caption" className="list-label">
            ABN:
          </Typography>
          <span className="list-value">{coSupport.abn}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            ACN:
          </Typography>
          <span className="list-value">{coSupport.acn}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Entity name:
          </Typography>
          <span className="list-value">{coSupport.entityName}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Legal name
          </Typography>
          <span className="list-value">{coSupport.legalName}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Incorporation date
          </Typography>
          <span className="list-value">{coSupport.incorporationDate}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Entity type:
          </Typography>
          <span className="list-value">{coSupport.entityType}</span>
        </div>
        <div>
          <Typography variant="caption" className="list-label">
            Business address:
          </Typography>
          <span className="list-value">{coSupport.businessAddress}</span>
        </div>

        <Divider className="my-3" />
      </Box>
    );
  }

  return (
    <Box>
      <Controller
        name={`coSupport.${index}.abn`}
        control={control}
        render={({ field }) => (
          <TextField {...field} label="ABN" fullWidth margin="normal" />
        )}
      />
      <Controller
        name={`coSupport.${index}.acn`}
        control={control}
        render={({ field }) => (
          <TextField {...field} label="ACN" fullWidth margin="normal" />
        )}
      />
      <Controller
        name={`coSupport.${index}.entityName`}
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Entity Name" fullWidth margin="normal" />
        )}
      />
      <Controller
        name={`coSupport.${index}.legalName`}
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Legal Name" fullWidth margin="normal" />
        )}
      />
      <Controller
        name={`coSupport.${index}.incorporationDate`}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Incorporation Date"
            type="text"
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name={`coSupport.${index}.entityType`}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Entity Type"
            fullWidth
            margin="normal"
          >
            <MenuItem value="Private Company">Private Company</MenuItem>
            {/* Add more options as needed */}
          </TextField>
        )}
      />
      <Controller
        name={`coSupport.${index}.businessAddress`}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Business address"
            fullWidth
            margin="normal"
          />
        )}
      />
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

export default CoSupportForm;
