import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import Link from 'next/link';
import { getAllPosts } from '../lib/blog';

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPosts();
      setPosts(data.sort((a, b) => b.createdAt - a.createdAt));
      setFilteredPosts(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(posts);
      setFilteredPosts(posts);
    } else {
      setSelectedTag(tag);
      setFilteredPosts(posts.filter((post) => post.tags.includes(tag)));
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="p-8">Loading...</div>
      </Layout>
    );
  }

  const allTags = [...new Set(posts.flatMap((post) => post.tags))];

  return (
    <Layout>
      <div className="flex flex-col md:flex-row p-8">
        {/* Left: Post lists */}
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold mb-6">Blogs: Work In Progress!</h1>
          <ul className="space-y-6">
            {filteredPosts.map((post) => (
              <li key={post.id} className="border-b pb-4">
                <h2 className="text-xl font-semibold">
                  <Link
                    href={`/blogs/${post.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-500">
                  {new Date(post.createdAt.seconds * 1000).toLocaleDateString()}
                </p>
                <div className="flex flex-wrap mt-2">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-sm mr-2 mb-2 px-2 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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

        {/* Right Sidebar */}
        <div className="w-full md:w-1/4 md:pl-6 mt-8 md:mt-0">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="space-y-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`w-full text-left px-3 py-2 rounded-md ${
                  selectedTag === tag
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
            {selectedTag && (
              <button
                className="w-full text-left px-3 py-2 mt-2 bg-red-500 text-white rounded-md"
                onClick={() => handleTagClick(null)}
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
