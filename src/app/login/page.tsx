"use client";
import React, { useState } from "react";
import Login from "../UI/Component/Account/Login";
import Register from "../UI/Component/Account/Register";

const Page = () => {
  const [toggleAccount, setToggleAccount] = useState(false);
  const handleToggleAccount = () => {
    setToggleAccount(!toggleAccount);
  };
  return (
    <div className="p-20 relative bottom-20 right-32">
      {!toggleAccount ? (
        <Login handleToggleAccount={handleToggleAccount} />
      ) : (
        <div className="relative top-36">
          <Register
            handleCloseAccount={handleToggleAccount}
            handleToggleAccount={handleToggleAccount}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
