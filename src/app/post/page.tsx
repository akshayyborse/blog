'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PostBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, author }),
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.error('Error posting blog:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderMarkdown = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-orbitron text-neon-cyan mb-2">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-orbitron text-neon-pink mb-3">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-orbitron text-neon-cyan mb-4">$1</h1>')
      .replace(/\n/g, '<br>');
  };

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
            <Link href="/">
              <motion.h1 
                className="text-4xl md:text-6xl font-orbitron font-bold neon-glow text-neon-cyan cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                FUTURISTIC BLOG
              </motion.h1>
            </Link>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/" 
                className="glass px-6 py-3 rounded-lg font-rajdhani font-semibold text-neon-pink neon-border hover:bg-neon-pink hover:text-black transition-all duration-300"
              >
                BACK TO FEED
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-xl p-8"
        >
          <h2 className="text-3xl font-orbitron font-bold text-neon-cyan mb-8 text-center">
            CREATE NEW BLOG POST
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-neon-pink font-rajdhani font-semibold mb-2">
                BLOG TITLE
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full glass-dark rounded-lg p-4 font-rajdhani text-white border border-neon-cyan focus:neon-border focus:outline-none transition-all duration-300"
                placeholder="Enter your blog title..."
                required
              />
            </div>

            {/* Author Input */}
            <div>
              <label className="block text-neon-pink font-rajdhani font-semibold mb-2">
                AUTHOR (OPTIONAL)
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full glass-dark rounded-lg p-4 font-rajdhani text-white border border-neon-cyan focus:neon-border focus:outline-none transition-all duration-300"
                placeholder="Your name (or leave anonymous)"
              />
            </div>

            {/* Content Editor */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-neon-pink font-rajdhani font-semibold">
                  BLOG CONTENT (MARKDOWN SUPPORTED)
                </label>
                <motion.button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-neon-cyan font-rajdhani font-semibold hover:neon-glow transition-all duration-300"
                >
                  {showPreview ? 'EDIT' : 'PREVIEW'}
                </motion.button>
              </div>
              
              {showPreview ? (
                <div className="glass-dark rounded-lg p-4 min-h-[400px] font-rajdhani">
                  <div 
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
                  />
                </div>
              ) : (
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full glass-dark rounded-lg p-4 font-rajdhani text-white border border-neon-cyan focus:neon-border focus:outline-none transition-all duration-300 min-h-[400px] resize-y"
                  placeholder="Write your blog content here... You can use Markdown formatting like **bold**, *italic*, # headings, etc."
                  required
                />
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting || !title.trim() || !content.trim()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full glass px-8 py-4 rounded-lg font-rajdhani font-bold text-neon-green neon-border hover:bg-neon-green hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'PUBLISHING...' : 'PUBLISH BLOG'}
            </motion.button>
          </form>
        </motion.div>
      </main>
    </div>
  );
} 