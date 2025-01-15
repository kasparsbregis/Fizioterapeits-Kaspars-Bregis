import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
        url: 'https://www.fiziokaspars.lv',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://www.fiziokaspars.lv/masaza',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://www.fiziokaspars.lv/vingrosana',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://www.fiziokaspars.lv/teiposana',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://www.fiziokaspars.lv/konsultacija',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://www.fiziokaspars.lv/pieteikties',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ]
  }