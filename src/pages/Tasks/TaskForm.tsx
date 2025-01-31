import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Box,
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
import { useState } from "react";
import { Task, TaskType } from "../../models/task.model";

interface IProps {
  task?: Task;
}

interface Condition {
  conditionId: number;
  display: string;
  details: string;
}

const TaskForm = ({ task }: IProps) => {
  const isEditMode = task !== undefined;
  const [taskType, setTaskType] = useState<TaskType | null>(null);
  const [condition, setCondition] = useState<Condition | null>(null);
  const [guarantor, setGuarantor] = useState<string | null>(null);

  const creditConditions = [
    {
      conditionId: 1,
      display: "Credit Condition 1 - Confirm Details",
    },

    {
      conditionId: 2,
      display: "Credit Condition 2 - Signed Consent Form",
    },
    {
      conditionId: 3,
      display: "Credit Condition 3 - Certified Copy of Trust Deed",
    },

    {
      conditionId: 4,
      display: "Credit Condition 4 - Proof of Property Ownership",
    },
  ];

  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        Task details
      </Typography>

      {!isEditMode && (
        <Stack direction="row" spacing={1} className="my-2">
          <FormControl className="w-50 pr-1" variant="filled">
            <InputLabel>Task type</InputLabel>
            <Select
              label="Task type"
              onChange={(e) => setTaskType(e.target.value as TaskType)}
            >
              <MenuItem value={TaskType.General}>General</MenuItem>
              <MenuItem value={TaskType.Internal}>Internal</MenuItem>
              <MenuItem value={TaskType.CreditCondition}>
                Credit Condition
              </MenuItem>
            </Select>
          </FormControl>

          {taskType === TaskType.CreditCondition && (
            <>
              <FormControl className="w-50 pr-1" variant="filled">
                <InputLabel>Conditions</InputLabel>
                <Select
                  label="Conditions"
                  onChange={(e) => setCondition(e.target.value as Condition)}
                >
                  {creditConditions.map((c) => (
                    <MenuItem key={c.conditionId} value={c.conditionId}>
                      {c.display}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
        </Stack>
      )}

      {condition && (
        <Box className="border p-2">
          <Typography>Credit Condition 1 - Confirm Details</Typography>
          Require additional guarantee details from{" "}
          <FormControl className="d-inline" variant="standard" size="small">
            <Select
              label="Select"
              onChange={(e) => setGuarantor(e.target.value as string)}
            >
              <MenuItem value="Guarantor One">Guarantor One</MenuItem>
              <MenuItem value="Guarantor Two">Guarantor Two</MenuItem>
              <MenuItem value="Guarantor Three">Guarantor Three</MenuItem>
            </Select>
          </FormControl>
          subject to AML & Credit Score. Please provide:
          <ul className="mb-0">
            <li>
              Full Name, DOB, Current Address (rent, mortgaged, own), Contact
              number, Email & Nationality
            </li>
            <li>Signed Privacy Consent</li>
          </ul>
        </Box>
      )}

      <Stack direction="row" spacing={1} className="my-2">
        <FormControl className="w-50" disabled={isEditMode} variant="filled">
          <InputLabel>Assign to</InputLabel>
          <Select label="Assign to" value={task?.assignedTo}>
            <MenuItem value="Klein Moretti">Klein Moretti</MenuItem>
            <MenuItem value="Lumian Lee">Lumian Lee</MenuItem>
            <MenuItem value="Fors Wall">Fors Wall</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Due Date"
          variant="filled"
          className="w-50"
          disabled={isEditMode}
        />
      </Stack>

      <div className="mb-2">
        {guarantor ? (
          <Box className="border p-2">
            <div>
              Require additional guarantee details from{" "}
              <strong>{guarantor}</strong> subject to AML & Credit Score. Please
              provide:
            </div>
            <ul className="mb-0">
              <li>
                Full Name, DOB, Current Address (rent, mortgaged, own), Contact
                number, Email & Nationality
              </li>
              <li>Signed Privacy Consent</li>
            </ul>
          </Box>
        ) : (
          <TextField
            fullWidth
            label="Task"
            multiline
            rows={4}
            variant="filled"
            value={task?.task}
          />
        )}
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
