import Title from "../atoms/title";
import ParallaxBox from "../layout/parallaxBox";
import Section, { SectionContent } from "../layout/section";
import { SequenceItem } from "../layout/sequenceItem";
import Carousel from "../ui/Carousel";
import SpotlightCard from "../ui/SpotlightCard";

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionContent className="flex gap-12">
        <ParallaxBox className="flex-1 ">
          <SequenceItem index={0}>
            <Carousel
              baseWidth={700}
              autoplay={false}
              autoplayDelay={3000}
              pauseOnHover={false}
              loop={false}
              round={false}
              items={Array.from({ length: 4 }).map((_, index) => ({
                id: index,
                content: <ProfileCard />,
              }))}
            />
          </SequenceItem>
        </ParallaxBox>
        <SequenceItem className="size-full flex items-center justify-center" index={1}>
          <p className="max-w-2xl">
            Reprehenderit labore exercitation sint ex labore ut eiusmod eu esse. Anim duis
            consectetur culpa in cupidatat cillum. Ut qui culpa dolor velit pariatur Lorem duis amet
            est quis elit. Amet laborum tempor dolor mollit veniam adipisicing ipsum. Ipsum deserunt
            cupidatat magna tempor duis mollit. Fugiat proident mollit esse ut consequat aute
            excepteur tempor duis dolor culpa quis magna ex.
          </p>
        </SequenceItem>
      </SectionContent>
      <Title>Projects</Title>
    </Section>
  );
}

export function ProfileCard() {
  return (
    <SpotlightCard
      className="h-120 aspect-video custom-spotlight-card"
      spotlightColor="rgba(123, 36, 241, 0.3)"
    ></SpotlightCard>
  );
}
