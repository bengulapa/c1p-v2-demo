import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Color } from "../../styles/colors";
import { Tooltip } from "@mui/material";

interface IProps {
  result: string;
  resultInfo?: string;
  isOverridden?: boolean;
}

const ResultIcon = ({ result, resultInfo = "", isOverridden }: IProps) => {
  return (
    <>
      {(result === "PASS" || isOverridden) && (
        <CheckCircleOutlinedIcon color="success" fontSize="small" />
      )}

      {result === "FAIL" && (
        <Tooltip title={resultInfo}>
          <CancelOutlinedIcon color="error" fontSize="small" />
        </Tooltip>
      )}

      {["REVIEW", "MED RISK"].includes(result) && (
        <InfoOutlinedIcon sx={{ color: Color.darkAmber }} fontSize="small" />
      )}
    </>
  );
};

export default ResultIcon;
