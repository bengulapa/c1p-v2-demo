import AttachFileIcon from "@mui/icons-material/AttachFile";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
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
import { Task, TaskStatus } from "../models/task.model";
import CardTitleHeader from "./CardTitleHeader";
import TaskForm from "./TaskForm";

const tasks: Task[] = [
  {
    task: "Upload doc",
    status: TaskStatus.InProgress,
    assignedTo: "Klein Moretti",
    dateCreated: new Date().toLocaleDateString(),
    sla: "1 day to go",
    attachments: [
      {
        name: "medicare.pdf",
        dateUploaded: new Date().toLocaleDateString(),
        type: "pdf",
      },
    ],
  },
  {
    task: "Request bank statement",
    status: TaskStatus.NotStarted,
    assignedTo: "Klein Moretti",
    dateCreated: new Date().toLocaleDateString(),
    sla: "9 days overdue",
    attachments: [
      {
        name: "medicare.pdf",
        dateUploaded: new Date().toLocaleDateString(),
        type: "pdf",
      },
      {
        name: "medicare.pdf",
        dateUploaded: new Date().toLocaleDateString(),
        type: "pdf",
      },
    ],
  },
  {
    task: "Confirm applicant address",
    status: TaskStatus.Done,
    assignedTo: "Klein Moretti",
    dateCreated: new Date().toLocaleDateString(),
    sla: "",
    attachments: [],
  },
];

const Tasks = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState<Task | null>();

  const toggleDialog = (open: boolean, selectedTask?: Task | null) => {
    setOpenDialog(open);
    setTimeout(() => {
      setSelectedTask(selectedTask);
    }, 200);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case TaskStatus.NotStarted:
        return "gray";
      case TaskStatus.InProgress:
        return "blue";
      case TaskStatus.Done:
        return "green";
    }
  };

  const getSLAColor = (sla: string) => {
    if (sla.includes("overdue")) {
      return "red";
    } else if (sla.includes("to go")) {
      return "blue";
    } else {
      return "inherit";
    }
  };

  return (
    <>
      <Card variant="outlined" className="mb-2">
        <CardContent sx={{ pt: 1 }}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <CardTitleHeader title="Tasks" />

            <div className="d-flex justify-content-between align-items-center mb-2">
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

          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Task</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Assigned</TableCell>
                  <TableCell>Date created</TableCell>
                  <TableCell>SLA</TableCell>
                  <TableCell>Attachments</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((t, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {t.task}
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
                    <TableCell>{t.dateCreated}</TableCell>
                    <TableCell
                      sx={{
                        color: getSLAColor(t.sla),
                      }}
                    >
                      {t.sla}
                    </TableCell>
                    <TableCell>
                      {t.attachments.map((a) => (
                        <AttachFileIcon />
                      ))}
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
          <TaskForm />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => toggleDialog(false, null)}
            variant="contained"
            color="secondary"
          >
            {selectedTask ? "Task Done" : "Add Task"}
          </Button>
          <Button
            onClick={() => toggleDialog(false, null)}
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
