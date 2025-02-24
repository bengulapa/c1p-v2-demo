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
  const { applicant, asset, arrangement, strategy } = report;
  const [expandedList, setExpandedList] = useState<string[]>([]);

  const handleExpand = (expanded: boolean, title: string) => {
    if (expanded) {
      setExpandedList([...expandedList, title]);
    } else {
      setExpandedList(expandedList.filter((t) => t !== title));
    }
  };

  const sections = [applicant, asset, arrangement];

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
      <DialogTitle>Report Card - {report.title}</DialogTitle>
      <DialogContent>
        {sections.map((section, i) => (
          <Accordion
            key={i}
            className="mb-2"
            sx={{
              backgroundColor:
                section.result === "PASS" ? Color.lightGreen : Color.amber,
            }}
            onChange={(_, expanded) => handleExpand(expanded, section.title)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Grid2 container className="w-100">
                {expandedList.includes(section.title) ? (
                  <>
                    <Grid2 size={8}>
                      <Typography>
                        <strong>{section.title}</strong>
                      </Typography>
                    </Grid2>
                    <Grid2 size={2}>
                      <Typography>Result</Typography>
                    </Grid2>
                    <Grid2 size={2}>
                      <Typography>Verified</Typography>
                    </Grid2>
                  </>
                ) : (
                  <>
                    <Grid2 size={4}>
                      <strong>{section.title}</strong>
                    </Grid2>
                    <Grid2 size={4}>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <Typography>{section.result}</Typography>
                        <ResultIcon result={section.result} />
                      </Stack>
                    </Grid2>
                    <Grid2 size={2}>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        {["PASS", "REVIEW"].includes(section.result) && (
                          <>
                            <Typography>Verified</Typography>
                            {section.result === "PASS" && (
                              <ResultIcon result={section.result} />
                            )}
                          </>
                        )}
                      </Stack>
                    </Grid2>
                    <Grid2 size={2} className="text-right">
                      Details
                    </Grid2>
                  </>
                )}
              </Grid2>
            </AccordionSummary>
            <AccordionDetails>
              <Grid2 container>
                {section.data.map((data, i) => (
                  <React.Fragment key={i}>
                    <Grid2 size={4}>
                      <Typography>{data.text}:</Typography>
                    </Grid2>
                    <Grid2 size={4}>
                      <Typography>{data.value}</Typography>
                    </Grid2>
                    <Grid2 size={2}>
                      <Typography>
                        <ResultIcon
                          result={data.result}
                          resultInfo={data.resultInfo}
                        />
                      </Typography>
                    </Grid2>
                    <Grid2 size={2}>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                      >
                        {!!data.verified && <ResultIcon result="PASS" />}
                        <Typography>{data.verified}</Typography>
                      </Stack>
                    </Grid2>
                  </React.Fragment>
                ))}
              </Grid2>
            </AccordionDetails>
          </Accordion>
        ))}

        <Accordion
          className="mb-2"
          sx={{
            backgroundColor:
              strategy.result === "LOW RISK" ? Color.lightGreen : Color.amber,
          }}
          onChange={(_, expanded) => handleExpand(expanded, strategy.title)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Grid2 container className="w-100">
              {expandedList.includes(strategy.title) ? (
                <>
                  <Grid2 size={4}>
                    <Typography>
                      <strong>{strategy.title}</strong>
                    </Typography>
                  </Grid2>
                  <Grid2 size={4}>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      className="pr-5"
                    >
                      <Typography>LOW</Typography>
                      <Typography>HIGH</Typography>
                    </Stack>
                  </Grid2>
                  <Grid2 size={2}>
                    <Typography>Result</Typography>
                  </Grid2>
                  <Grid2 size={2}>
                    <Typography>Verified</Typography>
                  </Grid2>
                </>
              ) : (
                <>
                  <Grid2 size={4}>
                    <strong>{strategy.title}</strong>
                  </Grid2>
                  <Grid2 size={4}>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                      <Typography>{strategy.result}</Typography>
                      <ResultIcon result={strategy.result} />
                    </Stack>
                  </Grid2>
                  <Grid2 size={2}>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                      {["PASS", "REVIEW"].includes(strategy.result) && (
                        <>
                          <Typography>Verified</Typography>{" "}
                          {strategy.result === "PASS" && (
                            <ResultIcon result={strategy.result} />
                          )}
                        </>
                      )}
                    </Stack>
                  </Grid2>
                  <Grid2 size={2} className="text-right">
                    Details
                  </Grid2>
                </>
              )}
            </Grid2>
          </AccordionSummary>
          <AccordionDetails>
            <Grid2 container>
              {strategy.data.map((data, i) => (
                <React.Fragment key={i}>
                  <Grid2 size={4}>
                    <Typography sx={{ ml: data.isChild ? 4 : 0 }}>
                      {data.text}:
                    </Typography>
                  </Grid2>
                  <Grid2 size={4} className="pr-5">
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
                    />
                  </Grid2>
                  <Grid2 size={2}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      {!!data.verified && <ResultIcon result="PASS" />}
                      <Typography>{data.verified}</Typography>
                    </Stack>
                  </Grid2>
                </React.Fragment>
              ))}
            </Grid2>
          </AccordionDetails>
        </Accordion>

        {/* The Recommendation Section */}
        <Paper sx={{ p: 2, backgroundColor: Color.lightGray }}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <div>
              <Typography variant="subtitle1">The Recommendation:</Typography>
              <Typography
                sx={{
                  color:
                    report.recommendation === "APPROVE"
                      ? Color.green
                      : Color.darkAmber,
                }}
              >
                <strong>{report.recommendation}</strong>{" "}
                {report.recommendationDetails}
              </Typography>
            </div>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Button onClick={handleClose} color="warning" variant="contained">
                Review
              </Button>
              {report.recommendation === "APPROVE" &&
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
