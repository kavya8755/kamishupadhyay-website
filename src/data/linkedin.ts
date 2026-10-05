// LinkedIn posts featured on the home page ("From LinkedIn" section).
// The section stays hidden until this list has at least one post.
//
// To add a post:
//   1. Save the post's photo into src/assets/images/linkedin/ (e.g. my-post.jpg).
//   2. Import it below and add an entry with the post's URL, date and text.
import type { ImageMetadata } from 'astro';

export type LinkedInPost = {
  url: string; // the post's link, from "Copy link to post" on LinkedIn
  date: string; // YYYY-MM-DD
  text: string; // the opening lines of the post
  image?: ImageMetadata;
  imageAlt?: string;
};

export const linkedinPosts: LinkedInPost[] = [];
