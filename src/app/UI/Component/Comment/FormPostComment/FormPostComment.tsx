"use client";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const FormPostComment = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    comment: "",
  });

  const [error, setError] = React.useState({
    name: false,
    email: false,
    comment: false,
  });

  const [helperText, setHelperText] = React.useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let valid = true;
    let newError = {
      name: false,
      email: false,
      comment: false,
      save: false,
    };

    let newHelperText = {
      name: "",
      email: "",
      comment: "",
      save: "",
    };

    if (formData.name === "") {
      newError.name = true;
      newHelperText.name = "Name is required";
      valid = false;
    }

    if (!validateEmail(formData.email)) {
      newError.email = true;
      newHelperText.email = "Email is not valid";
      valid = false;
    }

    if (formData.comment === "") {
      newError.comment = true;
      newHelperText.comment = "Comment is required";
      valid = false;
    }

    setError(newError);
    setHelperText(newHelperText);

    if (valid) {
      console.log(formData);
    }
  };
  return (
    <div className="flex xl:flex-col lg:flex-col items-start justify-start w-full">
      <form
        onSubmit={handleSubmit}
        className="flex xl:flex-col lg:flex-col flex-col items-start justify-start w-full space-y-5">
        <TextField
          id="comment"
          label="Your comment"
          placeholder="Your Comment *"
          fullWidth
          rows={6}
          multiline
          variant="outlined"
          error={error.comment}
          helperText={helperText.comment}
          onChange={handleInputChange}
        />
        <div className="flex xl:flex-row lg:flex-row items-center justify-start space-x-3 w-full">
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            autoComplete="off"
            type="text"
            fullWidth
            error={error.name}
            helperText={helperText.name}
            onChange={handleInputChange}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            autoComplete="off"
            fullWidth
            error={error.email}
            helperText={helperText.email}
            onChange={handleInputChange}
          />
        </div>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: grey[800],
                "&.Mui-checked": {
                  color: grey[700],
                },
              }}
              id="save"
              required
            />
          }
          label="Save my name, email, and website in this browser for the next time I comment."
        />
        <button
          className="bg-black text-white p-5 w-72 rounded-md"
          type="submit">
          Post comment
        </button>
      </form>
    </div>
  );
};

export default FormPostComment;
