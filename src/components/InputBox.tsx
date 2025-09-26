import React from "react";
import { TextField } from "@mui/material";

interface InputBoxProps {
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    fullWidth?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
    label,
    type = "text",
    value,
    onChange,
    required = false,
    fullWidth = true,
}) => {
    return (
        <TextField
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            fullWidth={fullWidth}
            margin="normal"
            variant="outlined"
            sx={{
                "& .MuiOutlinedInput-root .MuiInputBase-input": {
                    padding: "0.5rem"
                },
            }}
            InputLabelProps={{ shrink: true }}
        />
    );
};

export default InputBox;
