import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLoanStore } from "../state";
import { Color } from "../styles/colors";
import ResultIcon from "./ui/ResultIcon";
import RangeDisplay from "./ui/RangeDisplay";

interface ReportCardDialogProps {
  open: boolean;
  handleClose: () => void;
}

const ReportCardDialog: React.FC<ReportCardDialogProps> = ({
  open,
  handleClose,
}) => {
  const report = useLoanStore((state) => state.report!);
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
        {sections.map((section) => (
          <Accordion
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
              strategy.result === "PASS" ? Color.lightGreen : Color.amber,
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
          <Typography variant="subtitle1">The Recommendation:</Typography>
          <Typography
            sx={{
              color:
                report.recommendation === "PASS"
                  ? Color.lightGreen
                  : Color.darkAmber,
            }}
          >
            {report.recommendation} {report.recommendationDetails}
          </Typography>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReportCardDialog;
