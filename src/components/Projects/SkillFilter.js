import { useState } from "react";
import { Box, Select } from "@chakra-ui/react";

export default function SkillFilter(props) {
  // if this is the first time visiting the page, display default filter differently
  const [firstRender, setFirstRender] = useState(true);

  const skillFrequency = props.skills.reduce((accum, tag) => {
    // filter
    if (tag !== null && tag !== "" && tag !== undefined) {
      // map
      if (accum[tag]) accum[tag]++;
      else accum[tag] = 1;
    }
    return accum;
  }, {});
  const skills = Object.keys(skillFrequency).sort(
    (a, b) => skillFrequency[b] - skillFrequency[a]
  );

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
        <option key="all" style={{ background: "#2D3748" }} value="all">
          {firstRender ? "Filter by Skills" : "All Skills"}
        </option>
        {skills.map((tag, i) => (
          <option key={`skillFilterOpt_${i}`} style={{ background: "#2D3748" }}>
            {tag}
          </option>
        ))}
      </Select>
    </Box>
  );
}
