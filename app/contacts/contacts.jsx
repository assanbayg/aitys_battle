"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (e.target.user_email.value === "") {
      alert("Please enter your email address.");
      return;
    }
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
    <div className="flex flex-col-reverse  items-center justify-center gap-10 py-10  md:flex-row">
      <form
        className="blur-box flex flex-col gap-3 rounded-xl p-10 shadow-xl "
        ref={form}
        onSubmit={sendEmail}
      >
        <p className="text-3xl text-yellow-100">Contact to developer</p>
        <p className="text-xl">Any suggestions and feedback are welcome!</p>
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            className="rounded-lg"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
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
      <div className="blur-box flex w-auto flex-col rounded-xl shadow-lg md:w-1/2 md:flex-row">
        <div className="flex flex-col p-10">
          <p className="text-3xl text-yellow-100">Meet the developer</p>
          <p>Gauhar Assanbay - 16 years old student who has lack of sleep.</p>
        </div>
        <Image
          src={"/me.png"}
          width={300}
          height={300}
          alt="developer"
          className="hidden md:block"
        />
      </div>
    </div>
  );
};
