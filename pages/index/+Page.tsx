import SmoothScrollProvider from "@/components/atoms/smoothScrollProvider";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ContacSection from "@/components/sections/contact";
import LastProjectsSection from "@/components/sections/lastProjects";
import PresentationSection from "@/components/sections/presentation";
import SkillSection from "@/components/sections/skills";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <SmoothScrollProvider>
          <PresentationSection />
          <LastProjectsSection />
          <SkillSection />
          <ContacSection />
        </SmoothScrollProvider>
      </main>
      <Footer />
    </>
  );
}
