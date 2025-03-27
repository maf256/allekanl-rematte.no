import React from 'react'

export default function Page ()  {

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
    <main className="flex justify-center items-center min-h-screen">
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
  )
}
