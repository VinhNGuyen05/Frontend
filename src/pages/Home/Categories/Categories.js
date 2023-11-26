import React from 'react'
import { Container, Typography, Grid, Paper } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple'
// import BananaIcon from "@mui/icons-material/Banana";
import OrangeIcon from '@mui/icons-material/EmojiFoodBeverage'
import GrapeIcon from '@mui/icons-material/EmojiFoodBeverage'
import WatermelonIcon from '@mui/icons-material/LocalDrink'

const categories = [
    { name: 'Apple', icon: <AppleIcon />, color: '#FF5733' },
    //   { name: "Banana", icon: <BananaIcon />, color: "#FFD700" },
    { name: 'Orange', icon: <OrangeIcon />, color: '#FFA500' },
    { name: 'Grape', icon: <GrapeIcon />, color: '#800080' },
    { name: 'Water', icon: <WatermelonIcon />, color: '#FF6347' },
]

const categoryStyle = {
    container: {
        marginTop: '2rem',
        marginBottom: '2rem',
    },
    paper: {
        padding: '1.5rem',
        textAlign: 'center',
        borderRadius: '50%',
        margin: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    name: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        fontSize: '3rem',
        marginBottom: '0.5rem',
    },
}

const Categories = () => {
    return (
        <Container style={categoryStyle.container}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }} gutterBottom>
                Categories
            </Typography>
            <Grid container justifyContent="center">
                {categories.map((category, index) => (
                    <Grid item key={index}>
                        <Paper
                            style={{
                                ...categoryStyle.paper,
                                backgroundColor: category.color,
                            }}
                        >
                            {category.icon}
                        </Paper>
                        <Typography style={{ ...categoryStyle.name }} variant="subtitle1">
                            {category.name}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Categories
