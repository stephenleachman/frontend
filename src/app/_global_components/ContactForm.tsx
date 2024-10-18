'use client'
import { Input, Textarea } from "@nextui-org/react";
import { ButtonThemed } from '.'
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  if(loading) return toast.loading("Sending Message...");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    if (!data.name) {
      return toast.error("Please enter your name");
    }
    if (!data.email) {
      return toast.error("Please enter your email");
    }
    if (!data.message) {
      return toast.error("Please enter a message");
    }

    setLoading(false);

    const response = await fetch("../api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      setData({
        name: "",
        email: "",
        message: "",
      }); 
      setLoading(false);
      toast.success(`Hey ${data.name}, your message was sent successfully! Check your inbox!`);
    }
  };

  return (
    <div id="card" className="rounded-xl max-w-full bg-white font-semibold dark:bg-custom-dark-3 overflow-hidden relative flex flex-col shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 mb-16">
      <div id="cardBody" className="p-5">
        <form 
          className="font-normal dark:text-custom-dark-text text-custom-dark-1" 
          name="contact_form" 
          method="POST" 
          onSubmit={sendEmail}
          >
          <h4 className="text-custom-dark-2 dark:text-gray-50 text-lg tracking-wide">📩 Sent Me An Email</h4>
          <div className="mt-5 text-base">
            <Input
            type="text"
            name="name"
            placeholder="name"
            labelPlacement="outside"
            radius="sm"
            size="lg"
            required 
            value={data.name}
            onChange={(e) =>
              setData({ ...data, name: e.target.value })
            }
            startContent={
              <FaUser className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            classNames={{
              inputWrapper: "bg-custom-gray-1 dark:bg-custom-dark-4 shadow-none border-custom-gray-text dark:border-custom-dark-2",
              input: "opacaty-0 text-base",
            }}
            />
          </div>
          <div className="mt-5">
            <Input
            type="email"
            name="email"
            placeholder="email"
            labelPlacement="outside"
            radius="sm"
            size="lg"
            // required 
            value={data.email}
            onChange={(e) =>
              setData({ ...data, email: e.target.value })
            }
            startContent={
              <IoIosMail className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            }
            classNames={{
              inputWrapper: "bg-custom-gray-1 dark:bg-custom-dark-4 shadow-none	border-custom-gray-text dark:border-custom-dark-2",
              input: "opacaty-0 text-base",
              
            }}
            />
          </div>
          <div className="mt-5">
          <Textarea
            label="message"
            name="message"
            size="lg"
            required 
            value={data.message}
            onChange={(e) =>
              setData({ ...data, message: e.target.value })
            }
            classNames={{
              base: "w-full",
              input: "h-[100px]",
              inputWrapper: "bg-custom-gray-1 dark:bg-custom-dark-4 shadow-none	border-custom-gray-text dark:border-custom-dark-2"
            }}
            disableAutosize
          />
          </div>
          <div className="mt-5 flex justify-end">
            <ButtonThemed 
              color="gray" 
              size="lg"
              radius="sm"
              type="submit"
              >
              Submit
            </ButtonThemed>
          </div>          
        </form>
      </div>
    </div>
  )
};

export default ContactForm;