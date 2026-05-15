# Harbor Table

Harbor Table is a restaurant reservation concept for tasting reservations, chef's counter seats, service scheduling, paid dining moments, guest details, and confirmation flows.

This website is powered by Wix Headless and built using [wix-headless.dev](https://www.wix-headless.dev).

## Links

- Live site: [https://harbor-tab-6b04dc4c-gonenj.wix-site-host.com](https://harbor-tab-6b04dc4c-gonenj.wix-site-host.com)
- Source: [https://github.com/wix-incubator/harbortable](https://github.com/wix-incubator/harbortable)
- Wix site ID: `00ff56c4-8c5c-40d1-a8ac-39213f9f78ec`

## What It Showcases

- A custom Astro booking journey backed by Wix Bookings.
- Service discovery, availability lookup, and time slot selection.
- Booking creation from a custom front end.
- Paid booking handoff through Wix eCommerce checkout.
- Redirect handling for checkout and confirmation flows.
- Public `robots.txt` and `llms.txt` configured through Wix SEO txt APIs.
- Deployment with `wix release`.

## Wix Solutions Used

- Wix Headless Site for the managed site/runtime foundation.
- Wix Bookings for services, availability, and booking creation.
- Wix eCommerce for paid booking checkout.
- Wix Redirects for checkout/confirmation redirects.

## Wix SDKs And Packages

- `@wix/astro`
- `@wix/astro-pages`
- `@wix/sdk`
- `@wix/bookings`
- `@wix/ecom`
- `@wix/redirects`

## Local Development

Create a local env file from `.env.example` or run the Wix CLI env setup for the connected site.

```bash
npm install
npm run dev
```

## Build And Release

```bash
npm run build
npm run release
```
