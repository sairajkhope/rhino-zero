"use client";

import { useState, useEffect } from "react";
import PostCard from "@/components/PostCard";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { geistMono } from "./fonts";
import { motion, AnimatePresence } from "framer-motion";
import { posts } from "@/config/posts";

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<string | null>("about");
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (selectedPost) {
      setIsLoading(true);
      fetch(`/posts/${selectedPost}.md`)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch markdown");
          return response.text();
        })
        .then((text) => {
          setMarkdownContent(text);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error loading markdown:", error);
          setIsLoading(false);
        });
    }
  }, [selectedPost]);

  return (
    <main
      className={`h-screen bg-[var(--background)] ${geistMono.variable} font-sans`}
    >
      <div className="grid md:grid-cols-3 h-screen">
        <div className="overflow-y-auto scrollbar-hide relative">
          <div
            className={`px-6 pt-6 pb-1 md:pb-6 sticky top-0 bg-[var(--background)] border-b border-[var(--border)] z-10 cursor-pointer md:hover:bg-[var(--highlight)] transition-colors`}
            onClick={() =>
              setSelectedPost(selectedPost === "about" ? null : "about")
            }
          >
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-normal text-[var(--foreground)] mb-1">
                Sairaj Khope
              </h1>
              <a
                href="/resume"
                className=""
                // onMouseOver={(e) => {
                //   e.preventDefault();
                //   e.stopPropagation();
                // }}
              >
                <button className="rounded-md bg-gray-200 p-1 text-xs">
                Resume
                </button>
              </a>
            </div>
            <div className="text-sm opacity-60 text-[var(--foreground)]">
              Product Designer, Engineer & Artist
            </div>
            <div className="md:hidden flex justify-center mt-3">
              <motion.div
                animate={{
                  rotate: selectedPost === "about" ? 180 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-60"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </motion.div>
            </div>
            <AnimatePresence>
              {selectedPost === "about" && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="md:hidden overflow-hidden bg-[var(--background)] px-4"
                >
                  {!isLoading && <MarkdownRenderer content={markdownContent} />}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col">
            {posts.map((post) => (
              <div key={post.id} className="flex flex-col">
                <PostCard
                  {...post}
                  isActive={selectedPost === post.id}
                  onClick={() =>
                    setSelectedPost(selectedPost === post.id ? null : post.id)
                  }
                />
                <AnimatePresence>
                  {selectedPost === post.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="md:hidden overflow-hidden bg-[var(--background)] px-4"
                    >
                      {!isLoading && (
                        <MarkdownRenderer content={markdownContent} />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block col-span-2 border-l border-[var(--border)] overflow-y-auto scrollbar-hide p-8 bg-[var(--background)]">
          {!isLoading && <MarkdownRenderer content={markdownContent} />}
        </div>
      </div>
    </main>
  );
}
