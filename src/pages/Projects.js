import ProjectDisplay from "../components/Projects/ProjectDisplay";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Projects() {
  useDocumentTitle("Projects");
  return <ProjectDisplay />;
}
