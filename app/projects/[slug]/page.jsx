import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS, projectSlug } from '../../../constants';

const siteUrl = 'https://prabeshacharya10.com.np';

const projectDetails = {
  'type-theory': {
    features: ['User authentication', 'Article and category management', 'Cloudinary image uploads', 'Responsive reading experience'],
    screenshots: ['/images/typetheory/typetheory.png'],
  },
  'yatra-sathi': {
    features: ['Destination discovery', 'Customized tour packages', 'Package availability', 'Secure booking and admin dashboard'],
    screenshots: ['/images/yatrasathi/home-bg2.jpg', '/images/yatrasathi/trekHimal.jpg'],
  },
  'task-management': {
    features: ['Task creation and editing', 'Status and progress tracking', 'Form validation', 'Role-based access control'],
    screenshots: ['/images/task management/task management.png'],
  },
};

const getProject = (slug) => PROJECTS.find((project) => projectSlug(project.title) === slug);

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: projectSlug(project.title) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} Project`,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: 'article',
      url: `${siteUrl}/projects/${slug}`,
      title: `${project.title} | Prabesh Acharya`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630, alt: `${project.title} project screenshot` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Prabesh Acharya`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const details = projectDetails[slug] || {
    features: ['Responsive user interface', 'Modern full-stack architecture', 'Database-backed content', 'Production-focused user experience'],
    screenshots: [project.image],
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: `${siteUrl}${project.image}`,
    url: `${siteUrl}/projects/${slug}`,
    creator: { '@type': 'Person', name: 'Prabesh Acharya', url: siteUrl },
    keywords: project.tech.join(', '),
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white md:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <div className="mx-auto max-w-6xl">
        <Link href="/projects" className="mb-10 inline-flex text-sm text-neon-blue hover:text-white">← Back to projects</Link>

        <header className="mb-12 max-w-4xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-neon-pink">{project.category}</p>
          <h1 className="mb-5 font-orbitron text-4xl font-bold text-white md:text-6xl">{project.title}</h1>
          <p className="text-lg leading-relaxed text-gray-300">{project.description}</p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-6">
            {details.screenshots.map((screenshot) => (
              <div key={screenshot} className="overflow-hidden rounded-2xl border border-neon-blue/30 bg-black shadow-[0_0_35px_rgba(0,243,255,0.12)]">
                <Image src={screenshot} alt={`${project.title} ${project.category.toLowerCase()} homepage screenshot`} width={1200} height={750} className="h-auto w-full object-cover" priority={screenshot === details.screenshots[0]} />
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="mb-5 font-orbitron text-xl text-neon-blue">Project Details</h2>
            <h3 className="mb-3 font-semibold text-white">Technologies</h3>
            <div className="mb-7 flex flex-wrap gap-2">
              {project.tech.map((tech) => <span key={tech} className="rounded border border-neon-blue/30 bg-neon-blue/10 px-3 py-1 text-sm text-neon-blue">{tech}</span>)}
            </div>
            <h3 className="mb-3 font-semibold text-white">Features</h3>
            <ul className="mb-8 list-disc space-y-2 pl-5 text-gray-300">
              {details.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <div className="flex flex-wrap gap-3">
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-2 font-semibold text-white">Visit Live Site</a>}
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/20 px-4 py-2 font-semibold text-white hover:border-neon-blue">View GitHub</a>}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
