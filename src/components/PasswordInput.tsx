import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface PasswordInputProps {
	label?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	fullWidth?: boolean;
	name?: string;
	id?: string;
	error?: boolean;
	helperText?: React.ReactNode;
	placeholder?: string;
	autoComplete?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
	label = "Password",
	value,
	onChange,
	required = false,
	fullWidth = true,
	name,
	id,
	error = false,
	helperText,
	placeholder,
	autoComplete = "current-password",
}) => {
	const [show, setShow] = useState(false);

	const handleToggle = () => setShow((s) => !s);
	const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault();

	return (
		<TextField
			label={label}
			type={show ? "text" : "password"}
			value={value}
			onChange={onChange}
			required={required}
			fullWidth={fullWidth}
			name={name}
			id={id}
			error={error}
			helperText={helperText}
			placeholder={placeholder}
			autoComplete={autoComplete}
			margin="normal"
			variant="outlined"
			InputLabelProps={{ shrink: true }}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
                            className="password-toggle"
							aria-label={show ? "Hide password" : "Show password"}
							onClick={handleToggle}
							onMouseDown={handleMouseDown}
							edge="end"
						>
							{show ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
				sx: { paddingRight: 0 },
			}}
			sx={{
				"& .MuiOutlinedInput-root .MuiInputBase-input": {
					padding: "0.5rem",
				},
			}}
		/>
	);
};

export default PasswordInput;
