import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";

export function ContactTextarea({
  name,
  label,
  placeholder,
  required,
  autoFocus,
}) {
  return (
    <FormControl isRequired={required}>
      <FormLabel htmlFor={name} color="cyan.300">
        {label}
      </FormLabel>
      <Textarea
        name={name}
        placeholder={placeholder}
        focusBorderColor="cyan.400"
        required={required}
        autoFocus={autoFocus}
      />
    </FormControl>
  );
}

export function ContactInput({
  name,
  label,
  type,
  placeholder,
  required,
  autoFocus,
  symbol,
}) {
  return (
    <FormControl isRequired={required}>
      <FormLabel htmlFor={name} color="cyan.300">
        {label}
      </FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={symbol} />
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          focusBorderColor="cyan.400"
          required={required}
          autoFocus={autoFocus}
        />
      </InputGroup>
    </FormControl>
  );
}
