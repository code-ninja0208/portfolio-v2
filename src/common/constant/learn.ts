import { ContentProps } from '../types/learn';

export const LEARN_CONTENTS: ContentProps[] = [
  {
    id: 1,
    title: 'JS Fundamentals',
    slug: 'js-fundamental',
    description: 'Master the fundamentals of programming in Rust.',
    image: '/images/learn/js.jpg',
    is_new: false,
    level: 'Beginner',
    is_show: true,
  },
  {
    id: 2,
    title: 'Full Stack Rust Development',
    slug: 'full-stack-rust',
    description: 'Learn how to build full stack applications using Rust.',
    image: '/images/learn/rust1.jpg',
    is_new: false,
    level: 'Intermediate',
    is_show: true,
  },
  {
    id: 3,
    title: 'Rust for WebAssembly',
    slug: 'rust-webassembly',
    description: 'Explore how to use Rust to create WebAssembly applications.',
    image: '/images/learn/rust2.jpg',
    is_new: true,
    level: 'Advanced',
    is_show: true,
  },
  {
    id: 4,
    title: 'Rust and Solidity Integration',
    slug: 'rust-solidity',
    description: 'Learn how to integrate Rust with Solidity for smart contracts.',
    image: '/images/learn/rust3.jpg',
    is_new: true,
    level: 'Advanced',
    is_show: true,
  },
];