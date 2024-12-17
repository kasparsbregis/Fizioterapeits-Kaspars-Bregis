import React from "react";

import BlurFade from "./ui/blur-fade";

const BlogHero = () => {
  return (
    <div className="relative mx-auto mt-20 flex w-full flex-col items-center">
      <section className="relative z-30 flex flex-col items-center text-[#292929]">
        <BlurFade inView delay={0.3}>
          <div className="section-heading">
            <h2 className="section-title">Blogs</h2>
            <p className="section-description mt-5">
              Viss par un ap fizioterapiju!
            </p>
          </div>
        </BlurFade>
      </section>
    </div>
  );
};

export default BlogHero;
