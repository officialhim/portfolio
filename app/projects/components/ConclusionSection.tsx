import React from "react";

export default function ConclusionSection() {
  return (
    <section className="pb-24">
      <div className="flex gap-3 items-center mb-4">
        <div className="h-2 w-2 bg-white rounded-full"></div>
        <h1 className="font-medium text-teal-500 text-xl">Conlusion</h1>
      </div>
      <div className="space-y-8">
        <h4 className="font-thin">
          The long process of researching, testing, and repeatedly honing my
          designs has led to a project I’m proud of, but still, I believe
          there’s a lot of room for improvement.
        </h4>
        <div>
          <h2 className="text-lg font-medium">WHAT I LEARNED </h2>
          <p className="text-base leading-6 ml-6">
            It's good to ask for lots of help! Having a fresh pair of eyes
            helped a lot with nitpicking details I glazed over Settling on a
            good word choice can be harder than settling on a design choice...
            Brand identity is formed through every decision in tone, color,
            shapes, and more!
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium">
            SOMETHING I WANT TO IMPROVE ON
          </h2>
          <p className="text-base leading-6 ml-6">
            I'd like to work more on my research method. The sample for my
            initial interview research was quite small and biased given that
            they were my friends. While they gave me incredible insights, it
            definitely would have been better if I reached out to a larger
            audience for more diversity!
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium">MOVING FORWARD...</h2>
          <p className="text-base leading-6 ml-6">
            Fully developing the features of every page and adding interaction
            Testing with more users to see what engages them in other apps and
            create a sample curriculum to challenge the effectiveness of
            Eatcue's method
          </p>
        </div>
      </div>
    </section>
  );
}
