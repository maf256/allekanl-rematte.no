// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import { useState } from 'react';

export default function Home() {
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   alert('Message sent!');
  // };

  return (
    <>
      <Head>
        <title>Mr. John Smith - Experienced Math & Science Teacher</title>
        <meta
          name="description"
          content="Meet Mr. John Smith, a dedicated educator with over 15 years of experience in teaching mathematics and science. Learn more about his teaching philosophy and background."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mr. John Smith - Experienced Math & Science Teacher" />
        <meta
          property="og:description"
          content="Meet Mr. John Smith, a dedicated educator with over 15 years of experience in teaching mathematics and science."
        />
        <meta property="og:image" content="/matematikklærer.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Mr. John Smith</h1>
            <ul className="flex gap-6 text-sm">
              <li><a href="#about" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">About</a></li>
              <li><a href="#contact" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Contact</a></li>
            </ul>
          </div>
        </nav>

        <section
          id="about"
          className="w-full min-h-screen px-6 pt-32 pb-16 flex flex-col justify-center items-center md:flex-row gap-10 md:gap-20"
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/matematikklærer.webp"
              alt="Portrait of Mr. John Smith, an experienced teacher"
              width={300}
              height={300}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Mr. John Smith
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Mr. John Smith is a passionate educator with over 15 years of experience in teaching mathematics and science. His goal is to make learning fun and accessible for every student, helping them reach their full potential through creative methods and compassionate guidance.
            </p>
          </div>
        </section>

        <section id="contact" className="w-full bg-white px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h3>
            <form className="space-y-6" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  // value={formData.name}
                  // onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  // value={formData.email}
                  // onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  // value={formData.message}
                  // onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 py-6 w-full border-t border-gray-300" role="contentinfo">
          <p>&copy; {new Date().getFullYear()} Mr. John Smith. All rights reserved.</p>
          <p className="mt-2">
            Website design by{' '}
            <a
              href="https://sitedesign.no"
              className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              sitedesign.no
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
