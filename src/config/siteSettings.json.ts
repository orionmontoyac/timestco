/**
 * Global site settings
 */

import { type SiteSettingsProps } from "@config/types/configDataTypes";

// The below locales need to match what you've put in your `astro.config.mjs` file
export const locales = ["es", "en"] as const;
export const defaultLocale = "es" as const;

// localeMap is used to map languages to their respective locales - used for formatDate function
export const localeMap = {
  es: "es-ES",
  en: "en-US",
} as const;

// text to show in the language switcher for each locale
export const languageSwitcherMap = {
  es: "ES",
  en: "EN",
} as const;

// site settings that don't change between languages
export const siteSettings: SiteSettingsProps = {
  useViewTransitions: true,
  useAnimations: true,
};

export default siteSettings;
