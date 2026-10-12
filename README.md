# OrangeDev Website

The official website for OrangeDev, a software development company established in 2022. The website showcases the company's services, selected projects, company journey, and approach to building practical software solutions.

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Lenis for smooth scrolling
* GSAP and ScrollTrigger, if used for animations

## Getting Started

### Prerequisites

* Node.js (use a version compatible with the project dependencies)
* npm, pnpm, yarn, or the package manager specified by the project lockfile

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

### Environment Variables

Create a `.env.local` file in the project root if environment variables are required.

Configure the necessary production values before deployment. Do not commit secrets or private credentials to the repository.

### Run Locally

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Production Deployment

### Build

Create an optimized production build:

```bash
npm run build
```

### Start

Run the production server:

```bash
npm run start
```

The website can be deployed to a compatible hosting platform, such as Vercel or a server that supports Node.js.

For hosted deployments, connect the repository to the hosting provider, configure the required environment variables, and use the project's production build settings.

Ensure the production domain, HTTPS, and any required DNS records are configured correctly.

## Before Going Live

* Verify that all website sections and project details are accurate.
* Confirm that navigation links, contact links, and calls to action work correctly.
* Check the website on desktop, tablet, and mobile devices.
* Verify that images, fonts, and the OrangeDev logo load correctly.
* Test animations and reduced-motion accessibility.
* Confirm page metadata, favicon, and social sharing metadata.
* Run the production build and resolve any errors.
* Check the browser console for errors and warnings.
* Confirm that no development credentials, debug code, or temporary placeholders remain.

## Maintenance

* Keep dependencies updated and review security advisories.
* Test changes locally before deploying.
* Run the production build before merging or releasing changes.
* Verify the live website after each deployment.
* Keep project assets and company information up to date.

## Project Information

**Company:** OrangeDev
**Established:** 2022
**Purpose:** Building practical software that makes everyday business operations simpler.

---

© OrangeDev. All rights reserved.
