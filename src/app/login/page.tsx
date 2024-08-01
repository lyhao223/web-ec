"use client";
import React, { useState } from "react";
import Login from "../UI/Component/Account/Login";
import Register from "../UI/Component/Account/Register";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [toggleAccount, setToggleAccount] = useState(false);
  const { status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    return router.push("/accountdetail");
  }
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