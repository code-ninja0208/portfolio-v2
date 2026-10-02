'use client';

import clsx from 'clsx';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState } from 'react';

import { DEFAULT_IMAGE_QUALITY } from '@/common/constant/site';
import cn from '@/common/libs/cn';

// Shared image wrapper keeps loading behavior and quality consistent across the portfolio.
type ImageProps = { rounded?: string } & NextImageProps;

const Image = (props: ImageProps) => {
  const {
    alt,
    src,
    className,
    rounded,
    quality = DEFAULT_IMAGE_QUALITY,
    ...rest
  } = props;
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={clsx(
        'overflow-hidden',
        isLoading ? 'animate-pulse' : '',
        rounded,
      )}
    >
      <NextImage
        className={cn(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-[1.02] blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
          rounded,
          className,
        )}
        src={src}
        alt={alt}
        quality={quality}
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};
export default Image;
