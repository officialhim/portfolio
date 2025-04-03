import React from "react";
import { DesignCard } from "../components/DesignCard";

export default function DesignSection() {
  return (
    <section>
      <div className="flex gap-3 items-center mb-4">
        <div className="h-2 w-2 dark:bg-white bg-black rounded-full"></div>
        <h1 className="font-medium text-teal-500 text-xl">Design Process</h1>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DesignCard title="1. Understanding the Brief">
            During our initial meetings, we discussed Pipwallet’s goals, target
            audience, and brand values in detail. we first need to understand
            our brief. We’re creating a website that allows users to manage
            their trading activities. We need to understand our target audience,
            their trading needs, and how they engage with trading platforms.
          </DesignCard>

          <DesignCard title="2. Research">
            I began by conducting comprehensive research to understand the needs
            and preferences of my target users. This involved surveys,
            interviews, and user testing with potential users.We then delve into
            extensive research. We study the current trading market, competitor
            platforms, and the latest trends in digital trading. We also conduct
            user surveys and interviews to understand our potential users’ needs
            and expectations from a trading platform.
          </DesignCard>
          <DesignCard title="3. Define">
            After gathering and analyzing the data, I defined the problem in a
            user-centric way. I articulated the users’ needs and problems, which
            helped me focus on what was truly important. I created user personas
            and user stories to better understand and articulate the users’
            needs. I also defined the key features that Pipwallet needed to
            have, such as personalized filtering options, an intuitive user
            interface, and an advanced search feature.
          </DesignCard>
          <DesignCard title="4. Ideate">
            In this phase, I generated a wide range of creative ideas for
            Piwallet’s design and functionality. I used techniques like
            brainstorming, sketching, and mind mapping. I challenged assumptions
            and pushed boundaries to come up with innovative solutions. I also
            sought feedback from others to refine my ideas and ensure they were
            aligned with the users’ needs.
          </DesignCard>
          <DesignCard title="5. Prototype">
            I then translated my ideas into tangible prototypes. I started with
            low-fidelity prototypes like wireframes and mockups, which allowed
            me to visualize the layout and structure of Pipwallet. I then moved
            on to high-fidelity prototypes that closely resembled the final
            product. These prototypes incorporated the key features and design
            elements identified earlier.
          </DesignCard>
          <DesignCard title="6. Test">
            Finally, I tested my prototypes with users. I conducted usability
            tests to see how users interacted with the prototypes and whether
            they could complete tasks successfully. I gathered feedback and
            observed users’ behavior to identify any issues or areas for
            improvement. I then refined the design based on this feedback.
          </DesignCard>
        </div>
      </div>
    </section>
  );
}
