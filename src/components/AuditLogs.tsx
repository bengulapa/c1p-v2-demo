import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useLoanStore } from "../state";
import { formatDateTimeDisplay } from "../utils/formatters";

const AuditLogs = () => {
  const { auditLogs } = useLoanStore();

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {auditLogs.map((a, i) => (
          <Box key={i}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <>
                    <strong className="mr-2">{a.source}</strong>
                    <small>{formatDateTimeDisplay(a.date)}</small>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      {a.message}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider component="li" />
          </Box>
        ))}
      </List>
    </>
  );
};

export default AuditLogs;
