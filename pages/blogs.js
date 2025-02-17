import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';

const blogPosts = [
  { id: "first-post", title: "My First Blog Post", date: "2025-02-17" },
  { id: "nextjs-guide", title: "Getting Started with Next.js", date: "2025-02-18" },
];

export default function Blogs() {
  return (
    <Layout>
      <Head>
        <title>Blogs | Taey&apos;s World</title>
        <meta name="description" content="Taey's personal blog about tech, life, and more." />
        <link rel="icon" href="/hedge2.ico" />
      </Head>

      <div className="max-w-3xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Blog Posts</h1>
          <Link href="/blogs/new">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              ✍️ 새 글 작성
            </button>
          </Link>
        </div>
        
        <p className="text-gray-500 mb-4">Welcome to my blog! 🚀</p>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
              <Link href={`/blogs/${post.id}`}>
                <span className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</span>
              </Link>
              <p className="text-gray-500 text-sm mt-1">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
