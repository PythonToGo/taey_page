import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { getPostById } from '../../lib/blog';

export default function BlogDetail() {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) return;
    const fetchPost = async () => {
      const post = await getPostById(postId);
      setPost(post);
      setLoading(false);
    };
    fetchPost();
  }, [postId]);

  if (loading)
    return (
      <Layout>
        <div className="p-8">Loading...</div>
      </Layout>
    );
  if (!post)
    return (
      <Layout>
        <div className="p-8">Post not found</div>
      </Layout>
    );

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-500 mb-4">
          {new Date(post.createdAt.secondes * 1000).toLocaleDateString()}
        </p>
        <div className="flex flex-wrap mb-4">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-sm mr-2 mb-2 px-2 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        {post.imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            alt={post.title}
            className="mt-4 rounded-md shadow-md"
          />
        ))}
        <div className="mt-4 whitespace-pre-wrap">{post.content}</div>
        <div className="mt-4">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-sm mr-2 mb-2 px-2 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Layout>
  );
}
