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
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import FormInputDate from "../../components/ui/FormInputDate";
import FormInputSelect from "../../components/ui/FormInputSelect";
import { Task, TaskStatus, TaskType } from "../../models/task.model";
import { newGuid } from "../../utils/uuid";

interface IProps {
  task: Task | null;
  open: boolean;
  toggleDialog: (open: boolean, selectedTask: Task | null) => void;
  addTask?: (newTask: Task) => void;
  updateTask?: (task: Task) => void;
}

interface Condition {
  conditionId: number;
  display: string;
  details: string;
}
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

const TaskForm = ({
  task,
  open,
  toggleDialog,
  addTask,
  updateTask,
}: IProps) => {
  const isEditMode = task !== null;
  const isDone = task?.status === TaskStatus.Done;
  const [condition, setCondition] = useState<Condition | null>(null);
  const [guarantor, setGuarantor] = useState<string | null>(null);
  const [canAttach, setCanAttach] = useState(false);
  const { control, handleSubmit, reset, formState, register } = useForm({
    defaultValues: {
      id: "",
      title: "",
      description: "",
      status: TaskStatus.NotStarted,
      assignedTo: "",
      dateCreated: new Date(),
      dueDate: new Date(),
      attachments: [],
      taskType: undefined,
      conditionMet: false,
    } as Task,
    values: { ...task },
  });
  const taskType = useWatch({ control, name: "taskType" });
  const onSubmit = (data: any) => {
    if (data.id) {
      updateTask && updateTask(data);
    } else {
      addTask &&
        addTask({
          id: newGuid(),
          ...data,
        });
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      toggleDialog(false, null);
      reset();
    }
  }, [formState]);

  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      open={open}
      onClose={() => {
        reset();
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>{isEditMode ? "Edit" : "Add"} Task</DialogTitle>
        <DialogContent>
          <fieldset disabled={isDone}>
            <input {...register("id")} type="hidden" />
            {!isEditMode && (
              <Stack direction="row" spacing={1} className="my-2">
                <FormControl className="w-50 pr-1" variant="filled">
                  <InputLabel>Task type</InputLabel>
                  <Select label="Task type" {...register("taskType")}>
                    <MenuItem value={TaskType.General}>General</MenuItem>
                    <MenuItem value={TaskType.Internal}>Internal</MenuItem>
                    <MenuItem value={TaskType.CreditCondition}>
                      Credit Condition
                    </MenuItem>
                  </Select>
                </FormControl>

                {taskType === TaskType.CreditCondition && (
                  <FormControl className="w-50 pr-1" variant="filled">
                    <InputLabel>Conditions</InputLabel>
                    <Select
                      label="Conditions"
                      onChange={(e) =>
                        setCondition(e.target.value as Condition)
                      }
                    >
                      {creditConditions.map((c) => (
                        <MenuItem key={c.conditionId} value={c.conditionId}>
                          {c.display}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </Stack>
            )}

            {condition && (
              <Box className="border p-2">
                <Typography>Credit Condition 1 - Confirm Details</Typography>
                Require additional guarantee details from{" "}
                <FormControl
                  className="d-inline"
                  variant="standard"
                  size="small"
                >
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
                disabled={isEditMode}
                name="assignedTo"
                control={control}
                label="Assign to"
              >
                <MenuItem value="">Select</MenuItem>
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
                <TextField
                  className="mb-2"
                  fullWidth
                  label="Title"
                  variant="filled"
                  {...register("title")}
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
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="filled"
                  {...register("description")}
                />
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center mb-2">
              <FormControlLabel
                control={<Checkbox checked size="small" />}
                label="Send email confirmation"
              />

              <Button onClick={() => setCanAttach(!canAttach)}>
                <AttachFileIcon />
                Attach a document
              </Button>
            </div>

            {(canAttach || task?.attachments?.length! > 0) && (
              <div className="border p-4 text-center">
                Click to upload or Drag files here
                <ul className="w-50 mx-auto text-left">
                  {task?.attachments.map((t) => <li>{t.name}</li>)}
                </ul>
              </div>
            )}
          </fieldset>
        </DialogContent>
        <DialogActions>
          {!isDone && (
            <>
              <Button type="submit" variant="contained" color="secondary">
                {isEditMode ? "Task Done" : "Add"}
              </Button>
              {isEditMode && (
                <Button type="submit" variant="contained" color="secondary">
                  Return
                </Button>
              )}
            </>
          )}

          <Button
            onClick={() => {
              reset();
              toggleDialog(false, null);
            }}
            variant="contained"
            color="inherit"
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TaskForm;
