import Title from "../atoms/title";
import Section, { SectionContent } from "../layout/section";

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionContent className="flex gap-12">
        <p>
          Velit cupidatat commodo adipisicing est consequat mollit veniam mollit deserunt ad
          consequat cillum labore dolor. Tempor ullamco in aute deserunt irure proident laboris
          nostrud magna officia. Consectetur cillum aute elit mollit. Et enim eu ad pariatur.
        </p>
      </SectionContent>
      <Title>Projects</Title>
    </Section>
  );
}
