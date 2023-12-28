import { Input, Textarea } from "@nextui-org/react";
import { ButtonThemed } from '.'
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function ContactForm() {

  return (
    <div id="card" className="rounded-xl max-w-full bg-white font-semibold dark:bg-custom-dark-3 overflow-hidden relative flex flex-col shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 mb-16">
      <div id="cardBody" className="p-5">
        <form className="font-normal dark:text-custom-dark-text text-custom-dark-1">
          <h4 className="text-custom-dark-2 dark:text-gray-50 text-lg tracking-wide">Sent Me An Email</h4>
          <div className="mt-5 text-base">
            <Input
            type="name"
            placeholder="name"
            labelPlacement="outside"
            radius="sm"
            size="lg"
            startContent={
              <FaUser className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            classNames={{
              inputWrapper: "bg-custom-gray-1 dark:bg-custom-dark-4 shadow-none	border-custom-gray-text dark:border-custom-dark-2 ",
              input: "opacaty-0 text-base ",
            }}
            />
          </div>
          <div className="mt-5">
            <Input
            type="email"
            placeholder="email"
            labelPlacement="outside"
            radius="sm"
            size="lg"
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
            label="messege"
            size="lg"
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
              >
              Submit
            </ButtonThemed>
          </div>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
            <input type="email" name="email" 
              className="mt-1 px-5 py-3 bg-custom-gray-1 ring-2	ring-slate-200 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-2" 
              placeholder="you@example.com" 
              />
          </label>
          
        </form>
      </div>
    </div>
  )
}
