import React, { useState, useRef } from "react";

const ContactInput = (props) => {
  const handleChange = (event) => {
    props.passContactInformation({
      ...props.contactInformation,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    props.passContactInformation({
      ...props.contactInformation,
      photo: URL.createObjectURL(file),
    });
  };

  return (
    <section className="flex-1 bg-neutral-200 rounded-[10px] p-3 shadow-lg">
      <h2 className="flex-1  text-neutral-700 font-bold font-poppins pb-3">
        Contact Information
      </h2>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={props.contactInformation.firstName}
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={props.contactInformation.lastName}
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={props.contactInformation.title}
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />

        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          value={props.contactInformation.address}
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />

        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone number"
          value={props.contactInformation.phoneNumber}
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />

        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={props.contactInformation.email}
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />

        <textarea
          name="aboutMe"
          id="aboutMe"
          cols="30"
          rows="6"
          placeholder="About me"
          value={props.contactInformation.aboutMe}
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        ></textarea>

        <label htmlFor="photo" className="text-neutral-800">
          Photo
        </label>

        <input
          type="file"
          accept="image/*"
          name="photo"
          id="photo"
          className="text-neutral-700"
          onChange={handleFileChange}
        />
      </form>
    </section>
  );
};

export default ContactInput;
