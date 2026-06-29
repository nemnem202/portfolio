import Title from "../atoms/title";
import Section, { SectionContent } from "../layout/section";

export default function PresentationSection() {
  return (
    <Section id="presentation">
      <SectionContent className="flex gap-12">
        <div className="grid grid-cols-15 grid-rows-10 size-full">
          <div className="col-start-6 col-end-9 row-start-4 row-end-8 size-full flex items-center justify-center">
            <div className="bg-primary rounded-full w-full aspect-square"></div>
          </div>
          <div className="col-start-1 col-end-6 row-start-1 row-end-4 size-full flex items-center justify-center">
            <div className="bg-primary size-full rounded-lg"></div>
          </div>
          <div className="col-start-2 col-end-5 row-start-7 row-end-10 size-full flex items-center justify-center">
            <div className="bg-primary size-full rounded-lg"></div>
          </div>
          <div className="col-start-10 col-end-16 row-start-2 row-end-5 size-full flex items-center justify-center">
            <div className="bg-primary size-full rounded-lg"></div>
          </div>
          <div className="col-start-9 col-end-16 row-start-8 row-end-11 size-full flex items-center justify-center">
            <div className="bg-primary size-full rounded-lg"></div>
          </div>
        </div>
      </SectionContent>
      <Title>Me</Title>
    </Section>
  );
}
