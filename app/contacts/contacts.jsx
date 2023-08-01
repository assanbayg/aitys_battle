"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  };

  return (
    <div className="flex flex-col-reverse items-center justify-center gap-10 py-10 md:flex-row">
      <form
        className="flex flex-col gap-3 rounded-md bg-white bg-opacity-10 p-10 shadow-xl"
        ref={form}
        onSubmit={sendEmail}
      >
        <p className="text-3xl">Contact to developer</p>
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="rounded-lg"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="rounded-lg"
          />
        </div>
        <textarea name="message" placeholder="Message" className="rounded-lg" />
        <input
          type="submit"
          value="Send"
          className="rounded-lg bg-red-300 px-5 py-2 text-white"
        />
      </form>
      <div className="flex flex-col items-center justify-center rounded-md bg-white bg-opacity-10 p-10 shadow-lg">
        <p className="text-3xl">Meet the developer</p>
        <p>Gauhar Assanbay - 16 years old student who has lack of sleep.</p>
      </div>
    </div>
  );
};
