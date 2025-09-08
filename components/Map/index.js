"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] w-full items-center justify-center rounded-lg bg-gray-100">
      <div className="text-gray-500">Ielādē karti...</div>
    </div>
  ),
});

export default Map;
