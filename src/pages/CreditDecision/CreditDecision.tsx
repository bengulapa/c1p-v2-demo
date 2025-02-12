import {
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DetailCardHeader from "../../components/DetailCardHeader";
import PageTitle from "../../components/PageTitle";
import { declineReasons, withdrawalReasons } from "../../data/reasons";
import { brokers, creditAnalysts } from "../../data/users";
import { CreditStatus } from "../../models/enums";
import TaskForm from "../Tasks/TaskForm";

const CreditDecision = () => {
  const [status, setStatus] = useState(CreditStatus.UnderAssessment);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [creditAnalyst, setCreditAnalyst] = useState(0);

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    const selectedStatus = event.target.value as CreditStatus;
    setStatus(selectedStatus);

    if (selectedStatus === CreditStatus.UnderAssessment) {
      setCreditAnalyst(11);
    }
  };

  return (
    <Paper className="p-3">
      <PageTitle title="Credit Decision" />

      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Card variant="outlined">
            <CardContent>
              <div className="d-flex justify-content-between">
                <Typography variant="h6" gutterBottom>
                  Credit Status
                </Typography>
                <Chip label={status} color="primary" />
              </div>

              <Stack direction="column" spacing={2} className="mb-3">
                <Select
                  value={status}
                  onChange={handleStatusChange}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>
                    Select Status
                  </MenuItem>
                  {Object.values(CreditStatus).map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>

                {[CreditStatus.Approved, CreditStatus.MissingInfo].includes(
                  status
                ) && (
                  <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    onClick={() => setShowTaskModal(true)}
                  >
                    Add a Task
                  </Button>
                )}

                {status === CreditStatus.Declined && (
                  <>
                    <FormControl fullWidth>
                      <InputLabel>Decline reason</InputLabel>
                      <Select label="Decline reason">
                        <MenuItem value="" disabled>
                          Select a reason
                        </MenuItem>
                        {declineReasons.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <div className="text-center">
                      <Button variant="outlined" color="error" className="mr-2">
                        Decline
                      </Button>
                      <Button variant="outlined" color="error">
                        Decline and Email
                      </Button>
                    </div>
                  </>
                )}

                {status === CreditStatus.Withdrawn && (
                  <>
                    <FormControl fullWidth>
                      <InputLabel>Withdrawal reason</InputLabel>
                      <Select label="Decline reason">
                        <MenuItem value="" disabled>
                          Select a reason
                        </MenuItem>
                        {withdrawalReasons.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <div className="text-center">
                      <Button variant="outlined" color="error">
                        Withdraw
                      </Button>
                    </div>
                  </>
                )}

                <FormControl fullWidth>
                  <InputLabel>Credit Analyst</InputLabel>
                  <Select label="Credit Analyst" value={creditAnalyst}>
                    <MenuItem value={0} disabled>
                      Unassigned
                    </MenuItem>
                    {creditAnalysts.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Credit Support Officer</InputLabel>
                  <Select label="Credit Support Officer">
                    <MenuItem value={0} disabled>
                      Unassigned
                    </MenuItem>
                    {brokers.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TaskForm
                  task={null}
                  open={showTaskModal}
                  toggleDialog={setShowTaskModal}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <Card variant="outlined">
            <CardContent>
              <DetailCardHeader
                title="ANZSIC Codes"
                canEdit={false}
              ></DetailCardHeader>

              <Stack className="mt-2" spacing={2}>
                <FormControl fullWidth>
                  <InputLabel>Industry code</InputLabel>
                  <Select value={10} label="Industry code">
                    <MenuItem value={10}>
                      A - Agriculture, Forestry and Fishing
                    </MenuItem>
                    <MenuItem value={20}>
                      B - Bagriculture, Forestry and Fishing
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Industry sub code</InputLabel>
                  <Select value={10} label="Industry code">
                    <MenuItem value={10}>02 - Aquaculture</MenuItem>
                    <MenuItem value={20}>
                      B - Bagriculture, Forestry and Fishing
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <div className="text-right">
                <Button className="mt-4" variant="contained">
                  Save
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Paper>
  );
};

export default CreditDecision;
