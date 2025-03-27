// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import { useState } from 'react';

export default function Home() {


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

      <main>

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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Johny Alnæs</h2>
            <p className="text-2xl md:text-xl leading-relaxed">Jeg er en pensjonert matematikklærer som har undervist i faget i over 30 år. De siste 10 år som matematikklærer og rådgiver ved Asker vgs.</p>
            <p className="text-2xl md:text-xl leading-relaxed">Jeg begynte som lærer i ungdomsskolen og ble her 8 år. Etter dette jobbet jeg i psykiatrien i 9 år med et innsmett i Oslo kretsfengsel i 2 år som rådgiver og lærer.</p>
            <p className="text-2xl md:text-xl leading-relaxed">Jeg gir undervisning i 1P og 2P og 10 klasse-matte.</p>
            <p className="text-2xl md:text-xl leading-relaxed">Jeg møter eleven med en kartlegging av kunnskaper. Det må skje i en atmosfære av tillit og respekt slik at eleven kjenner seg tatt vare på. Jeg må finne ut hvor eleven mistet følelsen av mestring. Når man faller lasset og ikke skjønner mer fortsetter man fallet til man gir opp.</p>
            <p className="text-2xl md:text-xl leading-relaxed">Jeg har siden 2010 hjulpet mange elever til mestring, og de har fått en karakter de er fornøyd med.</p>
            <p className="text-2xl md:text-xl leading-relaxed">Pris. 400 kr pr. 50min.</p>
          </div>
        </section>


      </main>
    </>
  );
}
