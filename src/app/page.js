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
        <title>Johny Alnæs - Erfaren lærer i matematikk - Privatlærer i matematikk</title>
        <meta
          name="description"
          content="Meet Johny Alnæs, a dedicated educator with over 15 years of experience in teaching mathematics and science. Learn more about his teaching philosophy and background."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Johny Alnæs - Erfaren lærer i matematikk - Privatlærer i matematikk" />
        <meta
          property="og:description"
          content="Meet Johny Alnæs, a dedicated educator with over 15 years of experience in teaching mathematics and science."
        />
        <meta property="og:image" content="/matematikklærer.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        {/* <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Johny Alnæs</h1>
            <ul className="flex gap-6 text-sm">
              <li><Link href="#about" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Contact</Link></li>
            </ul>
          </div>
        </nav> */}

        <section
          id="about"
          className="w-full min-h-screen px-10 pt-32 pb-16 flex flex-col justify-center items-center md:flex-row gap-10 md:gap-20"
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/matematikklærer.webp"
              alt="Portrait of Johny Alnæs, an experienced teacher"
              width={300}
              height={300}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Johny Alnæs
            </h2>
            <p className="text-2xl md:text-xl leading-relaxed">Jeg er en pensjonert matematikklærer som har undervist i faget i over 30 år. De siste 10 år som matematikklærer og rådgiver ved Asker vgs.</p>
            <p className="text-2xl md:text-xl leading-relaxed">Jeg begynte som lærer i ungdomsskolen og ble her 8 år. Etter dette jobbet jeg i psykiatrien i 9 år med et innsmett i Oslo kretsfengsel i 2 år som rådgiver og lærer.</p>
            <p className="text-2xl md:text-xl leading-relaxed">Jeg gir undervisning i 1P og 2P og 10 klasse-matte.</p>
            <p className="text-2xl md:text-xl leading-relaxed">Jeg møter eleven med en kartlegging av kunnskaper. Det må skje i en atmosfære av tillit og respekt slik at eleven kjenner seg tatt vare på. Jeg må finne ut hvor eleven mistet følelsen av mestring. Når man faller lasset og ikke skjønner mer fortsetter man fallet til man gir opp.</p>
            <p className="text-2xl md:text-xl leading-relaxed">Jeg har siden 2010 hjulpet mange elever til mestring, og de har fått en karakter de er fornøyd med.</p>
            <p className="text-2xl md:text-xl leading-relaxed">Pris. 400 kr pr. 50min.</p>
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
      </main>
    </>
  );
}
