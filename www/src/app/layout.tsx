import { SpeedInsights } from '@vercel/speed-insights/next';
import { Command } from 'lucide-react';
import type { Metadata } from 'next';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import type { FC, ReactNode } from 'react';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

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
    projectLink="https://github.com/trace-panic/xlearn"
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
          docsRepositoryBase="https://github.com/trace-panic/xlearn/tree/main"
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
