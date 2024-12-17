import Link from "next/link";

export default function ProjectList() {
  return (
    <main>
      <h1>ProjectList</h1>
      <ul>
        <li>
          <Link href="/blog3/jobit">Jobit</Link>
        </li>
        <li>
          <Link href="/blog3/carrent">carrent</Link>
        </li>
        <li>
          <Link href="/blog3/hipnode">hipnode</Link>
        </li>
      </ul>
    </main>
  );
}
