import ConclusionSection from "../components/ConclusionSection";
import DesignSection from "../components/DesignSection";
import HeroSection from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl space-y-32">
      <HeroSection
        title="Zara Homes Design"
        subtitle="Premier Property Solutions: Your Gateway to Dream Homes."
        tags={["UI/UX Design", "Branding", "Real Estate"]}
        timeline="Jan - May 2023"
        sector="Real Estate, Agency, Landscape"
        role="UI/UX Design, Development, Branding"
        imageSrc="/product-page.png"
      />
      <ProblemSection
        title="Problem"
        subtitle="In the real estate market, potential buyers often struggle to find properties that match their specific needs and preferences. The search process can be time-consuming and frustrating due to the lack of personalized filtering options and intuitive user interfaces on many real estate websites."
        content="As a designer, I recognized that the problem of a lack of personalized filtering options and intuitive user interfaces in real estate websites had significant implications for both the market and potential buyers. I understood that this could lead to a frustrating and time-consuming property search process for clients, potentially resulting in missed opportunities and lower conversion rates. From a market perspective, I was aware that real estate companies failing to provide a user-friendly and personalized experience could lose potential clients to competitors, leading to a loss of market share and reduced revenue."
        text="This problem statement directly influenced my design process. It highlighted the need for a user-centric approach, emphasizing the importance of understanding the needs and preferences of the target users. In response to this problem, I conducted user research to understand the pain points, needs, and preferences of my users. I used these insights to inform my design decisions, such as implementing personalized filtering options and designing an intuitive user interface.
        My design process also involved iterative testing and refinement to ensure that the website effectively addressed the identified problem. This included usability testing to assess the effectiveness of the search and filter functions, and A/B testing to determine which design elements most effectively drove user engagement and satisfaction. By focusing on solving this problem, I was able to align my design process with delivering a product that not only meets the needs of its users but also provides a satisfying and efficient user experience. This, in turn, can lead to increased user engagement, higher conversion rates, and positive word-of-mouth for the website."
      />
      <SolutionSection
        images={["/dashboard-1.png", "/z1.png", "/z2.png"]}
        title="I created a personalized, user-friendly real estate website with an advanced search feature for filtering properties by various criteria like location, price, type, and bedrooms."
        description="Additionally, i incorporated a recommendation system that suggests properties based on the user’s search history and preferences. The website also features high-quality images and detailed property descriptions to provide users with all the information they need to make informed decisions."
      />
      <DesignSection />
      <ConclusionSection />
    </main>
  );
}
