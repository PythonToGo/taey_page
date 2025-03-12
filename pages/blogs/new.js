import { useState } from "react";
import Layout from "../../components/layout";
import Head from "next/head";

export default function NewBlogPost() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("새 블로그 글:", { title, date, content });
    alert("블로그 글이 작성되었습니다! (현재는 콘솔에 출력)");
  };

  return (
    <Layout>
      <Head>
        <title>Write a New Blog | Taey&apos;s World</title>
        <meta name="description" content="Write a new blog post for Taey's World" />
      </Head>

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mt-6">✍️ 새 블로그 글 작성</h1>
        <p className="text-center text-gray-500 mt-2">블로그 글을 작성해보세요!</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="블로그 제목 입력"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">날짜</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md h-40"
              placeholder="블로그 내용을 입력하세요..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            작성 완료
          </button>
        </form>

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
