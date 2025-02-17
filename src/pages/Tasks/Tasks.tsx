import AttachFileIcon from "@mui/icons-material/AttachFile";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import TaskIcon from "@mui/icons-material/Task";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
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
  Typography,
} from "@mui/material";
import { differenceInBusinessDays } from "date-fns";
import React from "react";
import CardTitleHeader from "../../components/CardTitleHeader";
import { Task, TaskStatus, TaskType } from "../../models/task.model";
import { useLoanStore } from "../../state";
import { Color } from "../../styles/colors";
import { formatDisplayDate } from "../../utils/formatters";
import TaskForm from "./TaskForm";

const Tasks = () => {
  const { tasks, setTasks, addTask } = useLoanStore();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState<Task | null>(null);

  const toggleDialog = (open: boolean, selectedTask: Task | null) => {
    setSelectedTask(selectedTask);
    setOpenDialog(open);
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

  const getSLA = (dueDate: Date) => {
    const result = differenceInBusinessDays(dueDate, new Date());

    if (result < 0) {
      return (
        <Typography sx={{ color: Color.red }}>
          {Math.abs(result)} days overdue
        </Typography>
      );
    } else if (result > 0) {
      return <Typography>{result} days to go</Typography>;
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
                <Button
                  variant="contained"
                  onClick={() => toggleDialog(true, null)}
                >
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
                    <TableCell>
                      {t.status !== TaskStatus.Done && getSLA(t.dueDate)}
                    </TableCell>
                    <TableCell>
                      {t.attachments?.map((a, i) => <AttachFileIcon key={i} />)}
                    </TableCell>
                    <TableCell align="center">
                      {t.taskType === TaskType.CreditCondition ? (
                        <Checkbox
                          checked={t.conditionMet}
                          onChange={(e) => {
                            setTasks(
                              tasks.map((at) =>
                                at.id === t.id
                                  ? {
                                      ...t,
                                      conditionMet: e.target.checked,
                                    }
                                  : at
                              )
                            );
                          }}
                        />
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

      <TaskForm
        task={selectedTask}
        open={openDialog}
        toggleDialog={toggleDialog}
        addTask={addTask}
        updateTask={(task) => {
          setTasks(
            tasks.map((at) =>
              at.id === task.id
                ? {
                    ...task,
                  }
                : at
            )
          );
        }}
      />
    </>
  );
};

export default Tasks;
