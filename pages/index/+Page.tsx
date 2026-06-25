import SmoothScrollProvider from "@/components/atoms/smoothScrollProvider";
import Background from "@/components/layout/background";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ContacSection from "@/components/sections/contact";
import PresentationSection from "@/components/sections/presentation";
import LastProjectsSection from "@/components/sections/projects";
import SkillSection from "@/components/sections/skills";
import TabsProvider from "@/providers/TabsProvider";

export default function Page() {
  return (
    <>
      <TabsProvider defaultTab="presentation">
        <Header />
        <main className="flex flex-col gap-10">
          <SmoothScrollProvider>
            <PresentationSection />
            <LastProjectsSection />
            <SkillSection />
            <ContacSection />
            <Background />
          </SmoothScrollProvider>
        </main>
        {/* <Footer /> */}
      </TabsProvider>
    </>
  );
}
