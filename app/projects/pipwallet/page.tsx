import ConclusionSection from "../components/ConclusionSection";
import DesignSection from "./DesignSection";
import HeroSection from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl space-y-32">
      <HeroSection
        title="Pipwallet Trding Agency"
        subtitle="PipWallet: Navigate the Trading Market with Ease"
        tags={["UI/UX Design", "Branding", "Trading"]}
        timeline="Jan - May 2023"
        sector="Trading, Agency, Forex"
        role="UI/UX Design, Development, Branding"
        imageSrc="/pipwallet.svg"
      />
      <ProblemSection
        title="Problem"
        subtitle="In the fast-paced world of trading, traders need a platform that is reliable, easy to use, and efficient. They need to be able to manage their trades, track their progress, and make informed decisions quickly and easily. However, many existing platforms may not offer an integrated solution for all these needs. This is where our website, PipWallet, comes in."
        content="As a designer, I recognized that the problem of a lack of personalized filtering options and intuitive user interfaces in real estate websites had significant implications for both the market and potential buyers. I understood that this could lead to a frustrating and time-consuming property search process for clients, potentially resulting in missed opportunities and lower conversion rates. From a market perspective, I was aware that real estate companies failing to provide a user-friendly and personalized experience could lose potential clients to competitors, leading to a loss of market share and reduced revenue."
        text="This problem statement directly influenced my design process. It highlighted the need for a user-centric approach, emphasizing the importance of understanding the needs and preferences of the target users. In response to this problem, I conducted user research to understand the pain points, needs, and preferences of my users. I used these insights to inform my design decisions, such as implementing personalized filtering options and designing an intuitive user interface.
        My design process also involved iterative testing and refinement to ensure that the website effectively addressed the identified problem. This included usability testing to assess the effectiveness of the search and filter functions, and A/B testing to determine which design elements most effectively drove user engagement and satisfaction. By focusing on solving this problem, I was able to align my design process with delivering a product that not only meets the needs of its users but also provides a satisfying and efficient user experience. This, in turn, can lead to increased user engagement, higher conversion rates, and positive word-of-mouth for the website."
      />
      <SolutionSection
        images={["/pipwallet.svg"]}
        title="As PipWallet, we aim to revolutionize the trading experience by providing a platform for managing trades efficiently. We believe that trading should be easy and accessible to everyone."
        description="By integrating these features into one website, we provide a comprehensive solution for trading. PipWallet is not just a trading platform; it’s a solution for a fundamental trading need. In summary, PipWallet addresses the need for a more efficient and reliable trading platform. By allowing users to manage their trades and track their progress within the same platform, we make trading more efficient and accessible. With PipWallet, successful trading is just a click away. 💰"
      />
      <DesignSection />
      <ConclusionSection />
    </main>
  );
}
