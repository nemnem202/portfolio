import Title from "../atoms/title";
import ParallaxBox from "../layout/parallaxBox";
import Section, { SectionContent } from "../layout/section";
import Carousel from "../ui/Carousel";

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionContent className="flex gap-12">
        <ParallaxBox className="flex-1 ">
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
        </ParallaxBox>
        <div className="size-full flex items-center justify-center">
          <p className="max-w-2xl">
            Reprehenderit labore exercitation sint ex labore ut eiusmod eu esse. Anim duis
            consectetur culpa in cupidatat cillum. Ut qui culpa dolor velit pariatur Lorem duis amet
            est quis elit. Amet laborum tempor dolor mollit veniam adipisicing ipsum. Ipsum deserunt
            cupidatat magna tempor duis mollit. Fugiat proident mollit esse ut consequat aute
            excepteur tempor duis dolor culpa quis magna ex.
          </p>
        </div>
      </SectionContent>
      <Title>Projects</Title>
    </Section>
  );
}

export function ProfileCard() {
  return (
    <div className="mx-auto transition-all duration-300 hover:shadow-2xl">
      <div className="h-60 bg-gradient-to-r from-indigo-500 to-purple-600" />
      <div className="px-6 pb-6 text-center">
        <div className="relative -mt-16 mb-4 inline-block">
          <img
            className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-white shadow-md"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
            alt="Avatar"
          />
          <span className="absolute bottom-2 right-2 block h-4 w-4 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 tracking-tight">Alex Morgan</h3>
        <p className="text-sm font-medium text-indigo-600 mb-3">Développeur Full-Stack</p>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          Passionné par la création d'interfaces fluides, le code propre et les architectures
          modernes.
        </p>
        <button className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
          Voir le profil
        </button>
      </div>
    </div>
  );
}
