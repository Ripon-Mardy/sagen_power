import React from "react";
import { Link } from "react-router-dom";

import blogsData from '../components/data/BlogData'

const Blogs = () => {
  return (
    <>
      <section className="xl:container xl:mx-auto px-2 pt-20 py-10">
        <div>
          <h2 className="text-3xl font-semibold text-headingColor text-center mb-10">
            Blog Posts
          </h2>
        </div>
        {/* blogs  */}
        <div className="grid grid-cols-4 gap-6 mt-10">
          {blogsData.map((post, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover mx-auto overflow-hidden"
              />
              <div className="p-3 text-center">
                <h3 className="text-base font-semibold text-headingColor">
                  {post.title}
                </h3>
                <Link
                  to={`/blogs/${post.id}`}
                  className=" p-1 px-4 text-sm mt-2 inline-block rounded-md bg-buttonBg mx-auto text-white"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
