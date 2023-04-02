import type { InferGetStaticPropsType } from 'next'

import Feed from '../components/Feed'
import Container from '../components/Container'
import { getAllPosts } from '../lib/getPost'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export default function Home({ posts }: Props) {
  return (
    <Container>
      <Feed posts={posts} />
    </Container>
  )
}

export async function getStaticProps({ params }) {
  const page = parseInt(params?.page) || 0

  const posts = getAllPosts(
    [
      'slug',
      'title',
      'excerpt',
      'thumbnail',
      'date',
      'category',
      'category_slug',
    ],
    page * 10 + 10
  )

  return {
    props: { posts },
  }
}
