import ConclusionSection from "../components/ConclusionSection";
import DesignSection from "./DesignSection";
import HeroSection from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl space-y-32">
      <HeroSection
        title="eWallet Banking WebApp Design"
        subtitle="BankSecure: Your Trustworthy Online Banking Solution"
        tags={["UI/UX Design", "Ecomerce", "Banking"]}
        timeline="Jan - Mar 2022"
        sector="Banking, Analytics, Commerce"
        role="UI/UX Design, Product"
        imageSrc="/e1.png"
      />
      <ProblemSection
        title="Problem"
        subtitle="In the rapidly evolving digital age, managing and transacting money online has become a necessity. However, many online banking platforms are complex, not user-friendly, and lack robust security measures. This leads to a decrease in user trust and satisfaction, and an increase in the risk of financial fraud. The challenge is to design ‘eWallet’, an online banking platform that is easy to use, highly secure, and provides a seamless banking experience to meet the diverse needs of users across various demographics."
        content="The complexity and lack of user-friendliness in many online banking platforms highlighted the need for a strong focus on UX design. This led to an approach where user needs, behaviors, and pain points were extensively researched to create an intuitive and easy-to-navigate interface. The design process involved creating user personas, mapping user journeys, and iterative testing to ensure the platform is user-centric"
        text="To address the decrease in user trust, transparency became a key factor in the design process. This included designing clear and concise communication about how user data is used and stored, and how transactions are processed. The need to cater to diverse users necessitated an inclusive design approach. The design process considered users with varying levels of digital literacy, different languages, and accessibility needs. This led to the inclusion of features like multi-language support, voice commands, and easy readability."
      />
      <SolutionSection
        images={["/e4.png", "/e2.png", "/e3.png", "/e5.png"]}
        title="eWallet’ is a proposed solution to online banking challenges. It’s user-centric, secure, and designed for ease of use."
        description="This solution statement provides a comprehensive response to the problem statement, outlining how ‘eWallet’ addresses each of the identified issues. It sets a clear direction for the project and serves as a guide for all design and development activities. It also communicates the value proposition of ‘eWallet’ to stakeholders and users. Remember, a good solution statement should be specific, measurable, achievable, relevant, and time-bound (SMART). It should clearly define the solution, explain why it’s important, and set clear objectives for your project. Good luck with your project!"
      />
      <DesignSection />
      <ConclusionSection />
    </main>
  );
}
