import { useState } from "react";
import { Box, Flex, Heading, Spacer, VStack } from "@chakra-ui/react";

import ProjectList from "./ProjectList";
import SkillFilter from "./SkillFilter";

const projects = require("../../store/projects.json");

export default function ProjectDisplay() {
  const [displayProjects, setDisplayProjects] = useState(projects);

  const filterChangeHandler = (event) => {
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
    <VStack
      spacing="2rem"
      bg="gray.800"
      color="white"
      cursor="default"
      marginBottom="2rem"
    >
      <Flex align="stretch" w="90%">
        <Box>
          <Heading as="h1" size="xl" noOfLines="1">
            My Projects
          </Heading>
        </Box>
        <Spacer />
        <SkillFilter
          onChange={filterChangeHandler}
          skills={projects.flatMap((p) => p.skills.map((s) => s.tag))}
        />
      </Flex>
      <ProjectList projects={displayProjects} />
    </VStack>
  );
}
