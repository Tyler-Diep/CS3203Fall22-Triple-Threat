import { Box, ListItem, List, ListItemText, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AgendaBar = () => {
  return (
    <Box sx={{ p: 2, border: "1px solid black", width: 1 }}>
      <Box>
        <Stack direction="row" spacing={2}>
          <h1>Today's Todos</h1>
          <AddIcon></AddIcon>
        </Stack>
      </Box>
      <List>
        <ListItem>
          <ListItemText primary="OS Assignment"></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="ML Lasso Technique"></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="My Agenda App"></ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default AgendaBar;
