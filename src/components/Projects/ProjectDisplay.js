import { Box, Flex, Heading, Select, Spacer, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ProjectList from "./ProjectList";
const projects = require("../../store/projects.json");

export default function ProjectDisplay() {
  // if this is the first time visiting the page, display default filter differently
  const [firstRender, setFirstRender] = useState(true);
  const [displayProjects, setDisplayProjects] = useState(projects);

  const filterChangeHandler = (event) => {
    if (firstRender) setFirstRender(false);
    const value = event.target.value;
    if (value === "all") {
      setDisplayProjects(projects);
      return;
    }
    setDisplayProjects(
      projects.filter((p) => p.skills.some((s) => s.tag === value))
    );
  };

  return (
    <VStack spacing="2rem" bg="gray.800" color="white" cursor="default">
      <Flex align="stretch" w="90%">
        <Box>
          <Heading as="h1" size="xl" noOfLines="1">
            My Projects
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Select onChange={filterChangeHandler} bg="gray.800" color="white">
            <option value="all">
              {firstRender ? "Filter by Skills" : "All Skills"}
            </option>
            {projects
              .flatMap((p) => p.skills.map((s) => s.tag))
              .filter((val, i, self) => self.indexOf(val) === i)
              .map((tag) => (
                <option>{tag}</option>
              ))}
          </Select>
        </Box>
      </Flex>
      <ProjectList projects={displayProjects} />
    </VStack>
  );
}
