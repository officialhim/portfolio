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
            As the creators of eWallet, we first need to understand our brief.
            We’re creating a web/mobile app that allows online banking and
            account management. We need to understand our target audience, their
            banking needs, and how they engage with banking apps.
          </DesignCard>

          <DesignCard title="2. Research">
            We then delve into extensive research. We study the current online
            banking market, competitor apps, and the latest trends in digital
            banking. We also conduct user surveys and interviews to understand
            our potential users’ needs and expectations from a banking app
          </DesignCard>
          <DesignCard title="3. Define">
            Based on our research, we define our design challenge. We aim to
            create a user-friendly app that provides a seamless online banking
            and account management experience.
          </DesignCard>
          <DesignCard title="4. Ideate">
            We start brainstorming ideas for app features, user interface
            design, and user experience elements. We think about innovative ways
            to facilitate online banking and account management.
          </DesignCard>
          <DesignCard title="5. Prototype">
            We select the most promising ideas and turn them into prototypes.
            These could be wireframes or interactive mockups of the eWallet app.
            We ensure that these prototypes align with our users’ needs and
            provide a seamless banking experience.
          </DesignCard>
          <DesignCard title="6. Test">
            Finally, we test our prototypes. We gather user feedback, observe
            user interactions with the app, and make necessary refinements. This
            iterative process helps us improve the app’s design and
            functionality, ensuring a great user experience.
          </DesignCard>
        </div>
      </div>
    </section>
  );
}
