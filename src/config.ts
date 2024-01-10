import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "PauMB",
  desc: "Mi block de notas ",
  title: "PauMB",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerPage: 4,
};

export const LOCALE = {
  lang: "es", 
  langTag: ["es-ES"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/PauMB85",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/paumaravi/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
];
