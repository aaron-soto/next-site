import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getFileBySlug } from '@/lib/mdx';
import components from '@/components/MDXComponents';
import MyGear from '@/layouts/gear';

export default function Uses({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <MyGear frontMatter={frontMatter}>
      <Component components={components} />
    </MyGear>
  );
}

export async function getStaticProps() {
  const gear = await getFileBySlug('gear');

  return { props: gear };
}
