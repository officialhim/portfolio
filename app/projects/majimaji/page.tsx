import ConclusionSection from "../components/ConclusionSection";
import DesignSection from "./DesignSection";
import HeroSection from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl space-y-32">
      <HeroSection
        title="MajiMaji Water Delivery App"
        subtitle="MajiMaji App: Quenching Thirst at Your Doorstep"
        tags={["UI/UX Design", "Agency", "Delivery"]}
        timeline="Jan - May 2021"
        sector="Water, Agency, Delivery"
        role="UI/UX Design, Development, Branding"
        imageSrc="/m.png"
      />
      <ProblemSection
        title="Problem"
        subtitle="In many parts of Kenya, access to clean water can be a challenge. People often have to travel long distances to fetch water, which is time-consuming and physically demanding. MajiMaji App aims to address this issue by providing a convenient and reliable water delivery service."
        content="The MajiMaji App is more than just a water delivery service; it’s a life-changing solution for many Kenyans. By providing a reliable and convenient water delivery service, we aim to alleviate the burden of fetching water and contribute to improving the quality of life for our users."
        text="Access to clean water is crucial for maintaining good health and hygiene. By ensuring reliable delivery of clean water, MajiMaji App plays a vital role in preventing waterborne diseases and promoting better health among its users."
      />
      <SolutionSection
        images={["/m-7.png", "/m-5.png", "/m-6.png", "/m-4.png"]}
        title="As MajiMaji App, we aim to revolutionize the water delivery experience by providing a platform for ordering water and managing deliveries. We believe that access to clean water should be easy and convenient."
        description="By integrating these features into one app, we provide a comprehensive solution for water delivery. MajiMaji App is not just a water delivery app; it’s a solution for a fundamental human need. In summary, MajiMaji App addresses the need for a more convenient and reliable water delivery service. By allowing users to order water and manage their deliveries within the same platform, we make water delivery more efficient and accessible. With MajiMaji App, clean water is just a tap away"
      />
      <DesignSection />
      <ConclusionSection />
    </main>
  );
}
