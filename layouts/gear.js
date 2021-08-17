import Container from '@/components/Container';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="Gear – Aaron Soto"
      description="This is what I use on my daily basis and what I recommend."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          This is what I use on my daily basis and what I recommend. I have been
          trying to perfect my setup and am always getting a little closer to
          that goal.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
