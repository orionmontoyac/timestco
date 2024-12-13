/**
 * * Configuration of the i18n system data files and text translations
 * Example translations below are for English and French, with textTranslations used in src/layouts/BlogLayoutCenter.astro and src/components/Hero/[hero].astro
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import siteDataEn from "./en/siteData.json";
import siteDataFr from "./es/siteData.json";
import navDataEn from "./en/navData.json";
import navDataFr from "./es/navData.json";
import faqDataEn from "./en/faqData.json";
import faqDataFr from "./es/faqData.json";
import testimonialDataEn from "./en/testimonialData.json";
import testimonialDataFr from "./es/testimonialData.json";

export const dataTranslations = {
  en: {
    siteData: siteDataEn,
    navData: navDataEn,
    faqData: faqDataEn,
    testimonialData: testimonialDataEn,
  },
  es: {
    siteData: siteDataFr,
    navData: navDataFr,
    faqData: faqDataFr,
    testimonialData: testimonialDataFr,
  },
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts to translate various strings on your site.
 *
 * ## Examples
 *
 * ```ts
 * import { getLocaleFromUrl } from "@js/localeUtils";
 * import { useTranslations } from "@js/translationUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("back_to_all_posts"); // this would be "Retour à tous les articles" if the current locale is "fr"
 * ```
 * or
 * ```ts
 * import { useTranslations } from "@js/translationUtils";
 * const t = useTranslations("fr");
 * t("back_to_all_posts"); // this would be "Retour à tous les articles"
 * ```
 */
export const textTranslations = {
  en: {
    hero_description: `A template for the next killer SaaS. Multiple pages and sections, blog, i18n, animations, CMS - all ready to go.`,
    back_to_all_posts: "Back to all posts",
    updated: "Updated",
  },
  es: {
    hero_description:
      "La empresa líder en servicios de cronometraje electrónico para todo tipo de eventos deportivos en cualquier lugar del país.",
    back_to_all_posts: "Retour à tous les articles",
    updated: "Mis à jour",
  },
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 * This can be useful for SEO reasons. The key does not matter, it just needs to match between languages
 *
 * ## Examples
 *
 * These routes must be everything after the base domain. So if this is "atlas.com/blog", the route would be "blog"
 * Or if this is "atlas.com/blog/my-post", the route would be "blog/my-post"
 */
export const routeTranslations = {
  en: {
    overviewKey: "overview",
  },
  es: {
    overviewKey: "apercu",
  },
} as const;
