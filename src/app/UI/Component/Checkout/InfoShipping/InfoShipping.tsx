"use client";
import { Button, Modal, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ActionSuccessfully from "../../Account/Success/ActionSuccessfully";

const InfoShipping = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    address: { city: "", street: "" },
    phone: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();
  const { status } = useSession();
  const loadingIcon = (
    <button
      type="button"
      className="bg-gray-600 flex flex-row items-center justify-center space-x-2 p-2 rounded-lg"
      disabled>
      <AiOutlineLoading3Quarters className="animate-spin" />
      <span>Processing...</span>
    </button>
  );
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setActive(true);
    if (name === "city" || name === "street") {
      setUserInfo((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setUserInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      if (res.ok) {
        const updatedUserInfo = await res.json();
        setUserInfo(updatedUserInfo);
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          router.refresh();
        }, 2000);
      } else {
        console.error("Failed to update user info");
      }
    } catch (error) {
      console.error("Error updating user info:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className="subpixel-antialiased text-5xl">Billing Detail</p>
      <div className="mt-12 flex flex-col xl:items-start xl:justify-start lg:items-center lg:justify-center space-y-8 w-full ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  xl:items-start xl:justify-start lg:items-center lg:justify-center space-y-8 w-full">
          <TextField
            id="email"
            name="email"
            label="Email"
            value={userInfo.email}
            disabled={true}
            fullWidth
          />
          <TextField
            id="name"
            name="name"
            label="Name"
            value={userInfo.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="phone"
            name="phone"
            label="Phone"
            value={userInfo.phone}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="city"
            name="city"
            label="City"
            value={userInfo.address.city}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="street"
            name="street"
            label="Street"
            value={userInfo.address.street}
            onChange={handleChange}
            fullWidth
          />

          {loading ? (
            loadingIcon
          ) : (
            <Button
              variant="contained"
              color="primary"
              className="mt-12"
              type="submit"
              disabled={active ? false : true}>
              Update Info
            </Button>
          )}
        </form>
        {showSuccessPopup && (
          <Modal open={showSuccessPopup}>
            <ActionSuccessfully ref={null}>
              Update Successfully
            </ActionSuccessfully>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default InfoShipping;
