import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box"

export default function WelcomeHeader() {
    return (
        <Box sx = {{p: 4}}>
        <Typography variant="h1" color="primary">
            Welcome to Your Agenda
        </Typography>
        </Box>
    );
}