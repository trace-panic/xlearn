import { GitPullRequestClosed } from "lucide-react";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";

const BANNER = (
  <Banner dismissible={false}>🚧 XLearn is still under development</Banner>
);

const NAVBAR = (
  <Navbar
    logo={<GitPullRequestClosed />}
    projectLink="https://github.com/trace-panic/xlearn"
  />
);

const FOOTER = (
  <Footer>
    <p>© {new Date().getFullYear()} The XLearn Project.</p>
  </Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body style={{ fontFamily: "monospace" }}>
        <Layout
          banner={BANNER}
          navbar={NAVBAR}
          footer={FOOTER}
          pageMap={await getPageMap()}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/trace-panic/xlearn/tree/main"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
