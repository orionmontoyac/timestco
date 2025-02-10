import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Timestco",
  // Your website's title and description (meta fields)
  title:
    "Timest Colombia cronometraje eventos deportivos.",
  description:
    "Líder en cronometraje electrónico para eventos deportivos en Colombia. Precisión y confiabilidad garantizada en cada competencia.",

  // Your information for blog post purposes
  author: {
    name: "Cosmic Themes",
    email: "creator@cosmicthemes.com",
    twitter: "Cosmic_Themes",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "Cosmic Themes logo",
  },
};

export default siteData;
