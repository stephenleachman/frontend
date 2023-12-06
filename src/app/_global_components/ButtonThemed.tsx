'use client'
import { extendVariants, Button } from "@nextui-org/react";

export const ButtonThemed = extendVariants(Button, {
  variants: {
    color: {
      gradiant: "text-custom-dark-3 bg-gradient-to-br from-custom-blue to-custom-green font-semibold	rounded-small ",
      gray: "text-custom-dark-3 bg-custom-gray dark:bg-custom-dark-4 dark:text-custom-dark-text rounded-small ",
    },
  },
});