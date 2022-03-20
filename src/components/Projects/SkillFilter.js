import { useState } from "react";
import { Box, Select } from "@chakra-ui/react";

export default function SkillFilter(props) {
  // if this is the first time visiting the page, display default filter differently
  const [firstRender, setFirstRender] = useState(true);

  return (
    <Box>
      <Select
        cursor="pointer"
        onChange={props.onChange}
        onClick={() => {
          if (firstRender) setFirstRender(false);
        }}
        bg="gray.800"
        color="cyan.500"
        w="150px"
      >
        <option style={{ background: "#2D3748" }} value="all">
          {firstRender ? "Filter by Skills" : "All Skills"}
        </option>
        {props.skills.map((tag) => (
          <option style={{ background: "#2D3748" }}>{tag}</option>
        ))}
      </Select>
    </Box>
  );
}
