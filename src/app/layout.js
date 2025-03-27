import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


  export const metadata = {
    title: "Johny Alnæs - Erfaren lærer i matematikk - Privatlærer i matematikk",
    description: "Johny Alnæs - Erfaren lærer i matematikk - Privatlærer i matematikk",
  };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  min-h-screen bg-gray-50 text-gray-800 antialiased`}>
     
        <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-10 bg-gray-50 text-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Matematikklærer </h1>
            <ul className="flex gap-6 text-lg">
              <li><Link href="/" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Hjem</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Kontakt</Link></li>
            </ul>
          </div>
        </nav>

        {children}

        <footer className="text-center text-sm text-gray-500 py-6 w-full border-t border-gray-300 bg-gray-50 text-gray-800" role="contentinfo">
          <p>&copy; {new Date().getFullYear()} Johny Alnæs. Alle rettigheter reservert.</p>
          <p className="mt-2">
            Webutvikler og webdesign av{' '}
            <a
              href="https://sitedesign.no"
              className="text-blue-600 underline hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              sitedesign.no
            </a>

          </p>
        </footer>


      </body>
    </html>
  );
}
