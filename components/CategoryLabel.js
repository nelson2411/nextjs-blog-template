import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "bg-amber-500",
    CSS: "bg-sky-500",
    Python: "bg-lime-500",
    PHP: "bg-indigo-500",
    Ruby: "bg-red-500",
  };

  return (
    <div
      className={`px-2 py-1 ${colorKey[children]} text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
