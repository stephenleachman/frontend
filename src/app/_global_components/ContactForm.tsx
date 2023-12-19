import { Input, Textarea } from "@nextui-org/react";
import { ButtonThemed } from '.'
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function ContactForm() {
  return (
    <div id="card" className="rounded-xl max-w-full bg-white font-semibold dark:bg-custom-dark-3 overflow-hidden relative flex flex-col drop-shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 mb-16">
      <div id="cardBody" className="p-5">
        <form className="font-normal dark:text-custom-dark-text text-custom-dark-1">
          <h4 className="text-custom-dark-2 dark:text-gray-50 text-lg tracking-wide">Sent Me An Email</h4>
          <div className="mt-5">
            <Input
            type="name"
            placeholder="Whats your name"
            labelPlacement="outside"
            variant="faded"
            radius="sm"
            startContent={
              <FaUser className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            }
            classNames={{
              inputWrapper: "bg-custom-gray-1 dark:bg-custom-dark-4 shadow-none	border-custom-gray-text dark:border-custom-dark-2"
            }}
            />
          </div>
          <div className="mt-5">
            <Input
            type="email"
            placeholder="Enter your email"
            labelPlacement="outside"
            variant="faded"
            radius="sm"
            startContent={
              <IoIosMail className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            }
            classNames={{
              inputWrapper: "bg-custom-gray-1 dark:bg-custom-dark-4 shadow-none	border-custom-gray-text dark:border-custom-dark-2",
              input: "opacaty-0"
            }}
            />
          </div>
          <div className="mt-5">
          <Textarea
            label="Description"
            classNames={{
              base: "w-full",
              input: "h-[80px]",
              inputWrapper: "bg-custom-gray-1 dark:bg-custom-dark-4 shadow-none	border-custom-gray-text dark:border-custom-dark-2"
            }}
            variant="faded"
            disableAutosize
          />
          </div>
         

          <div className="mt-5 flex justify-end">
            <ButtonThemed 
              color="gray" 
              size="lg"
              radius="sm"
              className="font-medium dark:text-custom-gray-1 text-custom-dark-2"
              >
              Submit
            </ButtonThemed>
          </div>
        </form>
      </div>
    </div>
  )
}
