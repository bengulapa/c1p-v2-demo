import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import FormInputDate from "../../components/ui/FormInputDate";
import FormInputSelect from "../../components/ui/FormInputSelect";
import FormInputText from "../../components/ui/FormInputText";
import { Task, TaskStatus, TaskType } from "../../models/task.model";

interface IProps {
  task: Task | null;
  open: boolean;
  toggleDialog: (open: boolean, selectedTask: Task | null) => void;
}

interface Condition {
  conditionId: number;
  display: string;
  details: string;
}

const TaskForm = ({ task, open, toggleDialog }: IProps) => {
  const isEditMode = task !== null;
  const [condition, setCondition] = useState<Condition | null>(null);
  const [guarantor, setGuarantor] = useState<string | null>(null);
  const { control, handleSubmit, reset, formState, register } = useForm({
    defaultValues: {
      id: "",
      title: "",
      description: "",
      status: TaskStatus.NotStarted,
      assignedTo: "",
      dateCreated: new Date(),
      dueDate: new Date(),
      sla: "",
      attachments: [],
      taskType: "",
      conditionMet: false,
    },
    values: { ...task },
  });

  const taskType = useWatch({ control, name: "taskType" });

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

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({});
    }
  }, [formState, reset]);

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={open}
      onClose={() => {
        console.log("close");
        reset();
      }}
    >
      <DialogTitle>{isEditMode ? "Edit" : "Add"} Task</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("id")} type="hidden" />
          {!isEditMode && (
            <Stack direction="row" spacing={1} className="my-2">
              <FormInputSelect
                name={"taskType"}
                control={control}
                label={"Task type"}
                disabled={isEditMode}
              >
                <MenuItem value={TaskType.General}>General</MenuItem>
                <MenuItem value={TaskType.Internal}>Internal</MenuItem>
                <MenuItem value={TaskType.CreditCondition}>
                  Credit Condition
                </MenuItem>
              </FormInputSelect>

              {taskType === TaskType.CreditCondition && (
                <FormInputSelect
                  name={"conditions"}
                  control={control}
                  label={"Conditions"}
                  disabled={isEditMode}
                >
                  {creditConditions.map((c) => (
                    <MenuItem key={c.conditionId} value={c.conditionId}>
                      {c.display}
                    </MenuItem>
                  ))}
                </FormInputSelect>
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
                  Full Name, DOB, Current Address (rent, mortgaged, own),
                  Contact number, Email & Nationality
                </li>
                <li>Signed Privacy Consent</li>
              </ul>
            </Box>
          )}

          <Stack direction="row" spacing={1} className="my-2">
            <FormInputSelect
              name={"assignedTo"}
              control={control}
              label={"Assign to"}
              disabled={isEditMode}
            >
              <MenuItem value="Klein Moretti">Klein Moretti</MenuItem>
              <MenuItem value="Lumian Lee">Lumian Lee</MenuItem>
              <MenuItem value="Fors Wall">Fors Wall</MenuItem>
            </FormInputSelect>

            <FormInputDate
              name={"dueDate"}
              control={control}
              label={"Due Date"}
              disabled={isEditMode}
            />
          </Stack>

          <div className="mb-2">
            {taskType && taskType !== TaskType.CreditCondition && (
              <FormInputText
                name={"title"}
                control={control}
                label={"Title"}
                className="mb-2"
              />
            )}

            {guarantor ? (
              <Box className="border p-2">
                <div>
                  Require additional guarantee details from{" "}
                  <strong>{guarantor}</strong> subject to AML & Credit Score.
                  Please provide:
                </div>
                <ul className="mb-0">
                  <li>
                    Full Name, DOB, Current Address (rent, mortgaged, own),
                    Contact number, Email & Nationality
                  </li>
                  <li>Signed Privacy Consent</li>
                </ul>
              </Box>
            ) : (
              <FormInputText
                name="description"
                control={control}
                label="Message"
                multiline
                rows={4}
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
        </form>
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="contained" color="secondary">
          {task ? "Task Done" : "Add Task"}
        </Button>
        <Button
          onClick={() => toggleDialog(false, null)}
          variant="contained"
          color="inherit"
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;
