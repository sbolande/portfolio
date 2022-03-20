import { useState } from "react";
import { Box, Text, keyframes, useInterval } from "@chakra-ui/react";

const blink = keyframes`
  0% { opacity: 0; }
  49% { opacity: 0; }
  50% { opacity: 1; }
`;

const Cursor = ({ color }) => {
  return (
    <Box as="span" animation={`${blink} 0.8s infinite`} color={color}>
      ▮
    </Box>
  );
};

export default function ConsoleText(props) {
  const [myString, setMyString] = useState("");
  const [index, setIndex] = useState(0);
  const chars = props.children.split("");

  useInterval(
    () => {
      setMyString(myString + chars[index]);
      setIndex(index + 1);
    },
    chars.length > index ? 120 : null
  );

  return (
    <Text maxW="100%" noOfLines="1" color={props.color}>
      <Box as="span" color={props.cursorColor ?? props.color}>
        {"> "}
      </Box>
      {myString}
      <Cursor color={props.cursorColor ?? props.color} />
    </Text>
  );
}
