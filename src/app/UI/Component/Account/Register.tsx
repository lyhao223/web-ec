import React, { FormEvent, use, useState } from "react";
import { Button, ButtonProps, Modal, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import { MdClose } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/navigation";
import ActionSuccessfully from "./Success/ActionSuccessfully";
import FlyModal from "../../Animation/FlyModal";

interface RegisterProps {
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
}: RegisterProps) => {
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    name: "",
    city: "",
    street: "",
    phone: "",
  });

  const [registerStatus, setRegisterStatus] = useState<string | null | any>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loadingIcon = (
    <button
      type="button"
      className="bg-purple-500 flex flex-row items-center justify-center space-x-2 p-2 rounded-lg"
      disabled>
      <AiOutlineLoading3Quarters className="animate-spin" />
      <span>Processing...</span>
    </button>
  );
  const router = useRouter();

  const [error, setError] = useState({
    email: false,
    username: false,
    password: false,
    phone: false,
    name: false,
    city: false,
    street: false,
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [helperText, setHelperText] = useState({
    email: "",
    username: "",
    password: "",
    phone: "",
    name: "",
    city: "",
    street: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    let isValid = true;
    let errorMessage = "";

    if (name === "email" && !validateEmail(value)) {
      isValid = false;
      errorMessage = "Invalid email format";
    } else if (
      (name === "name" || name === "city" || name === "street") &&
      value.trim() === null
    ) {
      isValid = false;
      errorMessage = "This field is required";
    } else if (name === "password" && value.length < 6) {
      isValid = false;
      errorMessage = "Password must be at least 6 characters";
    } else if (name === "phone" && !/^\d+$/.test(value)) {
      isValid = false;
      errorMessage = "Invalid phone number";
    }

    setError({ ...error, [name]: !isValid });
    setHelperText({ ...helperText, [name]: errorMessage });
  };
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setRegisterStatus(null);

    if (
      !formData.email ||
      !formData.username ||
      !formData.password ||
      !formData.name ||
      !formData.city ||
      !formData.street ||
      !formData.phone
    ) {
      setIsLoading(false);
      return;
    }
    const userData = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      name: formData.name,
      address: {
        city: formData.city,
        street: formData.street,
      },
      phone: formData.phone,
    };
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (res.status === 201) {
        setRegisterStatus("success");
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          if (handleToggleAccount) {
            handleToggleAccount(); // Switch to Login component
          }
        }, 2000);
      } else if (res.status === 409) {
        setRegisterStatus("checkInfo");
      } else {
        setRegisterStatus("error");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative lg:top-52 lg:left-72 xl:-top-3 xl:left-[29rem] 2xl:left-[37rem] 2xl:top-12 md:left-52 md:top-52 top-0 left-10 xl:h-[46rem] xl:w-[40rem] w-[20rem] bg-white border-2 rounded-lg">
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
          <TextField
            id="name"
            name="name"
            label="Full Name"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={formData.name}
            error={error.name}
            helperText={helperText.name}
          />

          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            type="text"
            required
            onChange={handleChange}
            value={formData.email}
            error={error.email}
            helperText={helperText.email}
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
            error={error.username}
            helperText={helperText.username}
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
            error={error.password}
            helperText={helperText.password}
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
            error={error.phone}
            helperText={helperText.phone}
          />
          <div className="flex flex-row items-start justify-between space-x-7">
            <TextField
              id="city"
              name="city"
              label="City"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.city}
            />

            <TextField
              id="street"
              name="street"
              label="Street"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.street}
            />
          </div>
          <div className="flex flex-row items-start justify-center">
            <button onClick={handleToggleAccount}>
              <p className="text-xs text-blue-700">Do you have an account?</p>
            </button>
          </div>
          <ColorButton variant="contained" size="large" fullWidth type="submit">
            Register
          </ColorButton>
        </form>
        {isLoading && loadingIcon}
        {registerStatus === "success" && <p>Loading...</p>}
        {registerStatus === "checkInfo" && (
          <p>Username or email or phone already taken</p>
        )}
        {registerStatus === "error" && (
          <p>Registration failed. Please try again.</p>
        )}
        {showSuccessPopup && (
          <Modal open={showSuccessPopup}>
            <ActionSuccessfully>Register Successfully</ActionSuccessfully>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Register;
