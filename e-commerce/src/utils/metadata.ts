import type { Metadata } from 'next';

type OpenGraphType = 'website' | 'profile';

interface MetaOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  imageAlt?: string;
  type?: OpenGraphType;
}

const defaultMeta = {
  siteName: 'Shop.co',
  baseUrl: 'https://react-training-beta-dun.vercel.app',
  author: 'Thinh Pham',
  twitter: '@shopco',
  image: '/hero-image.jpg',
  twitterImage: '/hero-image.jpg',
  locale: 'en_US'
};

/**
 * Creates metadata for a page.
 * @param options Metadata options to customize the generated metadata.
 * @returns - Metadata object for the page.
 */
export function createMetadata(options: MetaOptions = {}): Metadata {
  const title = options.title ? options.title : defaultMeta.siteName;
  const description = options.description || 'Browser out the lastet products';
  const url = options.url || defaultMeta.baseUrl;
  const imageUrl =
    url +
    (defaultMeta.image.startsWith('/')
      ? defaultMeta.image
      : '/' + defaultMeta.image);
  const twitterImageUrl =
    url +
    (defaultMeta.twitterImage.startsWith('/')
      ? defaultMeta.twitterImage
      : '/' + defaultMeta.twitterImage);
  const type: OpenGraphType = options.type || 'website';

  return {
    title,
    description,
    keywords: options.keywords || [
      'ecommerce',
      'online shop',
      'fashion',
      'electronics',
      'home',
      'deals'
    ],
    authors: [{ name: defaultMeta.author }],
    creator: defaultMeta.author,
    robots: {
      index: true,
      follow: true,
      nocache: false
    },
    openGraph: {
      title,
      description,
      url,
      siteName: defaultMeta.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: options.imageAlt || defaultMeta.siteName
        }
      ],
      locale: defaultMeta.locale,
      type
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [twitterImageUrl],
      site: defaultMeta.twitter,
      creator: defaultMeta.twitter
    },
    metadataBase: new URL(defaultMeta.baseUrl),
  };
}
