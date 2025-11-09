


export function configLangHeader(
  headerValue: string | null | undefined,
  supportedLangs: string[]
): string | 'en' {
  if (!headerValue) return 'en';

  const langs = headerValue
    .split(",")
    .map(lang => lang.split(";")[0].trim().toLowerCase());

  for (const lang of langs) {
    if (supportedLangs.includes(lang)) return lang;

    const short = lang.split("-")[0];
    if (supportedLangs.includes(short)) return short;
  }

  return 'en';
}