import Container from '@/components/Container';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Aaron Soto`}
      description={frontMatter.summary}
      tags={frontMatter.tags}
      image={`https://aaronsoto.io${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-center max-w-2xl mx-auto mt-10 mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-center mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>

        <div className="flex justify-center items-center w-full mb-5">
          {frontMatter.tags.map((tag) => (
            <a className="text-black dark:text-gray-300 px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-lg mx-2 cursor-pointer">
              {tag}
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              alt="Aaron Soto"
              height={24}
              width={24}
              src="/avatar.JPG"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Aaron Soto / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            <span>2,345 views</span>
          </p>
        </div>

        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
      </article>
    </Container>
  );
}
