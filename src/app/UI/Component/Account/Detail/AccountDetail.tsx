import { Button, Modal, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { encodeEmail } from "@/app/services/utils/encodeEmail";
import { useRouter } from "next/navigation";
import { set } from "mongoose";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ActionSuccessfully from "../Success/ActionSuccessfully";

const AccountDetail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [updateSuccess, setUpdateSuccess] = useState("");
  const [activeButton, setActiveButton] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
    name: "",
    address: { city: "", street: "" },
    phone: "",
  });
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
  // const encode = encodeEmail(userInfo.email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setActiveButton(true);
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
  const loadingIcon = (
    <button
      type="button"
      className="bg-purple-500 flex flex-row items-center justify-center space-x-2 p-2 rounded-lg"
      disabled>
      <AiOutlineLoading3Quarters className="animate-spin" />
      <span>Processing...</span>
    </button>
  );
  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
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
        const updatedUser = await res.json();
        setUserInfo(updatedUser);
        setUpdateSuccess("success");
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          router.refresh();
        }, 2000);
      } else {
        setUpdateSuccess("error");
      }
    } catch (error) {
      console.error("Error updating user info:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative top-5 p-36">
      {status === "loading" && <div>Loading...</div>}
      <h1 className="subpixel-antialiased text-5xl tracking-wide font-medium ">
        Welcome
      </h1>
      <form onSubmit={handleForm} className="w-auto mt-12">
        <div className="flex flex-col items-start justify-start space-y-4">
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={userInfo.name}
            onChange={handleChange}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={userInfo.email}
            disabled={true}
          />
          <TextField
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
            value={userInfo.username}
            disabled={true}
          />
          <TextField
            id="phone"
            name="phone"
            label="Phone"
            type="number"
            variant="outlined"
            fullWidth
            value={userInfo.phone}
            onChange={handleChange}
          />
          <TextField
            id="city"
            name="city"
            label="City"
            variant="outlined"
            fullWidth
            value={userInfo.address.city}
            onChange={handleChange}
          />
          <TextField
            id="street"
            name="street"
            label="Street"
            variant="outlined"
            fullWidth
            value={userInfo.address.street}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row items-start justify-between mt-12">
          {loading ? (
            loadingIcon
          ) : (
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={activeButton ? false : true}>
              Edit
            </Button>
          )}
        </div>
      </form>
      {showSuccessPopup && (
        <Modal open={showSuccessPopup}>
          <ActionSuccessfully>Update Successfully</ActionSuccessfully>
        </Modal>
      )}
    </div>
  );
};

export default AccountDetail;
