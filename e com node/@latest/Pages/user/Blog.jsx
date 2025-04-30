import React from 'react';
import { Newspaper, ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [



  {
    id: 2,
    title: "",
    excerpt: "",
    image: "https://cdn.pixabay.com/photo/2017/05/30/03/58/blog-2355684_640.jpg",
    category: ""
  },
  {
    id: 3,
    title: "Supply Chain Optimization Strategies",
    excerpt: "Expert insights on streamlining your manufacturing supply chain...",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    date: "March 3, 2024",
    author: "Mike Anderson",
    category: "Operations"
  },
  {
    id: 4,
    title: "Future of Industrial Automation",
    excerpt: "Exploring upcoming trends in manufacturing automation and robotics...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrk08r-pyYC7SeDXNkm9kPsJi-m-asoS4dJw&s",
    date: "March 2, 2024",
    author: "Emily Chen",
    category: "Technology"
  }
];

const categories = [
  "Industry Trends",
  "Technology",
  "Sustainability",
  "Operations",
  "Innovation"
];

function Blog() {
  return (
    <div className="min-h-screen bg-gray-20  overflow-hidden   ">
      {/* Header */}
      <header className="bg-gray-200 shadow-sm ">
        <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center  ">
            <div className="flex items-center justify-between gap-2">
              <Newspaper className="h-8 w-8 text-indigo-600" />
              <h3 className="ml-3 text-3xl font-bold text-gray-200 items-center">Industry Insights</h3>
            </div>
          </div>
          
        </div>
      </header><br />
      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <div className="mb-12">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-full object-cover"
            />
            <br />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <span className="text-sm text-indigo-800 font-semibold">{blogPosts[0].category}</span>
              <h2 className="text-3xl font-bold text-white mt-2">{blogPosts[0].title}</h2>
              <p className="text-gray-300 mt-2">{blogPosts[0].excerpt}</p>
              <div className="flex items-center mt-4 text-gray-300">
                <Calendar className="h-4 w-4" />
                <span className="ml-2 text-sm">{blogPosts[0].date}</span>
                <User className="h-4 w-4 ml-4" />
                <span className="ml-2 text-sm">{blogPosts[0].author}</span>
              </div>
            </div>
          </div>
        </div>
<br />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Posts Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.slice(1).map(post => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-red-900 font-semibold">{post.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">{post.title}</h3>
                    <p className="text-gray-600 mt-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span className="ml-2 text-sm">{post.date}</span>
                      </div>
                      <button className="flex items-center text-indigo-600 hover:text-indigo-700">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <br />
    </div>
  );
}

export default Blog;