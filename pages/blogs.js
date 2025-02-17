import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/resume.module.css';
// import Resume from '@/components/aboutme/resume.js';
import Link from 'next/link';


const blogPosts = [
  { id: "first-post", title: "탱이 블로그 맨드는즁", date: "2025-02-17" },
  { id: "nextjs-guide", title: "또치네 블로그 첫번째 게스트는 횽", date: "2025-02-18" },
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
          <h1 className="text-4xl font-bold text-center mt-10">Blog Posts</h1>
          <p className="text-center text-gray-500 mt-2">Welcome to my blog! 🚀</p>
  
          <div className="mt-8 space-y-6">
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