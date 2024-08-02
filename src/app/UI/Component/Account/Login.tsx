import React, { FormEvent, useDebugValue, useEffect, useState } from "react";
import { Button, ButtonProps, Modal, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import { MdClose } from "react-icons/md";
import { signIn, useSession } from "next-auth/react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import clsx from "clsx";
import { set } from "mongoose";

import { useRouter } from "next/navigation";
import ActionSuccessfully from "./Success/ActionSuccessfully";

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
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const [loginStatus, setLoginStatus] = useState<string | null | any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const loadingIcon = (
    <button
      type="button"
      className="bg-purple-500 flex flex-row items-center justify-center space-x-2 p-2 rounded-lg"
      disabled>
      <AiOutlineLoading3Quarters className="animate-spin" />
      <span>Processing...</span>
    </button>
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
 
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        username: login.username,
        password: login.password,
        redirect: false,
      });
      if (res?.error) {
        setLoginStatus("checkinfo");
      } else {
        setLoginStatus("success");
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          router.push("/");
        }, 3000);
      }
    } catch (error) {
      setLoginStatus("error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className={clsx(
        "relative lg:top-52 lg:left-80 xl:top-28 xl:left-[35rem] 2xl:left-[44rem] md:left-52 md:top-52 top-20 left-9",
        {
          "xl:h-[28rem]":
            isLoading || loginStatus === "error" || loginStatus === "checkinfo",
          "xl:h-96": !isLoading,
        },
        "xl:w-96 h-[24rem] w-80  bg-white border-2 rounded-lg"
      )}>
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
            type="password"
            fullWidth
            onChange={handleChange}
            value={login.password}
          />

          <div className="flex xl:flex-row flex-col xl:items-center xl:justify-between items-start justify-center space-y-2 xl:space-x-11 xl:space-y-0">
            <button onClick={handleToggleAccount}>
              <p className="text-xs text-blue-700 text-nowrap">
                Did you have an account?
              </p>
            </button>
            <button>
              <p className="text-xs text-blue-700 text-nowrap">
                Forgot your password
              </p>
            </button>
          </div>
          <ColorButton variant="contained" size="large" fullWidth type="submit">
            Login
          </ColorButton>
        </form>
        {isLoading && loadingIcon}
        {loginStatus === "checkinfo" && !isLoading ? <p>Check your login info</p> : null}
        {loginStatus === "error" && !isLoading ? <p>Something went wrong</p> : null}
      </div>
      {/* {showSuccessPopup && (
        <Modal open={showSuccessPopup}>
          <ActionSuccessfully ref={null}>
            Login Successfully
          </ActionSuccessfully>
        </Modal>
      )} */}
    </div>
  );
};

export default Login;
