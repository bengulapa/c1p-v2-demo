import { Box, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

interface IProps {
  title: string;
  showEdit?: boolean;
  canEdit?: boolean;
  onEdit?: () => void;
}

const DetailCardHeader = ({
  title,
  canEdit = true,
  showEdit = true,
  onEdit,
}: IProps) => {
  return (
    <>
      <Box className="d-flex justify-content-between align-items-center mb-2">
        <Typography
          variant="subtitle2"
          textTransform="uppercase"
          color="secondary"
          gutterBottom
        >
          {title}
        </Typography>

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
