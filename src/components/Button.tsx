import React from "react";
import { Button } from "@mui/material";

interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
    fullWidth?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    onClick,
    type = "button",
    color = "primary",
    fullWidth = true,
}) => {
    return (
        <Button
            type={type}
            variant="contained"
            color={color}
            fullWidth={fullWidth}
            sx={{ mt: 2, mb: 2 }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
