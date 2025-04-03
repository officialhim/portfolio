import ConclusionSection from "../components/ConclusionSection";
import DesignSection from "./DesignSection";
import HeroSection from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl space-y-32">
      <HeroSection
        title="Tunify App"
        subtitle="Tunify: Tune into the World of Music and Share the Rhythm"
        tags={["UI/UX Design", "Branding", "Music"]}
        timeline="Jun - Aug 2023"
        sector="Music, , Streaming"
        role="UI/UX Design, Development, Branding"
        imageSrc="/t.png"
      />
      <ProblemSection
        title="Problem"
        subtitle="In the digital age, music lovers are seeking a seamless, interactive, and social experience for music streaming. They want to discover new music, create playlists, and share their musical tastes with friends. However, existing platforms may not offer an easy and integrated solution for all these needs. This is where our mobile app, Tunify, comes into play."
        content="Tunify addresses the need for a more interactive and social music streaming experience. By allowing users to stream music and share playlists within the same platform, we make music listening more enjoyable and social. With Tunify, users can discover new music, curate their playlists, and share their musical journey with others. It’s a harmonious blend of music streaming and social interaction."
        text="This problem directly influenced my design process. It highlighted the need for a user-centric approach, emphasizing the importance of understanding the needs and preferences of the target users. In response to this problem, I conducted user research to understand the pain points, needs, and preferences of my users. I used these insights to inform my design decisions, such as implementing personalized filtering options and designing an intuitive user interface.
        My design process also involved iterative testing and refinement to ensure that the website effectively addressed the identified problem. This included usability testing to assess the effectiveness of the search and filter functions, and A/B testing to determine which design elements most effectively drove user engagement and satisfaction. By focusing on solving this problem, I was able to align my design process with delivering a product that not only meets the needs of its users but also provides a satisfying and efficient user experience. This, in turn, can lead to increased user engagement, higher conversion rates, and positive word-of-mouth for the website."
      />
      <SolutionSection
        images={["/t-1.png", "/t-2.png", "/t-3.png", "/t-4.png", "/t-5.png"]}
        title="As Tunify, we aim to revolutionize the music streaming experience by not only providing a platform for streaming music but also enabling users to share their playlists."
        description="We believe music is a social experience, and sharing playlists allows users to express themselves and connect with others. By integrating these features into one app, we provide a comprehensive solution for music lovers. Tunify is not just a music streaming app; it’s a community for music enthusiasts."
      />
      <DesignSection />
      <ConclusionSection />
    </main>
  );
}
