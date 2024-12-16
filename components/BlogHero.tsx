import React from "react";
import BlurFade from "./ui/blur-fade";

const BlogHero = () => {
  return (
    <div className="w-full relative flex flex-col items-center mx-auto mt-20">
      <section className="z-30 relative flex flex-col items-center text-[#292929]">
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
