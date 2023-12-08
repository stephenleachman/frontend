'use client'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

import { useSearchParams } from "next/navigation";

export default function ProjectModal(  ) {
  
  const {isOpen, onOpen, onClose} = useDisclosure();
  const backdrop = "blur";
  const searchParams = useSearchParams();

  return (
    <>
    <Modal 
      size="3xl" 
      isOpen={isOpen} 
      onClose={onClose} 
      backdrop={backdrop} 
      className="dark:bg-custom-dark-3 overflow-hidden relative flex flex-col drop-shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h1 className="text-2xl dark:text-custom-gray-1 text-custom-dark-2 font-semibold dark:font-normal text-center mb-5">
              Modal
              </h1>
            </ModalHeader>
            <ModalBody>
              <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis.
                Pellentesque sit amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis.
                Pellentesque sit amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  </>
  );
}
