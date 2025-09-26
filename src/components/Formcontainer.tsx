import React from "react";
import { Container, Paper, Box, Avatar, Typography } from "@mui/material";

interface FormContainerProps {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    background?: string;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    className?: string;
}

const FormContainer: React.FC<FormContainerProps> = ({
    title,
    icon,
    children,
    maxWidth = "xs",
    className
}) => {
    return (
        <Box sx={{ minHeight: "100vh", minWidth: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }} className={className} >
            <Container component="main" maxWidth={maxWidth}>
                <Paper elevation={6} sx={{ p: 4, borderRadius: 3, }} >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        {icon && <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>{icon}</Avatar>}
                        <Typography component="h1" variant="h5">
                            {title}
                        </Typography>
                        <Box sx={{ mt: 2, width: "100%" }}>{children}</Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default FormContainer;
