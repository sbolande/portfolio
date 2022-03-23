import { useState, useRef } from "react";
import {
  chakra,
  theme,
  useToast,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import { HiAtSymbol, HiOutlineUser } from "react-icons/hi";
import { BiPaperPlane, BiBuildings, BiCheck } from "react-icons/bi";

import emailjs from "@emailjs/browser";
import { ContactInput, ContactTextarea } from "./ContactInput";
// Set Environment variables
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

export default function ContactForm() {
  const toast = useToast();
  const toastId = "already-sent";

  const form = useRef();

  const [messageSent, setMessageSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // if successful message has already been sent require reload
    if (messageSent) {
      if (!toast.isActive(toastId)) {
        toast({
          id: toastId,
          title: "Already Sent",
          description:
            "You've already sent a message. If you want to send another please reload the page.",
          status: "info",
          position: "bottom",
          duration: 9000,
          isClosable: true,
        });
      }
      return;
    }

    // else send message to Email.js
    setIsLoading(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(
        (res) => {
          if (res.text === "OK") setMessageSent(true);
          toast({
            id: "success",
            title: "Message Sent",
            description: "I'll get back to you as soon as I can!",
            status: "success",
            position: "bottom",
            duration: 9000,
            isClosable: true,
          });
        },
        (err) => {
          console.log(err);
          setMessageSent(false);
          toast({
            id: "error",
            title: "Uh Oh!",
            description: "There was a problem sending your message.",
            status: "error",
            position: "bottom",
            duration: 9000,
            isClosable: true,
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <chakra.form
      ref={form}
      id="contactForm"
      margin="auto"
      w="85vw"
      maxW="600px"
      onSubmit={sendEmail}
    >
      <VStack spacing="1rem">
        <ContactInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="johndoe@example.com"
          symbol={<HiAtSymbol color={theme.colors.cyan["400"]} />}
          required
          autoFocus
        />
        <ContactInput
          name="name"
          label="Name"
          placeholder="John Doe"
          symbol={<HiOutlineUser color={theme.colors.cyan["400"]} />}
          required
        />
        <ContactInput
          name="company"
          label="Company"
          placeholder="Company / Organization / Group"
          symbol={<BiBuildings color={theme.colors.cyan["400"]} />}
        />
        <ContactTextarea
          name="message"
          label="Message"
          placeholder="..."
          required
        />
        <Button
          variant="outline"
          colorScheme="cyan"
          type="submit"
          _hover={{
            bg: !messageSent && "cyan.400",
            color: !messageSent && "cyan.800",
            cursor: !messageSent ? "pointer" : "default",
          }}
          cursor={!messageSent ? "pointer" : "default"}
          leftIcon={!messageSent ? <BiPaperPlane /> : <BiCheck />}
          loadingText="Sending"
          isLoading={isLoading}
          isDisabled={messageSent}
        >
          {!messageSent ? "Send" : "Message Sent"}
        </Button>
      </VStack>
    </chakra.form>
  );
}
