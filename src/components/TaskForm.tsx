import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const TaskForm = () => {
  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        Task details
      </Typography>

      <Stack direction="row" spacing={1} className="my-2">
        <FormControl fullWidth>
          <InputLabel>Assign to</InputLabel>
          <Select label="Age">
            <MenuItem value={10}>Klein Moretti</MenuItem>
            <MenuItem value={20}>Lumian Lee</MenuItem>
            <MenuItem value={30}>Fors Wall</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Due Date" variant="filled" />
      </Stack>

      <div className="mb-2">
        <TextField fullWidth label="Task" multiline rows={4} variant="filled" />
      </div>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <FormControlLabel
          control={<Checkbox checked size="small" />}
          label="Send email confirmation"
        />

        <Button>
          <AttachFileIcon />
          Attach a document
        </Button>
      </div>
    </>
  );
};

export default TaskForm;
