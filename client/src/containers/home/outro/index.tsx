const Outro = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="space-y-10 py-10 md:py-20 lg:py-40 2xl:py-60">
        <section className="space-y-6">
          <h1 className="max-w-4xl text-2lg md:text-2xl">
            The world is waking up to the <span className="font-semibold">potential of NCS</span>{" "}
            and there is <span className="text-grass">a lot of momentum</span> right now.
          </h1>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-20">
            <div>
              <p>
                The UNFCCC COP27 had nature at the center like never before, resulting in several
                major public and private commitments, mobilizing levels of funding for NCS that had
                not been seen previously. Additionally, private sector interest in purchasing carbon
                credits and in making tangible investments in NCS are skyrocketing. We need to take
                a hold of these opportunities and translate momentum into tangible actions that can
                accelerate NCS.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Outro;
