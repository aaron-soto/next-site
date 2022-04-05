import Link from 'next/link';

import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About - Aaron Soto">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Projects
        </h1>

        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400 ">
          <p>
            I have projects that I have worked on while I was working or even
            attending my coding bootcamp. This is a collection of the apps that
            I have worked on outside of those. These are projects that I create
            on my freetime to learn something new or because I am just bored and
            feel like making something. Feel free to reach out to me with any
            questions you may have regarding any of these projects! Enjoy!
          </p>

          <p>
            Check out my github profile{' '}
            <a href="https://github.com/aaron-soto">here</a> <br></br>
            Or quickly check out some of my projects below.
          </p>

          <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg mb-8">
            <div
              className="relative h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage: `url('data:image/png;base64,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')`
              }}
              title="Woman holding a mug"
            >
              <div className="absolute top-0 mt-40 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500"></div>
            </div>
            <div className="border-gray-100 lg:border-t lg:border-gray-100 bg-white dark:bg-slate-900 rounded-b lg:rounded-b-none lg:rounded-r px-4 py-2 flex flex-col justify-between leading-normal">
              <div className="mt-5">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Flip Clock Work Counter
                </div>
                <p className="text-gray-700 text-base">
                  My desk setup has an Ipad that sits in a dock and I wanted an
                  easy way to see the date and time as well as a timer to keep
                  track of how much work I am doing each day. I created this
                  using react and scss.
                </p>
              </div>
              <div className="mb-1 project-links">
                <p className="text-gray-700 text-base my-0">
                  <a href="https://aaron-soto.github.io/react-clock/">
                    Preview
                  </a>
                  <a href="https://github.com/aaron-soto/react-clock">Github</a>
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg mb-8">
            <div
              className="relative h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage: `url('https://image.shutterstock.com/image-illustration/illustration-hangman-game-260nw-386156509.jpg')`
              }}
              title="Woman holding a mug"
            >
              <div className="absolute top-0 mt-40 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500"></div>
            </div>
            <div className="border-gray-100 lg:border-t lg:border-gray-100 bg-white dark:bg-slate-900 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mt-5">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  React Hangman Game
                </div>
                <p className="text-gray-700 text-base">
                  This is a react version of Hangman that can be played in the
                  browser that involves hints, coins, and stat tracking.
                </p>
              </div>
              <div className="mb-1 project-links">
                <p className="text-gray-700 text-base my-0">
                  <a href="https://aaron-soto.github.io/react-hangman/">
                    Preview
                  </a>
                  <a href="https://github.com/aaron-soto/react-hangman">
                    Github
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg">
            <div
              className="relative h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage: `url('https://github.com/aaron-soto/NinjaGoldGame/raw/main/be9c8d26ffe8313f8c5465e636abcc20.gif')`
              }}
              title="Woman holding a mug"
            >
              <div className="absolute top-0 mt-40 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500"></div>
            </div>
            <div className=" border-gray-100 lg:border-t lg:border-gray-100 bg-white dark:bg-slate-900 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mt-5">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Ninja Gold Pixel Gambeling Game
                </div>
                <p className="text-gray-700 text-base">
                  This game was created using html, css, and javascript. It uses
                  canvas and animation loops to move the character around the
                  screen.
                </p>
              </div>
              <div className="mb-1 project-links">
                <p className="text-gray-700 text-base my-0">
                  <a href="https://aaron-soto.github.io/NinjaGoldGame/">
                    Preview
                  </a>
                  <a href="https://github.com/aaron-soto/NinjaGoldGame">
                    Github
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
