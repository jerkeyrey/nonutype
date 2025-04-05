import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/solo" className="text-purple-500 underline">
        Try Solo Mode
      </Link>
    </>
  );
}
