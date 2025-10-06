import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputBox from "../components/InputBox";
import PasswordInput from "../components/PasswordInput";
import CustomButton from "../components/Button";
import FormContainer from "../components/Formcontainer";
import { login } from "../services/loginService";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);
    try {
      const res = await login(email, password);
      dispatch(loginAction(res?.token, res?.user));
      navigate("/dashboard");
    } catch (err) {
      console.log(err, "errrorr");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {loader && <Loader/>}
      <div className="login-page">
        <FormContainer title="Sign In" icon={<LockOutlinedIcon />} className="login-form">
          <form onSubmit={handleSubmit}>
            <InputBox label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <PasswordInput label="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <CustomButton type="submit">Sign In</CustomButton>
          </form>
        </FormContainer>
      </div>
    </>
  );
}

export default Login;