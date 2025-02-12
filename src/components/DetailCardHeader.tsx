import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton } from "@mui/material";
import CardTitleHeader from "./CardTitleHeader";

interface IProps {
  title: string;
  showEdit?: boolean;
  canEdit?: boolean;
  onEdit?: () => void;
}

const DetailCardHeader = ({
  title,
  canEdit = true,
  showEdit = false,
  onEdit,
}: IProps) => {
  return (
    <>
      <Box className="d-flex justify-content-between align-items-center mb-2">
        <CardTitleHeader title={title} />

        {canEdit && showEdit && (
          <IconButton
            className="mt-n3"
            size="small"
            color="secondary"
            onClick={() => onEdit && onEdit()}
          >
            <EditIcon />
          </IconButton>
        )}
      </Box>
    </>
  );
};

export default DetailCardHeader;
