import { Box, ListItem, List, ListItemText } from "@mui/material";
import { Stack } from "@mui/system";
import AgendaBar from "../AgendaBar";

const ClassModules = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Stack direction="row" spacing={2}>
        <AgendaBar />
        <AgendaBar />
        <AgendaBar />
      </Stack>
    </Box>
  );
};

export default ClassModules;
