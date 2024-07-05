'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    backgroundColor: '#ffffff',
    textColor: '#000000',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(formData).toString();
    router.push(`/landing-page?${query}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#9B59B6] to-[#8E44AD] text-white">
      <Header />
      <main className="container mx-auto flex-1 p-4">
        <img 
          src="/undraw_undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_-1-_d6br_0qfo.svg" 
          alt="Illustration" 
          className="max-w-full mx-auto mb-4" 
        />
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Create Your Landing Page</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:border-purple-300 bg-[#8E44AD] text-white"
              />
            </div>
            <div>
              <label className="block">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:border-purple-300 bg-[#8E44AD] text-white"
              />
            </div>
            <div>
              <label className="block">Background Color</label>
              <input
                type="color"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-white rounded-md focus:outline-none bg-[#8E44AD]"
              />
            </div>
            <div>
              <label className="block">Text Color</label>
              <input
                type="color"
                name="textColor"
                value={formData.textColor}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-white rounded-md focus:outline-none bg-[#8E44AD]"
              />
            </div>
            <button type="submit" className="bg-[#9B59B6] hover:bg-[#8E44AD] text-white px-6 py-3 rounded-md">
              Generate
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
