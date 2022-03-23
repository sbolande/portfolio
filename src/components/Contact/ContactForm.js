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
import { BiPaperPlane, BiBuildings } from "react-icons/bi";

export default function ContactForm() {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "I'll get back to you as soon as I can!",
      status: "success",
      position: "bottom",
      containerStyle: {
        marginBottom: "4rem",
      },
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <chakra.form margin="auto" w="85vw" maxW="600px" onSubmit={handleSubmit}>
      <VStack spacing="1rem">
        <FormControl isRequired>
          <FormLabel htmlFor="email" color="cyan.300">
            Email Address
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<HiAtSymbol color={theme.colors.cyan["400"]} />}
            />
            <Input
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              focusBorderColor="cyan.400"
              required
              autoFocus
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="name" color="cyan.300">
            Name
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<HiOutlineUser color={theme.colors.cyan["400"]} />}
            />
            <Input
              id="name"
              placeholder="John Doe"
              focusBorderColor="cyan.400"
              required
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="org" color="cyan.300">
            Company
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BiBuildings color={theme.colors.cyan["400"]} />}
            />
            <Input
              id="org"
              placeholder="Company / Organization / Group"
              focusBorderColor="cyan.400"
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="message" color="cyan.300">
            Message
          </FormLabel>
          <Textarea
            id="message"
            placeholder="..."
            focusBorderColor="cyan.400"
            required
          />
        </FormControl>
        <Button
          variant="outline"
          colorScheme="cyan"
          type="submit"
          _hover={{ bg: "cyan.400", color: "cyan.800" }}
          leftIcon={<BiPaperPlane />}
        >
          Send
        </Button>
      </VStack>
    </chakra.form>
  );
}
