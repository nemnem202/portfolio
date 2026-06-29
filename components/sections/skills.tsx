import Title from "../atoms/title";
import AppleActivityCard from "../kokonutui/activity-card";
import Section, { SectionContent } from "../layout/section";

export default function SkillSection() {
  return (
    <Section id="skills">
      <SectionContent className="flex gap-12">
        <div className="grid size-full grid-cols-4 grid-rows-6">
          <div className="col-start-1 row-start-1 row-end-3 flex justify-start items-center">
            <AppleActivityCard title="Programming" />
          </div>
          <div className="col-start-2 row-start-5 row-end-7 flex justify-start items-center">
            <AppleActivityCard title="Ci/CD" />
          </div>
          <div className="col-start-4 row-start-3 row-end-4 flex justify-start items-center">
            <AppleActivityCard title="Mock-up creation" />
          </div>

          <div className="col-start-2 col-end-4 row-start-2 row-end-4 flex justify-start items-center">
            <p className="text-left mx-auto max-w-180">
              Amet deserunt est est amet occaecat duis cillum voluptate in irure consectetur
              laborum. Excepteur dolor dolor incididunt elit sit laborum voluptate ad dolor anim
              est. Tempor commodo nostrud officia dolore consectetur commodo nostrud voluptate dolor
              pariatur quis. Eu sint dolore commodo elit voluptate culpa sunt in elit cillum Lorem.
            </p>
          </div>
        </div>
      </SectionContent>
      <Title>Skills</Title>
    </Section>
  );
}
