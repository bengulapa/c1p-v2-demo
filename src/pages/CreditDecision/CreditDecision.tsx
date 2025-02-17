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
import { useLoanStore } from "../../state";
import TaskForm from "../Tasks/TaskForm";
import { industryCodes, industrySubCodes } from "../../data/industry-codes";

const CreditDecision = () => {
  const { status, setStatus, addTask } = useLoanStore();
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    const selectedStatus = event.target.value as CreditStatus;
    setStatus(selectedStatus);

    if (selectedStatus === CreditStatus.UnderAssessment) {
      setFormData((prevData) => ({
        ...prevData,
        creditAnalyst: 11,
      }));
    }
  };

  const [formData, setFormData] = useState({
    creditAnalyst: 0,
    creditSupportOfficer: 0,
    industryCode: "A",
    industrySubCode: "01",
  });

  const handleChange = (e: SelectChangeEvent<number | string>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
                  {Object.values(CreditStatus)
                    .filter(
                      (s) =>
                        ![
                          CreditStatus.Submitted,
                          CreditStatus.ReadyForSettlement,
                        ].includes(s)
                    )
                    .map((status) => (
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
                  <Select
                    label="Credit Analyst"
                    name="creditAnalyst"
                    value={formData.creditAnalyst}
                    onChange={handleChange}
                    disabled={
                      ![
                        CreditStatus.UnderAssessment,
                        CreditStatus.Escalated,
                      ].includes(status)
                    }
                  >
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
                  <Select
                    label="Credit Support Officer"
                    name="creditSupportOfficer"
                    value={formData.creditSupportOfficer}
                    disabled={status !== CreditStatus.Escalated}
                    onChange={handleChange}
                  >
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
                  addTask={addTask}
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
                showEdit={true}
                onEdit={() => setIsEditMode(true)}
              />
              {isEditMode ? (
                <Stack className="mt-2" spacing={2}>
                  <FormControl fullWidth>
                    <InputLabel>Industry code</InputLabel>
                    <Select
                      name="industryCode"
                      label="Industry code"
                      value={formData.industryCode}
                      onChange={handleChange}
                    >
                      {industryCodes.map((c, i) => (
                        <MenuItem key={i} value={c.code}>
                          {c.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel>Industry sub code</InputLabel>
                    <Select
                      name="industrySubCode"
                      label="Industry sub code"
                      value={formData.industrySubCode}
                      onChange={handleChange}
                    >
                      {industrySubCodes.map((c, i) => (
                        <MenuItem key={i} value={c.code}>
                          {c.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <div className="text-center mt-4">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mr: 2 }}
                      onClick={() => setIsEditMode(false)}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => setIsEditMode(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </Stack>
              ) : (
                <>
                  <div>
                    <Typography variant="caption" className="list-label">
                      ANZSIC Industry code:
                    </Typography>
                    <span className="list-value">{formData.industryCode}</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      ANZSIC Industry sub code:
                    </Typography>
                    <span className="list-value">
                      {formData.industrySubCode}
                    </span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Paper>
  );
};

export default CreditDecision;
