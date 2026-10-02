import {
  calculateReadingTime,
  formatExcerpt,
  parseUrl,
} from '@/common/helpers';

describe('common helpers', () => {
  test('parseUrl extracts parent and content slugs', () => {
    expect(parseUrl('/learn/javascript/variables')).toEqual({
      parentSlug: 'javascript',
      contentSlug: 'variables',
    });
  });

  test('formatExcerpt strips HTML and truncates at a word boundary', () => {
    expect(
      formatExcerpt('<p>Hello <strong>world</strong> from Next.js</p>', 16),
    ).toBe('Hello world...');
  });

  test('calculateReadingTime returns minutes from readable content', () => {
    expect(calculateReadingTime('one two three four five six', 3)).toBe(2);
  });
});
