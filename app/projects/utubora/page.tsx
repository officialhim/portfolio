import ConclusionSection from "../components/ConclusionSection";
import DesignSection from "./DesignSection";
import HeroSection from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl space-y-32">
      <HeroSection
        title="Utubora Academy"
        subtitle="Utubora: Building Brighter Futures, One Donation at a Time"
        tags={["UI/UX Design", "Next14", "Tailwind CSS"]}
        timeline="Oct - Feb 2024"
        sector="Education, Charity"
        role="UI/UX Design, Development, Branding"
        imageSrc="/utu.jpg"
      />
      <ProblemSection
        title="Problem"
        subtitle="In many parts of the world, access to quality education can be a challenge. Utubora, a school in Kenya, aims to provide quality education to its students. However, to achieve its mission, Utubora relies on the generosity of donors."
        content="Access to quality education is a fundamental right, but unfortunately, it remains a challenge in many parts of the world, including Kenya. Schools like Utubora are striving to provide quality education to their students, but they often face resource constraints. These constraints can limit the school’s ability to provide essential learning materials, hire qualified teachers, and maintain a conducive learning environment. Furthermore, the families of many students may not have the financial means to support their children’s education, making the situation even more challenging."
        text="The issue is further compounded by the fact that potential donors who can contribute to the cause often lack a reliable platform to do so. They may be willing to contribute, but without a trustworthy and convenient platform, their goodwill may not translate into tangible support for the school. This gap between the school’s needs and potential donors represents a significant problem that needs to be addressed."
      />
      <SolutionSection
        images={["/u-1.png", "/u-2.png", "/u-3.png", "/u-4.png"]}
        title="As the Utubora charity website, we aim to bridge the gap between Utubora and potential donors. We provide a platform where users can learn about Utubora, its mission, and its impact."
        description="The Utubora charity website serves as a solution to this problem. It provides a platform where potential donors can learn about the school, its mission, and its impact. More importantly, it offers a seamless and secure process for making donations. Whether it’s a one-time donation or a recurring contribution, the website makes it easy for donors to contribute to the school’s cause. By facilitating the donation process, the Utubora website ensures that the school can continue to provide quality education to its students. It’s a solution that brings us one step closer to making quality education accessible to all."
      />
      <DesignSection />
      <ConclusionSection />
    </main>
  );
}
