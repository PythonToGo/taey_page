import { useRouter } from "next/router";

const blogPosts = {
  "first-post": { title: "My First Blog Post", content: "This is my first post content." },
  "nextjs-guide": { title: "Getting Started with Next.js", content: "Learn Next.js step by step." },
};

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogPosts[id];

  if (!post) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
    </div>
  );
};

export default BlogPost;
