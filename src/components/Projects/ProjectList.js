import { StackDivider, VStack } from "@chakra-ui/react";
import Project from "./Project";

export default function ProjectList({ projects }) {
  return (
    <VStack
      spacing="1.5rem"
      divider={<StackDivider borderColor="white" />}
      w="75%"
      align="start"
    >
      {projects.map((p, i) => {
        let key = `project_${i}`;
        return p.title && <Project key={key} project={{ key, ...p }} />;
      })}
    </VStack>
  );
}
