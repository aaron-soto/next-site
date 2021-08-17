import { getAllFilesFrontMatter } from '@/lib/mdx';
import Link from 'next/link';

import BlogPostCard from '@/components/BlogPostCard';
import Container from '@/components/Container';

export default function Blog({ posts }) {
  const filteredBlogPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  // .filter((frontMatter) =>
  // 	frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
  // );

  const allTags = [];

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (allTags.includes(tag)) {
        return;
      } else {
        allTags.push(tag);
      }
    });
  });

  return (
    <Container
      title="Blog – Aaron Soto"
      description="Trying to help anyone I can become a better programmer."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>

        {/* <h2 className="text-black dark:text-white mt-6">Tags</h2>
        <div className="tags flex flex-wrap mb-6">
          {allTags &&
            allTags.map((tag) => (
              <Link className="" href={`/blog/category/${tag}`}>
                <a className="text-gray-600 p-1 mx-1 my-1 rounded-md">{tag}</a>
              </Link>
            ))}
        </div> */}

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`I've been writing online since 2014, mostly about web development and tech careers.
            In total, I've written ${posts.length} articles on this site.
            Use the search below to filter by title.`}
        </p>

        {filteredBlogPosts.map((frontMatter) => (
          <BlogPostCard key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
