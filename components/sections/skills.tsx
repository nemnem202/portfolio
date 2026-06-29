import Title from "../atoms/title";
import AppleActivityCard from "../kokonutui/activity-card";
import ParallaxBox from "../layout/parallaxBox";
import Section, { SectionContent } from "../layout/section";
import { LazyMountSequenceItem, SequenceItem } from "../layout/sequenceItem";

export default function SkillSection() {
  return (
    <Section id="skills">
      <SectionContent className="flex gap-12">
        <div className="hidden md:grid size-full grid-cols-4 grid-rows-6">
          <LazyMountSequenceItem
            index={1}
            className="col-start-1 row-start-1 row-end-3 flex justify-center items-center"
          >
            <ParallaxBox>
              <AppleActivityCard title="Programming" />
            </ParallaxBox>
          </LazyMountSequenceItem>
          <LazyMountSequenceItem
            index={2}
            className="col-start-2 row-start-5 row-end-7 flex justify-center items-center"
          >
            <ParallaxBox>
              <AppleActivityCard title="Ci/CD" />
            </ParallaxBox>
          </LazyMountSequenceItem>

          <LazyMountSequenceItem
            index={3}
            className="col-start-4 row-start-3 row-end-4 flex justify-center items-center"
          >
            <ParallaxBox>
              <AppleActivityCard title="Mock-up creation" />
            </ParallaxBox>
          </LazyMountSequenceItem>

          <SequenceItem
            index={0}
            className="col-start-2 col-end-4 row-start-2 row-end-4 flex justify-center items-center"
          >
            <p className="max-w-2xl">
              Amet deserunt est est amet occaecat duis cillum voluptate in irure consectetur
              laborum. Excepteur dolor dolor incididunt elit sit laborum voluptate ad dolor anim
              est. Tempor commodo nostrud officia dolore consectetur commodo nostrud voluptate dolor
              pariatur quis. Eu sint dolore commodo elit voluptate culpa sunt in elit cillum Lorem.
            </p>
          </SequenceItem>
        </div>
      </SectionContent>
      <Title>Skills</Title>
    </Section>
  );
}
