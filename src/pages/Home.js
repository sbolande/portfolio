import { Heading, Image, Text, VStack, Wrap } from "@chakra-ui/react";
import { BsStarFill } from "react-icons/bs";

import useDocumentTitle from "../hooks/useDocumentTitle";
import ConsoleText from "../components/Home/ConsoleText";
import Section from "../components/Home/Section";
import SkillTag from "../components/UI/SkillTag";

const bio = require("../store/bio.json");

export default function Home() {
  useDocumentTitle();

  return (
    <VStack spacing="2rem" align="stretch">
      <Heading as="h1" size="2xl" w="100%" textAlign="center" cursor="default">
        <ConsoleText color="cyan.500" cursorColor="cyan.700">
          Seth Bolander
        </ConsoleText>
      </Heading>
      <Image
        borderRadius="full"
        boxSize="360px"
        src="https://avatars.githubusercontent.com/u/44790090?s=460&u=c974f13558dc3c245d5741b54274b2c74cb322a6&v=4"
        alt="@sbolande"
        border="3px solid"
        borderColor="cyan.600"
        alignSelf="center"
      />
      <Section header="About Me">
        {bio.aboutMe.text.map((paragraph, i) => (
          <Text key={`aboutMe_para_${i}`}>{paragraph}</Text>
        ))}
      </Section>
      <Section header="Skills & Technologies">
        <Wrap spacing="0.8rem" shouldWrapChildren>
          {bio.skills.primary.map((skill, i) => (
            <SkillTag
              key={`skilltag_${i}`}
              name={skill.tag}
              url={skill.url}
              icon={skill.starred && BsStarFill}
              colorScheme="green"
            />
          ))}
          {bio.skills.secondary.map((skill, i) => (
            <SkillTag
              key={`skilltag_${i}`}
              name={skill.tag}
              url={skill.url}
              icon={skill.starred && BsStarFill}
              colorScheme="blue"
            />
          ))}
          {bio.skills.tertiary.map((skill, i) => (
            <SkillTag
              key={`skilltag_${i}`}
              name={skill.tag}
              url={skill.url}
              icon={skill.starred && BsStarFill}
              colorScheme="yellow"
            />
          ))}
        </Wrap>
      </Section>
    </VStack>
  );
}
