import Link from "next/link";
import { Stack, Box, Typography, Button } from "@mui/material";

export default function WelcomeHeader() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" color="primary">
        Welcome to Your Agenda
      </Typography>
    </Box>
  );
}
