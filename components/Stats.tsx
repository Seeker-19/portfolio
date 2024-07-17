"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of Experience",
  },
  {
    num: 5,
    text: "Projects Completed",
  },
  {
    num: 6,
    text: "Technologies Mastered",
  },
  {
    num: 50,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap mx-auto gap-6 max-w-[80vw] xl:max-w-none py-4">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-black/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
