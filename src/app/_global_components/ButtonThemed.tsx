import { extendVariants, Button } from "@nextui-org/react";

export const ButtonThemed = extendVariants(Button, {
  variants: {
    color: {
      gradiant: "text-custom-dark-3 bg-gradient-to-br from-custom-blue to-custom-green font-semibold	rounded-small ",
    },
  },
});