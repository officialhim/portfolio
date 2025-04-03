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
            As the creators of MajiMaji App, we first need to understand our
            brief. We’re creating a mobile app that allows users to order water
            and manage their deliveries in Kenya. We need to understand our
            target audience, their water needs, and how they engage with
            delivery apps.
          </DesignCard>

          <DesignCard title="2. Research">
            We then delve into extensive research. We study the current water
            delivery market, competitor apps, and the latest trends in delivery
            services. We also conduct user surveys and interviews to understand
            our potential users’ needs and expectations from a water delivery
            app.
          </DesignCard>
          <DesignCard title="3. Define">
            Based on our research, we define our design challenge. We aim to
            create a user-friendly app that provides a seamless water ordering
            and delivery experience.
          </DesignCard>
          <DesignCard title="4. Ideate">
            In this phase, I generated a wide range of creative ideas for
            MajiMaji’s design and functionality. We start brainstorming ideas
            for app features, user interface design, and user experience
            elements. We think about innovative ways to facilitate water
            ordering and delivery management.
          </DesignCard>
          <DesignCard title="5. Prototype">
            I then translated my ideas into tangible prototypes. I started with
            low-fidelity prototypes like wireframes and mockups, which allowed
            me to visualize the layout and structure of Majimaji. I then moved
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
