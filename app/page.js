import { fetchPosts } from "@/lib/data";
import Feed from "./components/Feed";

export default function Home({ searchParams }) {
  const index = searchParams.index || "";
  return (
    <main className="flex flex-col items-center w-screen gap-3">
      <Feed index={index} />
    </main>
  );
}
