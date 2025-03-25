import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { CreditStatus } from "../models/enums";
import { useLoanStore } from "../state";
import { Color } from "../styles/colors";
import RangeDisplay from "./ui/RangeDisplay";
import ResultIcon from "./ui/ResultIcon";

interface ReportCardDialogProps {
  open: boolean;
  handleClose: () => void;
}

const ReportCardDialog: React.FC<ReportCardDialogProps> = ({
  open,
  handleClose,
}) => {
  const report = useLoanStore((state) => state.loan!.report);
  const { status, setStatus } = useLoanStore();
  const { qualifiers, riskRating, compliance, recommendation } = report;
  const { applicant, asset, arrangement } = qualifiers;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Report Card - {report.title}</DialogTitle>
      <DialogContent>
        <Accordion
          className="mb-2"
          sx={{
            backgroundColor:
              qualifiers.result === "PASS" ? Color.lightGreen : Color.amber,
          }}
          defaultExpanded
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <strong className="text-uppercase">{qualifiers.title}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <Grid2 container>
              <Grid2 size={4}>
                <Typography variant="subtitle1">
                  {applicant.header.title}
                </Typography>
              </Grid2>
              <Grid2 size={6}>
                <Typography variant="subtitle1">
                  {applicant.header.value}
                </Typography>
              </Grid2>
              <Grid2 size={2}>
                <Typography variant="subtitle1">
                  {applicant.header.result}
                </Typography>
              </Grid2>
              {applicant.data.map((data, i) => (
                <React.Fragment key={i}>
                  <Grid2 size={4}>
                    <Typography variant="caption">{data.text}</Typography>
                  </Grid2>
                  <Grid2 size={6}>
                    <Typography>{data.value}</Typography>
                  </Grid2>
                  <Grid2 size={2}>
                    <Typography>
                      <ResultIcon
                        result={data.result}
                        verified={data.verified}
                        resultInfo={data.resultInfo}
                      />
                    </Typography>
                  </Grid2>
                </React.Fragment>
              ))}

              <div className="w-100 mt-2">
                <Grid2 size={4}>
                  <Typography variant="subtitle1">
                    {asset.header.title}
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="subtitle1">
                    {asset.header.value}
                  </Typography>
                </Grid2>
                <Grid2 size={2}>
                  <Typography variant="subtitle1">
                    {asset.header.result}
                  </Typography>
                </Grid2>
              </div>
              {asset.data.map((data, i) => (
                <React.Fragment key={i}>
                  <Grid2 size={4}>
                    <Typography variant="caption">{data.text}</Typography>
                  </Grid2>
                  <Grid2 size={6}>
                    <Typography>{data.value}</Typography>
                  </Grid2>
                  <Grid2 size={2}>
                    <Typography>
                      <ResultIcon
                        result={data.result}
                        verified={data.verified}
                        resultInfo={data.resultInfo}
                      />
                    </Typography>
                  </Grid2>
                </React.Fragment>
              ))}

              <div className="w-100 mt-2">
                <Grid2 size={4}>
                  <Typography variant="subtitle1">
                    {arrangement.header.title}
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="subtitle1">
                    {arrangement.header.value}
                  </Typography>
                </Grid2>
                <Grid2 size={2}>
                  <Typography variant="subtitle1">
                    {arrangement.header.result}
                  </Typography>
                </Grid2>
              </div>
              {arrangement.data.map((data, i) => (
                <React.Fragment key={i}>
                  <Grid2 size={4}>
                    <Typography variant="caption">{data.text}</Typography>
                  </Grid2>
                  <Grid2 size={6}>
                    <Typography>{data.value}</Typography>
                  </Grid2>
                  <Grid2 size={2}>
                    <Typography>
                      <ResultIcon
                        result={data.result}
                        verified={data.verified}
                        resultInfo={data.resultInfo}
                      />
                    </Typography>
                  </Grid2>
                </React.Fragment>
              ))}
            </Grid2>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="mb-2"
          sx={{
            backgroundColor:
              riskRating.result === "LOW RISK" ? Color.lightGreen : Color.amber,
          }}
          defaultExpanded
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Grid2 container className="w-100">
              <strong className="text-uppercase">{riskRating.title}</strong>
            </Grid2>
          </AccordionSummary>
          <AccordionDetails>
            <Grid2 container>
              <Grid2 size={4}>
                <Typography variant="subtitle1">
                  {riskRating.header.title}
                </Typography>
              </Grid2>
              <Grid2 size={6}>
                <Typography variant="subtitle1">
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    className="pr-5"
                  >
                    <Typography>LOW</Typography>
                    <Typography>HIGH</Typography>
                  </Stack>
                </Typography>
              </Grid2>
              <Grid2 size={2}>
                <Typography variant="subtitle1">
                  {riskRating.header.result}
                </Typography>
              </Grid2>
              {riskRating.data.map((data, i) => (
                <React.Fragment key={i}>
                  <Grid2 size={4}>
                    <Typography
                      sx={{ ml: data.isChild ? 4 : 0 }}
                      variant="caption"
                    >
                      {data.text}:
                    </Typography>
                  </Grid2>
                  <Grid2 size={6} className="pr-5">
                    {data.valueType === "range" ? (
                      <RangeDisplay number={data.value} />
                    ) : (
                      <Typography>{data.value}</Typography>
                    )}
                  </Grid2>
                  <Grid2 size={2}>
                    <ResultIcon
                      result={data.result}
                      resultInfo={data.resultInfo}
                      verified={data.verified}
                    />
                  </Grid2>
                </React.Fragment>
              ))}
            </Grid2>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="mb-2"
          sx={{
            backgroundColor:
              compliance.result === "LOW RISK" ? Color.lightGreen : Color.amber,
          }}
          defaultExpanded
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Grid2 container className="w-100">
              <strong className="text-uppercase">{compliance.title}</strong>
            </Grid2>
          </AccordionSummary>
          <AccordionDetails>
            <Grid2 container>
              <Grid2 size={4}>
                <Typography variant="subtitle1">
                  {compliance.header.title}
                </Typography>
              </Grid2>
              <Grid2 size={6}>
                <Typography variant="subtitle1">
                  {compliance.header.value}
                </Typography>
              </Grid2>
              <Grid2 size={2}>
                <Typography variant="subtitle1">
                  {compliance.header.result}
                </Typography>
              </Grid2>
              {compliance.data.map((data, i) => (
                <React.Fragment key={i}>
                  <Grid2 size={4}>
                    <Typography
                      sx={{ ml: data.isChild ? 4 : 0 }}
                      variant="caption"
                    >
                      {data.text}:
                    </Typography>
                  </Grid2>
                  <Grid2 size={6} className="pr-5">
                    {data.valueType === "range" ? (
                      <RangeDisplay number={data.value} />
                    ) : (
                      <Typography>{data.value}</Typography>
                    )}
                  </Grid2>
                  <Grid2 size={2}>
                    <ResultIcon
                      result={data.result}
                      resultInfo={data.resultInfo}
                      verified={data.verified}
                    />
                  </Grid2>
                </React.Fragment>
              ))}
            </Grid2>
          </AccordionDetails>
        </Accordion>

        <Paper sx={{ p: 2 }}>
          <Stack direction={"row"} justifyContent={"space-between"} spacing={4}>
            <div>
              <Typography variant="subtitle1">
                <strong>The Recommendation</strong>
              </Typography>
              <Typography
                sx={{
                  color:
                    recommendation.result === "APPROVE"
                      ? Color.green
                      : Color.darkAmber,
                }}
              >
                <strong>{recommendation.result}:</strong>{" "}
                {recommendation.details}
              </Typography>
            </div>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Button onClick={handleClose} color="warning" variant="contained">
                Review
              </Button>
              {recommendation.result === "APPROVE" &&
                status !== CreditStatus.Approved && (
                  <Button
                    onClick={() => {
                      setStatus(CreditStatus.Approved);
                      handleClose();
                    }}
                    color="success"
                    variant="contained"
                  >
                    Approve
                  </Button>
                )}
            </Stack>
          </Stack>
        </Paper>
      </DialogContent>
    </Dialog>
  );
};

export default ReportCardDialog;
