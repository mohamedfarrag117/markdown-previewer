import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
const Preview = ({ typing }) => {
  return (
    <div className=" markdown-preview prose prose-sm prose-pre:w-full prose-pre:text-lg prose-pre:overflow-auto prose-pre:break-all prose-pre:flex prose-pre:flex-col prose-pre:items-center prose-pre:text-balance prose-h1:text-center w-full  flex flex-col items-center justify-center   break-all text-balance bg-editorPreviewColor  p-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {typing}
      </ReactMarkdown>
    </div>
  );
};

export default Preview;
