import { useState } from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createPost } from '../../lib/blog';

const availableTags = [
  'Deep Learning',
  'Web/App',
  'Python',
  'DevOps',
  'Leet Code',
];

export default function NewBlogPost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleTag = (tag) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('new Post:', { title, date, content });
    // alert('Post saved. (현재는 콘솔에 출력)');
    setLoading(true);
    console.log('selected image:', imageFiles);

    try {
      const postId = await createPost({
        title,
        date,
        content,
        imageFiles,
        tags,
      });
      alert('Post created successfully!');
      router.push(`/blogs/${postId}`);
    } catch (error) {
      console.error(error);
      alert('Failed to create post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Write a New Blog | Taey&apos;s World</title>
        <meta
          name="description"
          content="Write a new blog post for Taey's World"
        />
      </Head>

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mt-6">new Post</h1>
        <p className="text-center text-gray-500 mt-2">wirte hereeeee </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Title here"
              required
            />
          </div>
          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            {availableTags.map((tag) => (
              <label key={tag} className="mr-4 mb-2 inline-flex items-center">
                <input
                  type="checkbox"
                  checked={tags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                  className="mr-2"
                />
                {tag}
              </label>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Content hahahaha
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md h-40"
              placeholder="write here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Completed!
          </button>
        </form>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setImageFiles([...e.target.files])}
            className="mt-2"
          />
        </div>

        {/* 미리보기 */}
        {title && content && (
          <div className="mt-10 p-4 border-t">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-500 text-sm">{date}</p>
            <p className="mt-2 whitespace-pre-line">{content}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
