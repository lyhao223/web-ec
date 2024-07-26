import React, { FormEvent, useDebugValue, useState } from "react";
import FlyModal from "../../Animation/FlyModal";
import { Button, ButtonProps, Modal, styled, TextField } from "@mui/material";
import Link from "next/link";
import { purple } from "@mui/material/colors";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/services/redux/store";
import { loginUser } from "@/app/services/redux/slices/userSlice";
interface LoginProps {
  openAccount?: boolean;
  handleOpenAccount?: () => void;
  handleCloseAccount?: () => void;
  handleToggleAccount?: () => void;
}
const Login = ({
  openAccount,
  handleOpenAccount,
  handleCloseAccount,
  handleToggleAccount,
}: LoginProps) => {
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  const dispatch = useDispatch<AppDispatch>();
  const userStatus = useSelector((state: RootState) => state.userSlice.status);
  const userError = useSelector((state: RootState) => state.userSlice.error);
  const token = useSelector((state: RootState) => state.userSlice.token);
  const user = useSelector((state: RootState) => state.userSlice.user);
  const name = useSelector((state: RootState) => state.userSlice.name);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(login));
  };
  return (
    <div className="relative lg:top-52 lg:left-80 xl:top-28 xl:left-[35rem] 2xl:left-[48rem] md:left-52 md:top-52 top-56 left-5 h-96 w-96 bg-white border-2 rounded-lg">
      <button
        className="absolute top-3 right-5 rounded-full hover:bg-red-600 bg-gray-500 transition duration-200 ease-linear p-2"
        onClick={handleCloseAccount}>
        <MdClose size={16} color="white" />
      </button>
      <div className="flex flex-col items-center justify-center p-8 space-y-8">
        <h1 className="text-4xl subpixel-antialiased tracking-widest font-medium">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-start w-full space-y-4">
          <TextField
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            autoComplete="off"
            fullWidth
            onChange={handleChange}
            value={login.username}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            autoComplete="off"
            fullWidth
            onChange={handleChange}
            value={login.password}
          />

          <div className="flex flex-row items-center justify-between space-x-11">
            <button onClick={handleToggleAccount}>
              <p className="text-xs text-blue-700">Did you have an account?</p>
            </button>
            <button>
              <p className="text-xs text-blue-700">Forgot your password</p>
            </button>
          </div>
          <ColorButton variant="contained" size="large" fullWidth type="submit">
            Login
          </ColorButton>
        </form>
        {userStatus === "loading" && <p>Logging in...</p>}
        {userStatus === "succeeded" && token && <p>{token}</p>}
        {userStatus === "failed" && <p>Error: {userError}</p>}
      </div>
    </div>
  );
};

export default Login;
