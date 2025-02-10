import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import TaskIcon from "@mui/icons-material/Task";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import React from "react";
import CardTitleHeader from "../../components/CardTitleHeader";
import { Task, TaskStatus, TaskType } from "../../models/task.model";
import { Color } from "../../styles/colors";
import { formatDisplayDate } from "../../utils/formatters";
import TaskForm from "./TaskForm";

const tasks: Task[] = [
  {
    title: "Upload doc",
    description: "Upload doc adasd aeaw dasd adaa",
    status: TaskStatus.WorkingOnIt,
    assignedTo: "Klein Moretti",
    dateCreated: new Date(),
    dueDate: new Date(),
    sla: "1 day to go",
    attachments: [
      {
        name: "medicare.pdf",
        dateUploaded: new Date(),
        type: "pdf",
      },
    ],
    taskType: TaskType.Internal,
  },
  {
    title: "Request bank statement",
    description: "Upload",
    status: TaskStatus.NotStarted,
    assignedTo: "Klein Moretti",
    dateCreated: new Date(),
    dueDate: new Date(),
    sla: "9 days overdue",
    attachments: [
      {
        name: "medicare.pdf",
        dateUploaded: new Date(),
        type: "pdf",
      },
      {
        name: "medicare.pdf",
        dateUploaded: new Date(),
        type: "pdf",
      },
    ],
    taskType: TaskType.Internal,
  },
  {
    title: "Confirm applicant address",
    description: "Upload",
    status: TaskStatus.Done,
    assignedTo: "Klein Moretti",
    dateCreated: new Date(),
    dueDate: new Date(),
    sla: "",
    attachments: [],
    taskType: TaskType.Internal,
  },
  {
    title: "Condition 1",
    description: "Upload",
    status: TaskStatus.Done,
    assignedTo: "Klein Moretti",
    dateCreated: new Date(),
    dueDate: new Date(),
    sla: "",
    attachments: [],
    taskType: TaskType.CreditCondition,
    conditionMet: true,
  },
  {
    title: "Condition 2",
    description: "Upload",
    status: TaskStatus.WorkingOnIt,
    assignedTo: "Klein Moretti",
    dateCreated: new Date(),
    dueDate: new Date(),
    sla: "1 day to go",
    attachments: [],
    taskType: TaskType.CreditCondition,
    conditionMet: false,
  },
  {
    title: "Condition 3",
    description: "Upload",
    status: TaskStatus.WorkingOnIt,
    assignedTo: "Klein Moretti",
    dateCreated: new Date(),
    dueDate: new Date(),
    sla: "1 day to go",
    attachments: [],
    taskType: TaskType.CreditCondition,
    conditionMet: false,
  },
  {
    title: "Condition 4",
    description: "Upload",
    status: TaskStatus.WorkingOnIt,
    assignedTo: "Klein Moretti",
    dateCreated: new Date(),
    dueDate: new Date(),
    sla: "1 day to go",
    attachments: [],
    taskType: TaskType.CreditCondition,
    conditionMet: false,
  },
];

const Tasks = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState<Task>();

  const toggleDialog = (open: boolean, selectedTask?: Task) => {
    setOpenDialog(open);
    setTimeout(() => {
      setSelectedTask(selectedTask);
      console.log(selectedTask);
    }, 200);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case TaskStatus.NotStarted:
        return Color.red;
      case TaskStatus.WorkingOnIt:
        return Color.darkOrange;
      case TaskStatus.Done:
        return Color.green;
    }
  };

  const getSLAColor = (sla: string) => {
    if (sla.includes("overdue")) {
      return Color.red;
    } else if (sla.includes("to go")) {
      return Color.darkOrange;
    } else {
      return "inherit";
    }
  };

  return (
    <>
      <Card variant="outlined" className="mb-2">
        <CardContent sx={{ pt: 1 }}>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center">
              <CardTitleHeader title="Tasks" />

              <div className="d-flex justify-content-between align-items-center ml-5">
                <Button variant="contained" onClick={() => toggleDialog(true)}>
                  New Task
                </Button>

                <FormControl
                  variant="standard"
                  sx={{ m: 1, mt: 3, width: "25ch" }}
                >
                  <Input
                    endAdornment={
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
            </div>
            <TaskIcon color="primary" />
          </div>

          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Assigned</TableCell>
                  <TableCell>Date created</TableCell>
                  <TableCell>SLA</TableCell>
                  <TableCell>Attachments</TableCell>
                  <TableCell>Condition Met</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((t, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {t.title}
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Edit task">
                        <IconButton
                          color="secondary"
                          onClick={() => toggleDialog(true, t)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: getStatusColor(t.status),
                      }}
                    >
                      {t.status}
                    </TableCell>
                    <TableCell>{t.assignedTo}</TableCell>
                    <TableCell>{formatDisplayDate(t.dateCreated)}</TableCell>
                    <TableCell
                      sx={{
                        color: getSLAColor(t.sla),
                      }}
                    >
                      {t.sla}
                    </TableCell>
                    <TableCell>
                      {t.attachments.map((a, i) => (
                        <AttachFileIcon key={i} />
                      ))}
                    </TableCell>
                    <TableCell>
                      {t.taskType === TaskType.CreditCondition ? (
                        t.conditionMet ? (
                          <CheckBoxIcon />
                        ) : (
                          <CheckBoxOutlineBlankIcon />
                        )
                      ) : (
                        ""
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Dialog
        maxWidth="sm"
        fullWidth={true}
        open={openDialog}
        onClose={() => toggleDialog(false)}
      >
        <DialogTitle>{selectedTask ? "Edit" : "Add"} Task</DialogTitle>
        <DialogContent>
          <TaskForm task={selectedTask} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => toggleDialog(false, undefined)}
            variant="contained"
            color="secondary"
          >
            {selectedTask ? "Task Done" : "Add Task"}
          </Button>
          <Button
            onClick={() => toggleDialog(false, undefined)}
            variant="contained"
            color="inherit"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Tasks;
