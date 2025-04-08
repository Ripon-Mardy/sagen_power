import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import blogData from '../components/data/BlogData'

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const fetchPost = () => {
      setLoading(true);
      try {
        const foundPost = blogData.find((item) => item.id === id);
        
        if (!foundPost) {
          // Handle case when post is not found
          navigate('/blog', { replace: true });
          return;
        }
        
        setPost(foundPost);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return null; // This shouldn't render as we redirect in useEffect, but added as a safeguard
  }

  return (
    <section className="xl:container xl:mx-auto px-4 pt-16 pb-12 md:pt-20 md:pb-16">
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-sm text-primary hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to blog
        </button>

        {/* Post title */}
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-headingColor font-bold">
          {post.title}
        </h1>

        {/* Post metadata */}
        <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
          {post.author && (
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {post.author}
            </span>
          )}
          
          {post.date && (
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </span>
          )}
        </div>

        {/* Featured image */}
        <div className="w-full flex justify-center">
          <img 
            src={post.image} 
            alt={post.title} 
            className="rounded-lg shadow-md w-full md:w-4/5 lg:w-3/4 h-48 sm:h-64 md:h-80 object-cover" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/placeholder-image.jpg'; // Fallback image
            }}
          />
        </div>

        {/* Post content */}
        <div className="prose max-w-none">
          {typeof post.content === 'string' ? (
            <p className="text-sm sm:text-base md:text-lg text-textColor leading-relaxed md:leading-7">
              {post.content}
            </p>
          ) : (
            // If content is structured as paragraphs array
            post.content.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-sm sm:text-base md:text-lg text-textColor leading-relaxed md:leading-7 mb-4"
              >
                {paragraph}
              </p>
            ))
          )}
        </div>

        {/* Tags if available */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogDetails;