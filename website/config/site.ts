export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Dmitrii Sidorin",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Overview",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
