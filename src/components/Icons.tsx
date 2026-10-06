import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement>;
export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.15 3.1-1.15.6 1.55.22 2.7.1 2.98.73.79 1.16 1.79 1.16 3.02 0 4.32-2.64 5.27-5.15 5.55.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
    </svg>
  );
}
export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.5V9.2h2.84v1.3h.04c.4-.75 1.36-1.55 2.8-1.55 3 0 3.56 1.98 3.56 4.55v5.25Z" />
    </svg>
  );
}
export function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
