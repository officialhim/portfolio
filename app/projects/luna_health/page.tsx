import ConclusionSection from "../components/ConclusionSection";
import DesignSection from "./DesignSection";
import HeroSection from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl space-y-32">
      <HeroSection
        title="Luna Health App Design"
        subtitle="Luna Health: Illuminating Your Path to Wellness"
        tags={["UI/UX Design", "Mobile design", "Health"]}
        timeline="Aug - Oct 2023"
        sector="Insurance, Health, Medical"
        role="UI/UX Design, Product, Branding"
        imageSrc="/l4.png"
      />
      <ProblemSection
        title="Problem"
        subtitle="The healthcare industry is complex and often difficult for individuals to navigate. This complexity can lead to individuals not receiving the care they need, or incurring high costs for their care."
        content="Furthermore, Luna Health is committed to guiding its customers through the healthcare process. This includes providing resources to help individuals understand their insurance policies and the healthcare system, as well as offering support in finding and accessing quality care. By doing so, Luna Health aims to illuminate the path to wellness, ensuring that individuals can navigate the healthcare system with ease and confidence. Through these efforts, Luna Health is working to transform the healthcare experience, making it more accessible and less stressful for all."
        text="Luna Health recognizes that the current healthcare landscape can be daunting for many individuals. The complexity of insurance policies, the high cost of medical procedures, and the difficulty in finding and accessing quality care are all barriers to individuals receiving the healthcare they need. Luna Health aims to simplify this process by offering clear and comprehensive health insurance plans. These plans are designed to cover a wide range of medical procedures and treatments, ensuring that individuals can access the care they need without incurring prohibitively high costs."
      />
      <SolutionSection
        images={["/l2.png", "/l1.png", "/l3.png"]}
        title="As Luna Health, we are committed to simplifying the healthcare journey for our customers. We aim to provide comprehensive and affordable health insurance plans that cover a wide range of medical procedures and treatments."
        description="At Luna Health, we believe that everyone deserves access to quality healthcare. That’s why we’ve designed our health insurance plans to be both comprehensive and affordable. We cover a wide range of medical procedures and treatments, ensuring that our customers can receive the care they need without worrying about the cost."
      />
      <DesignSection />
      <ConclusionSection />
    </main>
  );
}
