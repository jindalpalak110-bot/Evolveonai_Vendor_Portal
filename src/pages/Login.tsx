import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputBox from "../components/InputBox";
import CustomButton from "../components/Button";
import FormContainer from "../components/Formcontainer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-page">
      <FormContainer title="Sign In" icon={<LockOutlinedIcon />} className="login-form">
        <form onSubmit={handleSubmit}>
          <InputBox label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <InputBox label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </FormContainer>
    </div>
  );
}

export default Login;