'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 grid-bg opacity-20"></div>
      
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-orbitron font-bold neon-glow text-neon-cyan"
              whileHover={{ scale: 1.05 }}
            >
              FUTURISTIC BLOG
            </motion.h1>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/post" 
                className="glass px-6 py-3 rounded-lg font-rajdhani font-semibold text-neon-pink neon-border hover:bg-neon-pink hover:text-black transition-all duration-300"
              >
                POST BLOG
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto p-6">
        {loading ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center h-64"
          >
            <div className="text-neon-cyan text-xl font-orbitron">LOADING BLOGS...</div>
          </motion.div>
        ) : blogs.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <h2 className="text-3xl font-orbitron text-neon-pink mb-4">NO BLOGS YET</h2>
            <p className="text-gray-400 font-rajdhani mb-8">Be the first to share your thoughts!</p>
            <Link 
              href="/post"
              className="glass px-8 py-4 rounded-lg font-rajdhani font-semibold text-neon-cyan neon-border hover:bg-neon-cyan hover:text-black transition-all duration-300"
            >
              CREATE FIRST BLOG
            </Link>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-xl p-6 hover:neon-border hover:border-neon-cyan transition-all duration-300"
              >
                <h3 className="text-xl font-orbitron font-bold text-neon-cyan mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-300 font-rajdhani mb-4 line-clamp-3">
                  {blog.content.substring(0, 150)}...
                </p>
                <div className="flex justify-between items-center text-sm text-gray-400 font-rajdhani">
                  <span>By {blog.author}</span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
}
