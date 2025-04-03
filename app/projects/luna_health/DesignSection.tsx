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
            As Luna Health, our first step in the design process is to fully
            understand the brief. This involves grasping the problem we’re
            trying to solve, the needs of our customers, and the goals we want
            to achieve. We ask questions, clarify doubts, and ensure we have a
            clear picture of what we’re aiming for.
          </DesignCard>

          <DesignCard title="2. Research">
            Once we have a clear understanding of the brief, we move on to the
            research phase. We study the market, analyze our competitors, and
            understand the latest trends in the healthcare industry. We also
            gather insights about our customers - their needs, their pain
            points, and their expectations from a healthcare provider.
          </DesignCard>
          <DesignCard title="3. Define">
            Based on our understanding of the brief and our research findings,
            we define our design challenge. We articulate the problem we’re
            solving, the customers we’re serving, and the impact we want to
            create. This definition serves as a guide for our design process.
          </DesignCard>
          <DesignCard title="4. Ideate">
            With a clear definition of our design challenge, we start generating
            ideas. We brainstorm different ways to solve the problem, meet our
            customers’ needs, and achieve our goals. We encourage creativity and
            out-of-the-box thinking, ensuring a wide range of ideas are
            explored.
          </DesignCard>
          <DesignCard title="5. Prototype">
            From our pool of ideas, we select the most promising ones and turn
            them into tangible prototypes. These prototypes could be new
            insurance plans, customer support processes, or digital tools for
            our customers. We create these prototypes keeping in mind our
            customers’ needs and our design goals.
          </DesignCard>
          <DesignCard title="6. Test">
            Finally, we test our prototypes. We gather feedback from our
            customers, observe how they interact with our prototypes, and
            understand if our solutions are meeting their needs. Based on this
            feedback, we refine our prototypes, making changes and improvements
            as necessary.
          </DesignCard>
        </div>
      </div>
    </section>
  );
}
