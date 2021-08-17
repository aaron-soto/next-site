import Link from 'next/link';

import Container from '@/components/Container';
import Head from 'next/head';
import Image from 'next/image';
import NowPlaying from '@/components/NowPlaying';
import BlogPostCard from '@/components/BlogPostCard';
import TopTracks from '@/components/TopTracks';

export default function Home({}) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Aaron Soto
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a Full Stack web developer that focuses mainly on React. I love to
          build anything that will make someone smile –&nbsp;
          <Link href="/about">
            <a>learn more about me.</a>
          </Link>
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>

        <BlogPostCard
          title="easily Create a React App"
          summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
          slug="easily-create-a-react-app"
        />
        <BlogPostCard
          title="Why You Should Attend a Coding Bootcamp"
          summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
          slug="why-you-should-attend-a-coding-bootcamp"
        />

        <NowPlaying />

        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}
