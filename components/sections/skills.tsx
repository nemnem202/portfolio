import Title from "../atoms/title";
import AppleActivityCard from "../kokonutui/activity-card";
import Section, { SectionContent } from "../layout/section";

export default function SkillSection() {
  return (
    <Section id="skills">
      <SectionContent className="flex gap-12">
        <div className="grid size-full grid-cols-10 grid-rows-2">
          <div className="col-start-1 col-end-4 row-start-1 flex justify-start items-center">
            <AppleActivityCard title="Programming" />
          </div>
          <div className="col-start-3 col-end-6 row-start-2 flex justify-start items-center">
            <AppleActivityCard title="Maquetting" className="col-start-2 row-start-4" />
          </div>
        </div>
      </SectionContent>
      <Title>Skills</Title>
    </Section>
  );
}
