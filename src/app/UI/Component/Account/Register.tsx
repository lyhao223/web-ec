import React, { FormEvent, use, useState } from "react";
import FlyModal from "../../Animation/FlyModal";
import { Button, ButtonProps, Modal, styled, TextField } from "@mui/material";
import Link from "next/link";
import { purple } from "@mui/material/colors";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/services/redux/store";
import { registerUser } from "@/app/services/redux/slices/userSlice";
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

  const dispatch = useDispatch<AppDispatch>();
  const userStatus = useSelector((state: RootState) => state.userSlice.status);
  const errorStatus = useSelector((state: RootState) => state.userSlice.error);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    lat: "",
    long: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const userData = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      name: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      address: {
        city: formData.city,
        street: formData.street,
        number: formData.number,
        zipcode: formData.zipcode,
        geolocation: {
          lat: formData.lat,
          long: formData.long,
        },
      },
      phone: formData.phone,
    };
    dispatch(registerUser(userData));
    console.log(userData);
  };

  return (
    <div className="relative lg:top-52 lg:left-72 xl:-top-3 xl:left-[29rem] 2xl:left-[37rem] md:left-52 md:top-52 top-56 left-0 h-[46rem] w-[40rem] bg-white border-2 rounded-lg">
      <button
        className="absolute top-3 right-5 rounded-full hover:bg-red-600 bg-gray-600 transition-all duration-200 ease-linear p-2"
        onClick={handleCloseAccount}>
        <MdClose size={16} color="white" />
      </button>
      <div className="flex flex-col items-center justify-center p-8 space-y-8">
        <h1 className="text-4xl subpixel-antialiased tracking-widest font-medium">
          Register
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-center space-y-5 ">
          <div className="flex flex-row items-start justify-start space-x-7">
            <TextField
              id="firstname"
              name="firstname"
              label="First Name"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.firstname}
            />
            <TextField
              id="lastname"
              name="lastname"
              label="Last Name"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.lastname}
            />
          </div>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            required
            onChange={handleChange}
            value={formData.email}
          />
          <TextField
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange}
            value={formData.username}
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            variant="outlined"
            fullWidth
            type="password"
            required
            onChange={handleChange}
            value={formData.password}
          />
          <TextField
            id="phone"
            name="phone"
            label="Phone"
            variant="outlined"
            fullWidth
            type="tel"
            required
            onChange={handleChange}
            value={formData.phone}
          />
          <div className="flex flex-row items-start justify-between space-x-7">
            <TextField
              id="city"
              name="city"
              label="City"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="number"
              name="number"
              label="Number"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.number}
            />
            <TextField
              id="zipcode"
              name="zipcode"
              label="Zipcode"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.zipcode}
            />
          </div>
          <TextField
            id="street"
            name="street"
            label="Street"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={formData.street}
          />
          <div className="flex flex-row items-start justify-center">
            <button onClick={handleToggleAccount}>
              <p className="text-xs text-blue-700">Do you have an account?</p>
            </button>
          </div>
          <ColorButton variant="contained" size="large" fullWidth type="submit">
            Register
          </ColorButton>
          {userStatus === "loading" && <p>Logging in...</p>}

          {userStatus === "failed" && <p>Error: {errorStatus}</p>}

          {userStatus === "succeeded" && <p>Done</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
