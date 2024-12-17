import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;
  return (
    <div>
      <h1>Project Details</h1>
      <h1>Project name - {name}</h1>
    </div>
  );
}
