import { Fragment } from "react";
import { Text, Wrap } from "@chakra-ui/react";
import { BsStarFill } from "react-icons/bs";

import SkillTag from "../UI/SkillTag";
import Section from "./Section";

const bio = require("../../store/bio.json");

export default function BioDisplay() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
