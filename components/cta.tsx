import { BorderBeam } from "./ui/border-beam";

export default function CTA() {
  return (
    <div className="relative flex h-[40px] w-[160px] flex-col items-center justify-center overflow-hidden rounded-lg border border-white/20  shadow-lg hover:bg-red-400">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-xs font-semibold leading-none lg:text-sm">
        Izveidot programmu
      </span>
      <BorderBeam size={70} duration={5} delay={9} borderWidth={1.5} />
    </div>
  );
}
