import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aetherlabs.es';
  const now = new Date();

  return [
    { url: baseUrl,                                          lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/claude-lab`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/software-lab`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/agents-lab`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/gen-ai-lab`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/marketing-lab`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/learn-lab`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/open-lab`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/casos`,                              lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/nosotros`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contacto`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/web-express`,                        lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${baseUrl}/systems-lab/sesion-de-claridad`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
