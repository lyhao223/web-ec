import React, { useState } from "react";
import FlyModal from "../../Animation/FlyModal";
import { Button, ButtonProps, Modal, styled, TextField } from "@mui/material";
import Link from "next/link";
import { purple } from "@mui/material/colors";
import { MdClose } from "react-icons/md";
interface LoginProps {
  openAccount?: boolean;
  handleOpenAccount?: () => void;
  handleCloseAccount?: () => void;
  handleToggleAccount?: () => void;
}
const Register = ({
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
  return (
    <div className="relative lg:top-16 lg:left-80 xl:top-28 xl:left-[35rem] 2xl:left-[70rem] md:left-52 md:top-52 top-56 left-5 h-96 w-96 bg-white border-2 rounded-lg">
      <button
        className="absolute top-3 right-5 rounded-full hover:bg-red-600 bg-gray-600 transition-all duration-200 ease-linear p-2"
        onClick={handleCloseAccount}>
        <MdClose size={16} color="white" />
      </button>
      <div className="flex flex-col items-center justify-center p-8 space-y-8">
        <h1 className="text-4xl subpixel-antialiased tracking-widest font-medium">
          Register
        </h1>
        <div className="flex flex-col items-start justify-start w-full space-y-4">
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
        </div>
        <div className="flex flex-row items-start justify-center">
          <button onClick={handleToggleAccount}>
            <p className="text-xs text-blue-700">Do you have an account?</p>
          </button>
        </div>
        <ColorButton variant="contained" size="large" fullWidth>
          Register
        </ColorButton>
      </div>
    </div>
  );
};

export default Register;
