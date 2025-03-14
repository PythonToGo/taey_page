import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import Link from 'next/link';
import { getAllPosts } from '../lib/blog';

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPosts();
      setPosts(data.sort((a, b) => b.createdAt - a.createdAt));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="p-8">Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.id} className="border-b pb-4">
              <h2 className="text-xl font-semibold">
                <Link
                  href={`/blogs/${post.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <div>
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-sm mr-2 mb-2 px-2 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                {new Date(post.createdAt.seconds * 1000).toLocaleDateString()}
              </p>
              {post.imageUrls?.length > 0 && (
                <img
                  src={post.imageUrls[0]}
                  alt={post.title}
                  className="w-full h-auto mt-4 rounded-md shadow-sm"
                />
              )}
              <p className="mt-2">{post.content.substring(0, 150)}...</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
