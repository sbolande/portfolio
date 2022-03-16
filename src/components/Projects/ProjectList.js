import { StackDivider, VStack } from "@chakra-ui/react";
import Project from "./Project";

export default function ProjectList({ projects }) {
  return (
    <VStack divider={<StackDivider borderColor="white" />}>
      {projects.map((p) => (
        <Project project={p} />
      ))}
    </VStack>
  );
}
