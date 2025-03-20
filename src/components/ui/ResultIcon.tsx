import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Tooltip } from "@mui/material";
import { Color } from "../../styles/colors";
import DangerousIcon from "@mui/icons-material/Dangerous";

interface IProps {
  result: string;
  resultInfo?: string;
  verified?: string;
  isOverridden?: boolean;
}

const ResultIcon = ({
  result,
  resultInfo = "",
  isOverridden,
  verified,
}: IProps) => {
  return (
    <>
      {(result === "PASS" || result === "LOW RISK" || isOverridden) &&
        (verified ? (
          <VerifiedIcon color="success" fontSize="small" />
        ) : (
          <CheckCircleOutlinedIcon color="success" fontSize="small" />
        ))}

      {result === "FAIL" &&
        (verified ? (
          <Tooltip title={resultInfo}>
            <DangerousIcon color="error" fontSize="small" />
          </Tooltip>
        ) : (
          <Tooltip title={resultInfo}>
            <CancelOutlinedIcon color="error" fontSize="small" />
          </Tooltip>
        ))}

      {["REVIEW", "MED RISK"].includes(result) && (
        <Tooltip title={resultInfo}>
          <InfoOutlinedIcon sx={{ color: Color.darkAmber }} fontSize="small" />
        </Tooltip>
      )}
    </>
  );
};

export default ResultIcon;
