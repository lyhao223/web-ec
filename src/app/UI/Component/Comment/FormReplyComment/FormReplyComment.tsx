import { TextField } from "@mui/material";
import React from "react";

const FormReplyComment = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full">
      <form className="flex flex-col items-start justify-start w-full space-y-5">
        <TextField
          id="comment"
          label="Your comment"
          placeholder="Your Comment *"
          fullWidth
          rows={6}
          multiline
          variant="outlined"
        />
        <div className="flex flex-row items-center justify-start space-x-3 w-full">
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            autoComplete="off"
            type="text"
            fullWidth
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
        </div>
      </form>
    </div>
  );
};

export default FormReplyComment;
