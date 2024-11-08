'use client'
import { extendVariants, Button } from "@nextui-org/react";

export const ButtonThemed = extendVariants(Button, {
  variants: {
    color: {
      gradiant: "text-background-3 bg-gradient-to-b from-primary-1 to-primary-2 font-bold rounded-small ",
      gradiantGreen: "text-white bg-gradient-to-r from-custom-blue to-green-500 font-medium	rounded-small ",
      gray: "text-p-text bg-button-color rounded-small font-medium",
      link: "text-link-text font-medium p-0 m-0",
      border: "text-primary-1 font-semibold border-primary-1 tracking-wide hover:transition	ease delay-100 hover:ring-1 ring-primary-2",
      // tag: "text-custom-dark-text bg-custom-gray-1 dark:bg-custom-dark-3 dark:text-custom-dark-text rounded-small ",
    },
  },
});