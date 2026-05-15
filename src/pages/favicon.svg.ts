const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#fff8ef" />
  <circle cx="32" cy="32" r="20" fill="#f7ead8" stroke="#173642" stroke-width="4" />
  <path d="M18 38c5 0 5-4 10-4s5 4 10 4 5-4 10-4" fill="none" stroke="#1f6f78" stroke-width="4" stroke-linecap="round" />
  <path d="M26 17v17M32 17v17M38 17v17" stroke="#b85b45" stroke-width="4" stroke-linecap="round" />
  <path d="M18 47h28" stroke="#173642" stroke-width="4" stroke-linecap="round" />
</svg>`;

export const GET = () =>
  new Response(favicon, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/svg+xml; charset=utf-8",
    },
  });
