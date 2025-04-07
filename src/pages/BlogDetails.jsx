import React from 'react'
import { useParams } from 'react-router-dom'
import blogData from '../components/data/BlogData'

const BlogDetails = () => {
    const {id} = useParams();

    const post = blogData.find((item) => item.id === id);


  return (
    <>
    <section className='xl:container xl:mx-auto px-2 pt-20 py-10'>
        <div className='max-w-3xl mx-auto space-y-5'>
            <h2 className='text-center text-2xl text-headingColor font-semibold'> {post.title} </h2>
            <img src={post.image} alt={post.title} className='mx-auto h-60 object-cover w-1/2' />
            <p className='text-sm md:text-base md:text-justify text-textColor md:leading-7'> {post.content} </p>
        </div>
    </section>
    </>
  )
}

export default BlogDetails