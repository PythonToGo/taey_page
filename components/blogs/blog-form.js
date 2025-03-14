import { useState } from 'react';
import { useRouter } from 'next/router';
import { createPost } from '../../lib/blog';

const availableTags = [
  'Deep Learning',
  'Web/App',
  'Python',
  'DevOps',
  'Leet Code',
];

export default function BlogForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');

  const toggleTag = (tag) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const postId = await createPost({ title, content, imageFiles, tags });
      alert('Post created successfully!');
      console.log('Post created:', postId); // save post id
      router.push('/blogs/' + postId);
    } catch (error) {
      console.error('Error while creating post:', error);
      alert('Failed to create post!!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        required
        type="text"
        placeholder="Title"
        className="w-full p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Content */}
      <textarea
        required
        placeholder="Content"
        rows={10}
        className="w-full p-2 border rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {/* Date */}
      <div>
        <label className="block mb-2 font-semibold">Date:</label>
        <input
          required
          type="date"
          className="border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Tag */}
      <div className="mt-4">
        <p className="mb-2" font-semibold>
          Select Tags:
        </p>
        {availableTags.map((tag) => (
          <label key={tag} className="mr-2">
            <input
              type="checkbox"
              value={tag}
              checked={tags.includes(tag)}
              onChange={() => toggleTag(tag)}
              className="mr-1"
            />
            {tag}
          </label>
        ))}
      </div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => {
          const files = Array.from(e.target.files);
          setImageFiles(files);
        }}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Create Post'}
      </button>
    </form>
  );
}
