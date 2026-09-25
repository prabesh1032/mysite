import { PROJECTS, projectSlug } from '../constants';

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://prabeshacharya10.com.np';
  const routes = ['', 'about', 'skills', 'projects', 'experience', 'services', 'achievements', 'testimonials', 'ai', 'contact'];

  const staticRoutes = routes.map((route, index) => ({
    url: route ? `${baseUrl}/${route}` : baseUrl,
    lastModified: '2026-09-25',
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.7,
  }));

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${projectSlug(project.title)}`,
    lastModified: '2026-09-25',
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
