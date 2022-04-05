import Link from 'next/link';

import Container from '@/components/Container';
import Head from 'next/head';
import Image from 'next/image';
import NowPlaying from '@/components/NowPlaying';
import BlogPostCard from '@/components/BlogPostCard';
import TopTracks from '@/components/TopTracks';

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaSass
} from 'react-icons/fa';
import {
  SiJavascript,
  SiJquery,
  SiFirebase,
  SiVisualstudio,
  SiWebflow,
  SiAdobe
} from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import { VscTerminalCmd } from 'react-icons/vsc';
import { DiResponsive } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';

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

        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          My Toolbox and Things I can do
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The skills, tools and technologies I use to bring your products to
          life:
        </p>
        <div class=" flex text-6xl flex-row mt-10 mb-10">
          <FaHtml5 className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500" />
          <FaCss3Alt className="flex-1 mx-4 text-gray-600 hover:text-yellow-500 transition ease-in-out duration-500" />
          <SiJavascript className="flex-1 mx-4 text-gray-600 hover:text-yellow-200 transition ease-in-out duration-500" />
          <SiJquery className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500" />
          <FaReact className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500" />
          <FaGitAlt className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500" />
          <FaGithub className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500" />
          <AiFillApi className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500" />
        </div>
        <div class=" flex text-6xl flex-row mb-10 ">
          <SiFirebase className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500 " />
          <FaSass className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500" />
          <VscTerminalCmd className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500" />
          <SiVisualstudio className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500" />
          <DiResponsive className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500" />
          <FiFigma className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500" />
          <SiWebflow className="flex-1 mx-4 text-gray-600 hover:text-blue-500 transition ease-in-out duration-500" />
          <SiAdobe className="flex-1 mx-4 text-gray-600 hover:text-red-500 transition ease-in-out duration-500" />
        </div>

        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Most Popular
        </h2>

        <BlogPostCard
          title="easily Create a React App"
          summary="I walk through my setup of a fast and easy to use setup using the facebook tool create-react-app. With a few minor changes it can be ready for any project."
          slug="easily-create-a-react-app"
        />
        <BlogPostCard
          title="Why You Should Attend a Coding Bootcamp"
          summary="People are always asking if they should attend a coding bootcamp. I had the same question until I finally did it and it was no longer a question and I was glad that I had done it."
          slug="why-you-should-attend-a-coding-bootcamp"
        />

        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Currently Playing
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is what I am listening to right now while I am probably either
          working out or coding! Check out my Spotify profile{' '}
          <a
            className="text-blue-700"
            href="https://open.spotify.com/user/12159172546"
          >
            here
          </a>
        </p>
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
