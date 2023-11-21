import { COUNTRIES } from "@/constants/countries";

const Hero = (): JSX.Element => {
  return (
    <div className="container flex min-h-screen w-full flex-col items-center justify-center">
      <div className="space-y-10 py-40">
        <section className="space-y-6">
          <h1 className="max-w-4xl text-2xl">
            A global study by <span className="font-semibold">The Nature Conservancy</span> has
            identified <span className="text-sky">funding opportunities for NCS</span> in{" "}
            {COUNTRIES.length} countries.
          </h1>

          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-5">
              <div>
                <p>
                  Natural Climate Solutions (NCS) are poised to play a key role in helping the world
                  reach net zero, with the potential to contribute ~20-30% of what is needed to
                  stabilize the climate by 2030.
                </p>
                <p>
                  However, despite the unprecedented momentum on both public and private funding
                  sources, there is still an outstanding question on how to fund NCS at scale.
                </p>
              </div>
              <p>Learn more about the study methodology.</p>
            </div>

            <div>
              <p>
                That is why TNC has developed a funding study focused on researching and defining
                finance gaps for NCS and mapping out existing or new finance mechanisms that could
                fill those gaps across 8 focus countries (Brazil, Indonesia, China, India, Mexico,
                Colombia, Australia, and Gabon).
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
