"use client";
import { Button, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const InfoShipping = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    address: { city: "", street: "" },
    phone: "",
  });

  const router = useRouter();
  const { status } = useSession();

  const fetchUserInfo = async () => {
    try {
      const res = await fetch("/api/user");
      if (res.ok) {
        const data = await res.json();
        setUserInfo(data);
      } else {
        console.error("Failed to fetch user info");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchUserInfo();
    }
  }, [status]);

  const handleUpdateInfo = () => {
    router.push("/accountdetail");
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className="subpixel-antialiased text-5xl">Billing Detail</p>
      <div className="mt-12 flex flex-col items-start justify-start space-y-8 w-full ">
        <TextField
          id="email"
          label="Email"
          value={userInfo.email}
          disabled={true}
          fullWidth
        />
        <TextField
          id="name"
          label="Name"
          value={userInfo.name}
          disabled={true}
          fullWidth
        />
        <TextField
          id="phone"
          label="Phone"
          value={userInfo.phone}
          disabled={true}
          fullWidth
        />
        <TextField
          id="city"
          label="City"
          value={userInfo.address.city}
          disabled={true}
          fullWidth
        />
        <TextField
          id="street"
          label="Street"
          value={userInfo.address.street}
          disabled={true}
          fullWidth
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        className="mt-12"
        onClick={handleUpdateInfo}>
        Update Info
      </Button>
    </div>
  );
};

export default InfoShipping;
