import BlurFade from "./ui/blur-fade";
import { Button } from "./ui/button";

export default function HeroTextFade() {
  return (
    <section className="flex flex-col items-center text-white ">
      <BlurFade className="flex flex-col text-center">
        <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none ">
          Sertificēts fizioterapeits
          <span className="text-orange-600"> Kaspars Breģis</span>
        </h2>
      </BlurFade>
      <span className="flex text-base font-medium text-center pt-10 max-w-[350px]">
        Pieredze darbā slimnīcā (traumatoloģija, neiroloģija), kā arī sportā
        (futbols). Šobrīd ikdienā darbs ambulatorā praksē
      </span>
      <div className="flex gap-2 pt-20 sm:gap-5">
        <Button className="sm:h-10 sm:rounded-md sm:px-8">CV</Button>
        <Button className="sm:h-10 sm:rounded-md sm:px-8 bg-orange-600 hover:bg-orange-700">
          Pieraksts
        </Button>
        <Button className="sm:h-10 sm:rounded-md sm:px-8">Online</Button>
      </div>
    </section>
  );
}
