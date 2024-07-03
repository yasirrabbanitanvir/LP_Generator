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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-800 to-purple-600 text-white">
      <Header />
      <main className="container mx-auto flex-1 p-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Create Your Landing Page</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-white">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-white">Background Color</label>
              <input
                type="color"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white">Text Color</label>
              <input
                type="color"
                name="textColor"
                value={formData.textColor}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md">
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
