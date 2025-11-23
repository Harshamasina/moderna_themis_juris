import { useEffect } from 'react';
import shareImage from '../assets/logo.png';

const metaConfig = {
  title: 'Moderna Themis Juris | Healthcare, Food & Pharma Legal Advisory',
  description:
    'Moderna Themis Juris OPC provides legal research, compliance, and advisory services for hospitals, preventive care providers, pharma innovators, and food businesses across India.',
  keywords:
    'healthcare law, pharma compliance counsel, food safety legal services, corporate regulatory advisory, legal epidemiology India, Moderna Themis Juris',
  url: 'https://modernathemisjuris.com/',
  siteName: 'Moderna Themis Juris',
  twitterHandle: '@moderna_themis',
};

const ensureMetaTag = (attribute, key, value) => {
  if (!value) return;
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
};

const ensureLinkTag = (rel, href, sizes, type) => {
  if (!href) return;
  let tag = document.head.querySelector(`link[rel="${rel}"]${sizes ? `[sizes="${sizes}"]` : ''}`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    if (sizes) tag.setAttribute('sizes', sizes);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
  if (type) {
    tag.setAttribute('type', type);
  }
};

const SEO = () => {
  useEffect(() => {
    document.title = metaConfig.title;
    document.documentElement.lang = 'en';

    const metaTags = [
      { attr: 'name', key: 'description', value: metaConfig.description },
      { attr: 'name', key: 'keywords', value: metaConfig.keywords },
      { attr: 'name', key: 'twitter:card', value: 'summary_large_image' },
      { attr: 'name', key: 'twitter:site', value: metaConfig.twitterHandle },
      { attr: 'name', key: 'twitter:title', value: metaConfig.title },
      { attr: 'name', key: 'twitter:description', value: metaConfig.description },
      { attr: 'name', key: 'twitter:image', value: shareImage },
      { attr: 'property', key: 'og:title', value: metaConfig.title },
      { attr: 'property', key: 'og:description', value: metaConfig.description },
      { attr: 'property', key: 'og:url', value: metaConfig.url },
      { attr: 'property', key: 'og:image', value: shareImage },
      { attr: 'property', key: 'og:site_name', value: metaConfig.siteName },
    ];

    metaTags.forEach(({ attr, key, value }) => ensureMetaTag(attr, key, value));
    ensureLinkTag('canonical', metaConfig.url);
    ensureLinkTag('icon', shareImage, '512x512', 'image/png');
    ensureLinkTag('apple-touch-icon', shareImage);
  }, []);

  return null;
};

export default SEO;
