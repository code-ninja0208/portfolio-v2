import { ContentProps } from '../types/learn';

export const LEARN_CONTENTS: ContentProps[] = [
  {
    id: 1,
    title: 'JS Fundamentals',
    slug: 'js-fundamental',
    description: 'Master the fundamentals of programming in Rust.',
    image: 'https://example.com/images/learn/js-fundamental.webp',
    is_new: false,
    level: 'Beginner',
    is_show: true,
  },
  {
    id: 2,
    title: 'Full Stack Rust Development',
    slug: 'full-stack-rust',
    description: 'Learn how to build full stack applications using Rust.',
    image: 'https://example.com/images/learn/full-stack-rust.webp',
    is_new: false,
    level: 'Intermediate',
    is_show: true,
  },
  {
    id: 3,
    title: 'Rust for WebAssembly',
    slug: 'rust-webassembly',
    description: 'Explore how to use Rust to create WebAssembly applications.',
    image: 'https://example.com/images/learn/rust-webassembly.webp',
    is_new: true,
    level: 'Advanced',
    is_show: true,
  },
  {
    id: 4,
    title: 'Rust and Solidity Integration',
    slug: 'rust-solidity',
    description: 'Learn how to integrate Rust with Solidity for smart contracts.',
    image: 'https://example.com/images/learn/rust-solidity.webp',
    is_new: true,
    level: 'Advanced',
    is_show: true,
  },
];