import nextra from "nextra";

const withNextra = nextra({
  contentDirBasePath: "/learn",
  search: {
    codeblocks: false,
  },
  // ... Other Nextra config options
});

export default withNextra({
  // ... Other Next.js config options
});
