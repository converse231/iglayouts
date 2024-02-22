import { fetchPosts } from "@/lib/data";
import Feed from "./components/Feed";

export default function Home({ searchParams }) {
  const index = searchParams.index || "";
  return (
    <main>
      <Feed index={index} />
    </main>
  );
}
