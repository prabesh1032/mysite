import Script from 'next/script';
import './globals.css';

const profileOgImage = 'https://prabeshacharya10.com.np/images/profile2.png';

export const metadata = {
  metadataBase: new URL('https://prabeshacharya10.com.np'),
  title: {
    default: 'Prabesh Acharya | Full Stack Developer',
    template: '%s | Prabesh Acharya',
  },
  description: 'Prabesh Acharya is a Full Stack Developer from Nepal specializing in Laravel, React, Next.js, MERN Stack, TypeScript, and REST APIs.',
  keywords: [
    'Prabesh Acharya',
    'Full Stack Developer Nepal',
    'Laravel Developer',
    'React Developer',
    'Next.js Developer',
    'MERN Stack Developer',
    'Web Developer Kathmandu',
  ],
  applicationName: 'Prabesh Acharya Portfolio',
  authors: [{ name: 'Prabesh Acharya', url: 'https://prabeshacharya10.com.np' }],
  creator: 'Prabesh Acharya',
  publisher: 'Prabesh Acharya',
  category: 'technology',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg', apple: '/images/useravatar.avif' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Prabesh Acharya Portfolio',
    title: 'Prabesh Acharya | Full Stack Developer',
    description: 'Portfolio of Prabesh Acharya — building modern, scalable, and user-focused web applications.',
    images: [{ url: profileOgImage, width: 896, height: 1195, alt: 'Prabesh Acharya - Full Stack Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prabesh Acharya | Full Stack Developer',
    description: 'Full Stack Developer from Nepal specializing in Laravel, React, Next.js, and MERN Stack.',
    creator: '@PrabeshAch33319',
    images: [profileOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EKYJWKB5B5" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EKYJWKB5B5');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Prabesh Acharya',
              url: 'https://prabeshacharya10.com.np',
              image: profileOgImage,
              jobTitle: 'Full Stack Developer',
              description: 'Full Stack Developer from Nepal specializing in Laravel, React, Next.js, MERN Stack, TypeScript, and REST APIs.',
              email: 'mailto:praveshach1032@gmail.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressCountry: 'NP' },
              sameAs: [
                'https://github.com/prabesh1032',
                'https://www.linkedin.com/in/prabesh1032/',
                'https://www.instagram.com/prabesh_ach/',
                'https://x.com/PrabeshAch33319',
              ],
              knowsAbout: ['Laravel', 'React.js', 'Next.js', 'MERN Stack', 'TypeScript', 'REST APIs', 'MySQL', 'MongoDB'],
            }).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  );
}
