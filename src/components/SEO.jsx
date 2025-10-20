import { useEffect } from 'react';

const SEO = ({ 
  title = "ShopSmart Pro - Your Smarter Shopping Assistant | Compare Prices, Track Deals & Save Money", 
  description = "ShopSmart Pro is your ultimate shopping assistant for Amazon & eBay. Track prices, compare deals, and save money with one click. Install free Chrome extension.", 
  keywords = "price comparison, price tracking, shopping assistant, Amazon deals, eBay deals, price monitoring, discount finder, coupon code, cashback deals, price alerts",
  url = "https://shopsmartpro.com/",
  image = "https://shopsmartpro.com/images/shopsmart-pro-social.jpg",
  type = "website",
  schema = null
}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = description;
      document.head.appendChild(newMetaDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = keywords;
      document.head.appendChild(newMetaKeywords);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    } else {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = url;
      document.head.appendChild(newCanonical);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', title);
    } else {
      const newOgTitle = document.createElement('meta');
      newOgTitle.setAttribute('property', 'og:title');
      newOgTitle.setAttribute('content', title);
      document.head.appendChild(newOgTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', description);
    } else {
      const newOgDescription = document.createElement('meta');
      newOgDescription.setAttribute('property', 'og:description');
      newOgDescription.setAttribute('content', description);
      document.head.appendChild(newOgDescription);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', url);
    } else {
      const newOgUrl = document.createElement('meta');
      newOgUrl.setAttribute('property', 'og:url');
      newOgUrl.setAttribute('content', url);
      document.head.appendChild(newOgUrl);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', image);
    } else {
      const newOgImage = document.createElement('meta');
      newOgImage.setAttribute('property', 'og:image');
      newOgImage.setAttribute('content', image);
      document.head.appendChild(newOgImage);
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('name', 'twitter:title');
      twitterTitle.setAttribute('content', title);
    } else {
      const newTwitterTitle = document.createElement('meta');
      newTwitterTitle.name = 'twitter:title';
      newTwitterTitle.setAttribute('content', title);
      document.head.appendChild(newTwitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('name', 'twitter:description');
      twitterDescription.setAttribute('content', description);
    } else {
      const newTwitterDescription = document.createElement('meta');
      newTwitterDescription.name = 'twitter:description';
      newTwitterDescription.setAttribute('content', description);
      document.head.appendChild(newTwitterDescription);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('name', 'twitter:image');
      twitterImage.setAttribute('content', image);
    } else {
      const newTwitterImage = document.createElement('meta');
      newTwitterImage.name = 'twitter:image';
      newTwitterImage.setAttribute('content', image);
      document.head.appendChild(newTwitterImage);
    }

    // Handle structured data schema
    if (schema) {
      // Remove existing schema if it exists
      const existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) {
        existingSchema.remove();
      }

      // Add new schema
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }
  }, [title, description, keywords, url, image, schema]);

  return null;
};

export default SEO;