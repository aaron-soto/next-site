import Link from 'next/link';

import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About - Aaron Soto">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Aaron. I'm a Full Stack React Developer, writer, and
            creative mind. &nbsp;I work at Allata as a Developer Consultant
            helping our clients solve all sorts of problems with different
            custom apps and websites.
          </p>
          <p>
            I am an Army veteran where I was a Sergant with the 75th Ranger
            Regiment. Check out &nbsp;
            <Link href="/newsletter">
              <a>my newsletter</a>
            </Link>
            &nbsp; where I talk about anything from React to career advice to my
            personal life.
          </p>
          <p>
            I grew up in a small town in Arizona and attended Arizona State
            university Online working towards a bachelor's degree in Software
            Engineering. I like to spend my free time woodworking, skydiving,
            hiking, or printing things on my fancy 3D printer.
          </p>
        </div>
      </div>
    </Container>
  );
}
