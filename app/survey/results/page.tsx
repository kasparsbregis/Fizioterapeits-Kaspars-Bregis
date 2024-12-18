"use client";
import { useSearchParams } from "next/navigation";

export default function ResultsPage() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "Anonymous";
  const email = searchParams.get("email") || "Not provided";
  const age = searchParams.get("age") || "Unknown";

  return (
    <div>
      <h1>Survey Results</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
    </div>
  );
}
