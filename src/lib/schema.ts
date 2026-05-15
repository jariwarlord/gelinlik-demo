import { business, whatsappLink } from '../data/business';

const SITE = business.url;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ArticleMeta {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishDate: Date;
  modifiedDate?: Date;
}

export function localBusinessSchema(opts?: {
  url?: string;
  areaServed?: string[];
  description?: string;
}): Record<string, unknown> {
  const url = opts?.url ? `${SITE}${opts.url}` : SITE;
  const description = opts?.description ?? business.shortDescription;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE}#business`,
    name: business.name,
    image: business.ogImage,
    url,
    telephone: business.phone,
    email: business.email,
    description,
    priceRange: business.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: business.openingHours.dayOfWeek,
      opens: business.openingHours.opens,
      closes: business.openingHours.closes,
    },
    sameAs: [business.social.instagram, business.social.facebook, whatsappLink()],
  };

  if (opts?.areaServed && opts.areaServed.length > 0) {
    schema.areaServed = opts.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    }));
  }

  return schema;
}

export function breadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

export function faqPageSchema(faq: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function articleSchema(article: ArticleMeta): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image ?? business.ogImage,
    author: {
      '@type': 'Organization',
      name: business.name,
      url: business.url,
    },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      logo: {
        '@type': 'ImageObject',
        url: business.ogImage,
      },
    },
    datePublished: article.publishDate.toISOString(),
    dateModified: (article.modifiedDate ?? article.publishDate).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE}${article.url}`,
    },
  };
}

export function organizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: business.name,
    url: business.url,
    logo: business.ogImage,
    sameAs: [business.social.instagram, business.social.facebook],
  };
}
