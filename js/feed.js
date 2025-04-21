import { getPosts } from './functions/getPosts.js';

export async function renderPosts() {
  const posts = await getPosts();
  console.log(posts);
}

getPosts();
renderPosts();
