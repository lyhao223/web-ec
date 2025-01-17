"use client";
import React, { Fragment, useEffect, useState } from "react";
import ContentFirstPage from "@/app/UI/Reusable/ContentFirstPage";
import contact from "@/../../assets/content/contact.jpg";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import InfoContact from "../UI/Reusable/InfoContact";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { TextField } from "@mui/material";
import Button from "../UI/Reusable/Button";

const icons = [
  { id: 1, icon: <FaFacebook size={20} /> },
  { id: 2, icon: <FaInstagram size={20} /> },
  { id: 3, icon: <FaTwitter size={20} /> },
  { id: 4, icon: <FaTiktok size={20} /> },
];

const renderIcons = icons.map((icon) => (
  <div className="cursor-pointer" key={icon.id}>
    {icon.icon}
  </div>
));

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ordernumber: "",
    message: "",
  });

  useEffect(() => {
    document.title =
      "Contact Us - Will help you every step of the way - Dunk Store";
  }, []);

  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    ordernumber: false,
    message: false,
  });

  const [helperText, setHelperText] = useState({
    name: "",
    email: "",
    phone: "",
    ordernumber: "",
    message: "",
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
      phone: false,
      message: false,
      ordernumber: false,
    };
    let newHelperText = {
      name: "",
      email: "",
      phone: "",
      message: "",
      ordernumber: "",
    };

    if (formData.name === "") {
      newError.name = true;
      newHelperText.name = "Name is required";
      valid = false;
    }

    if (!validateEmail(formData.email)) {
      newError.email = true;
      newHelperText.email = "Invalid email";
      valid = false;
    }

    if (formData.phone === "") {
      newError.phone = true;
      newHelperText.phone = "Phone is required";
      valid = false;
    }

    if (formData.message === "") {
      newError.message = true;
      newHelperText.message = "Message is required";
      valid = false;
    }

    setError(newError);
    setHelperText(newHelperText);
    if (valid) {
      // Submit form data
      console.log("Form submitted", formData);
    }
  };

  return (
    <Fragment>
      <ContentFirstPage
        img={contact.src}
        contentTitle="Contact Us"
        linkText="Contact Us"
      />
      <div className="grid xl:grid-cols-5 grid-rows-1 gap-4 xl:px-20 p-2 my-12">
        <div className="grid col-span-2 gap-y-6 w-80">
          <InfoContact
            firstContent="Email: example@email.com"
            secondContent="Phone: 02 01061245741"
            firstIcon={<MdOutlineMailOutline size={20} />}
            secondIcon={<MdPhoneEnabled size={20} />}>
            Quick contact
          </InfoContact>
          <InfoContact firstContent="2307 Beverley Rd Brooklyn, New York 11226 United States.">
            Address
          </InfoContact>
          <InfoContact firstContent="Monday - Friday: 9:00 AM - 5:00 PM">
            Support Hours
          </InfoContact>
          <p className="subpixel-antialiased tracking-wide font-semibold text-xl">
            Social Media
          </p>
          <div className="flex flex-row items-start justify-start space-x-3">
            {renderIcons}
          </div>
        </div>
        <div className="grid col-span-3 row-span-2 gap-y-4 w-fit">
          <h1 className="subpixel-antialiased tracking-tight font-semibold text-4xl">
            How can we help?
          </h1>
          <span>
            Let us know your questions, thoughts and ideas via the form below.
            Our support team will get back to you as soon as possible.
          </span>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-start space-y-4">
            <div className="flex flex-row items-start justify-start space-x-2 w-full">
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                autoComplete="off"
                fullWidth
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                error={error.name}
                helperText={helperText.name}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                autoComplete="off"
                fullWidth
                value={formData.email}
                onChange={handleInputChange}
                error={error.email}
                helperText={helperText.email}
              />
            </div>
            <div className="flex flex-row items-start justify-start space-x-2 w-full">
              <TextField
                id="phone"
                label="Phone"
                variant="outlined"
                autoComplete="off"
                fullWidth
                value={formData.phone}
                onChange={handleInputChange}
                error={error.phone}
                helperText={helperText.phone}
              />
              <TextField
                id="ordernumber"
                label="Order Number"
                variant="outlined"
                autoComplete="off"
                fullWidth
                value={formData.ordernumber}
              />
            </div>
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              autoComplete="off"
              fullWidth
              rows={4}
              multiline
              value={formData.message}
              onChange={handleInputChange}
              error={error.message}
              helperText={helperText.message}
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Page;
