import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Command } from 'lucide-react';
import type { Metadata } from 'next';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import type { FC, ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'XLearn',
  appleWebApp: {
    title: 'Xlearn',
  },
  title: {
    absolute: '',
    template: '%s | XLearn',
  },
};

const banner = (
  <Banner dismissible={false}>
    🚧 The XLearn Project is still under development
  </Banner>
);

const navbar = (
  <Navbar
    logo={
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '1.2rem',
        }}
      >
        <Command />
        <p style={{ marginTop: '2px' }}>XLEARN</p>
      </div>
    }
    chatIcon={
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    }
    projectLink="https://github.com/trace-panic/xlearn"
    chatLink="https://discord.gg/F4QaEmaWsU"
  />
);

const footer = (
  <Footer className="flex-col items-center md:items-start">
    <p className="mt-6 text-xs">
      © {new Date().getFullYear()} The XLearn Project.
    </p>
  </Footer>
);

const RootLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/trace-panic/xlearn/tree/main/www"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
