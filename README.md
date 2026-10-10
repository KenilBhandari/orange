# OrangeDev — Complete Website Implementation Brief

## 1. Your Role

Act as a senior creative director, product designer, motion designer, and experienced frontend engineer.

Build a complete, production-quality website for **OrangeDev**, a software development company established in 2022.

The website must feel distinctive, sophisticated, modern, trustworthy, and exceptionally well-crafted. It should communicate that OrangeDev builds practical software that solves real operational problems for real businesses.

This is not a generic software agency landing page. Do not create a template-like SaaS website with random gradients, endless rounded cards, meaningless statistics, excessive icons, or generic AI-generated marketing copy.

The final result should feel like a carefully art-directed digital experience created by a small, highly capable software company that cares about both its products and the people using them.

**The priority is exceptional design, clear communication, smooth motion, simplicity, and credibility — not complexity in the codebase.**

## 2. Start by Understanding the Existing Project

Before writing any code:

1. Inspect the existing repository, its directory structure, dependencies, configuration, and available assets.
2. Find and study the existing website prototype. Identify its colors, typography, visual language, layout conventions, and existing components.
3. Preserve the established theme and the prototype's useful design decisions. Improve the execution rather than blindly replacing everything.
4. Locate all available product screenshots, project assets, fonts, and the original OrangeDev logo.
5. Identify the current Next.js and Tailwind versions and work with the installed versions wherever possible.
6. Understand what already works before making changes.

Do not overwrite existing work without understanding it.

Do not create a new project inside the existing project or introduce a new architecture unless absolutely necessary.

## 3. The Company Story

OrangeDev was established in 2022 with a straightforward mission: solve the everyday problems businesses face through useful, accessible software.

These problems range from straightforward stock management and reasonable payroll systems to complex ERP and payroll solutions.

The underlying philosophy is that software should be easy enough for people with limited technical knowledge to use confidently.

Workers, supervisors, managers, and owners should be able to understand their operations, track their work, and access the information they need without unnecessary complexity.

OrangeDev began with relatively small projects focused on individual needs. Over time, the company expanded into commerce websites, international web development, transport management, large-scale payroll systems, and enterprise resource planning.

### Company timeline

**2022 — The Beginning**

OrangeDev began with small projects designed to solve practical, individual problems.

Its first project was Client Comm / Client Commerce, a simple, clean, functional e-commerce website. Verify the exact public-facing project name from the existing assets before displaying it.

**2023 — Beyond Borders**

OrangeDev secured its first major website development project for a client in the United Kingdom, marking an important step in its development.

**2024 — Into Transport**

Trippy became the company's first major development project in the transport sector, serving transport managers and their operational needs.

**2025 — Payroll at Scale**

OrangeDev delivered a complete payroll software solution capable of handling more than 500 workers seamlessly. This was a significant milestone in the company's growth.

The same year also saw the delivery of multiple websites and digital interfaces for clients.

**2026 — Building Enterprise Systems**

OrangeDev emerged as an established brand and secured a fully operational ERP system for contractors.

The company continues to expand its capabilities, tackle larger operational challenges, and develop solutions for industries that need better ways to work.

Do not fabricate client names, awards, revenue, testimonials, customer counts, or other achievements.

## 4. Brand Positioning and Messaging

The central message:

**Software that makes work simpler.**

Supporting message:

From everyday business tools to complete operational systems, OrangeDev builds software that helps people work smarter, stay organized, and stay in control.

The company should come across as:

* Practical rather than flashy.
* Technically capable without being intimidating.
* Approachable to nontechnical users.
* Dependable and focused on long-term relationships.
* Ambitious without making exaggerated claims.
* Small enough to care, yet capable of delivering substantial systems.

Avoid overused agency phrases such as "We transform your digital landscape," "Innovative solutions for tomorrow," and "Where innovation meets excellence."

Use natural, precise, confident writing.

## 5. Visual Direction

Follow the existing prototype's theme, color palette, and brand identity.

Use the supplied OrangeDev logo as the visual foundation.

The logo consists of an orange circular form and a green curved arc above it. Preserve its original geometry and proportions.

The overall website should balance two contrasting visual states:

**Act I — Quiet, precise, monochrome**

* Off-white, white, black, and subtle neutral gray.
* Generous whitespace.
* Strong typography.
* Minimal interface elements.
* Restrained borders and fine lines.
* A detached, monochrome logo.
* A sense of anticipation.

**Act II — OrangeDev comes alive**

* Introduce the original orange and green brand colors.
* Use deliberate, high-quality transitions.
* Bring selected visual elements to life.
* Introduce carefully composed software interface previews.
* Increase the visual energy without making the design noisy.

This should feel like a designed transformation, not a generic scroll animation.

Do not introduce additional accent colors unless the existing prototype already uses them.

Use orange and green strategically rather than painting every section with brand colors.

## 6. Signature Experience: The Logo Comes Together

This is the most important creative requirement.

Create a distinctive opening experience around the existing logo.

### Initial state

When the page first loads:

* The background is restrained and monochrome.
* The orange circle appears as a black or charcoal circle.
* The green upper arc appears as a separate black or charcoal curved stroke.
* The arc is positioned slightly above its correct position, visibly detached from the circle.
* The logo should still be recognizable as an intentionally incomplete mark.
* The rest of the design feels calm, clean, and precise.

Use the actual supplied SVG paths or faithful inline SVG geometry. Do not approximate the logo with unrelated CSS shapes.

Preserve the circle's geometry, the arc's curvature, the stroke width, and the round caps.

### Scroll-triggered transformation

Create a carefully orchestrated animation tied to the opening section's scroll progress.

As the user scrolls:

1. The detached arc begins to descend smoothly toward the circle.
2. The arc settles into its original position, completing the logo.
3. The circle transitions from charcoal to the original OrangeDev orange.
4. The arc transitions to the original green.
5. The surrounding interface gradually introduces brand colors and richer visual details.
6. The hero content becomes fully visible and confident.
7. The transition leads naturally into the rest of the website.

The arc should align precisely with the original SVG geometry at the end of the animation.

The logo should not wobble excessively, bounce unnecessarily, rotate randomly, or behave like a loading spinner.

Aim for a refined, almost physical feeling: the brand is assembling itself.

### Technical implementation

Use an inline SVG for the animated logo, preserving the actual circle and arc geometry.

Use GSAP with ScrollTrigger only if it materially improves the synchronization and precision of this animation. Otherwise, a carefully implemented native scroll-driven animation is preferable.

The animation must:

* Work on mobile and desktop.
* Respect `prefers-reduced-motion`.
* Avoid layout shifts.
* Remain smooth during normal scrolling.
* Never prevent users from accessing content.
* Handle refreshes and direct navigation sensibly.
* Avoid unnecessarily pinning large sections or hijacking scroll.
* Clean up animation resources properly in React.

Do not build an elaborate animation framework for one logo.

### Optional finishing detail

A very subtle orange or green accent may travel through the interface during the transition. Keep this understated.

The defining moment is the logo itself — not a screen full of particles, glowing effects, or distracting motion.

## 7. Website Structure

Build a complete, responsive, multi-section company website.

Use the following structure unless the existing prototype provides a better, equally clear arrangement.

### A. Navigation

A clean, refined navigation bar featuring:

* OrangeDev logo.
* Work.
* Solutions.
* Our story.
* Contact.
* A clear primary CTA such as "Discuss a project."

The initial navigation should complement the monochrome opening. It should transition naturally into the brand's full-color state.

Use a restrained sticky or fixed navigation pattern if it improves the experience. Avoid a large, intrusive header.

The mobile menu must be fully functional, accessible, and visually consistent with the desktop design.

### B. Hero — Software that makes work simpler

This section should immediately communicate what OrangeDev does and why it matters.

Suggested copy:

**Eyebrow:** Software development, built around real work.

**Headline:** Software that makes work simpler.

**Supporting copy:** From everyday business tools to complete operational systems, we build practical software that helps people stay organized, make better decisions, and get more done.

**Primary CTA:** Discuss your project.

**Secondary CTA:** Explore our work.

Keep the headline large, beautifully typeset, and easy to understand.

Use deliberate line breaks, controlled text width, and generous negative space.

Do not surround the hero with several competing cards.

The animated logo should be the signature brand moment.

### C. What We Build

Introduce the breadth of OrangeDev's work without making it feel like an unstructured service catalogue.

Focus on four clear areas:

**Business Software**

Purpose-built applications for everyday business operations.

**Payroll & Workforce Management**

Reliable payroll workflows and systems that support real teams at scale.

**ERP & Operational Systems**

Connected tools that help businesses manage processes, people, and information.

**Websites & Digital Experiences**

Thoughtful, functional websites and interfaces designed around the people who use them.

Give each area a concise description.

Use typography, spacing, and carefully selected visual elements to differentiate these categories. Avoid creating four oversized, identical rounded cards.

If the prototype supports it, consider a typographic grid or alternating editorial layout.

### D. Selected Work

This is a key credibility section.

Showcase the strongest verified projects:

* Client Comm / Client Commerce — E-commerce.
* UK Client Project — Website Development.
* Trippy — Transport Management.
* Payroll Software — Workforce and payroll operations.
* Contractor ERP — Enterprise operations.

Use the actual project names, screenshots, and descriptions available in the repository.

Where project names or screenshots are missing, use accurate generic labels and clearly designed placeholders only when necessary. Do not invent product interfaces and present them as real customer work.

### Project presentation

Do not display a wall of screenshots.

Use a small number of carefully selected visuals — ideally three to five meaningful project previews across the entire website, depending on the quality of the assets available.

Each visual should have a purpose.

Use large, well-cropped screenshots in editorial layouts with clear project names, categories, and short descriptions.

Vary the compositions slightly while maintaining consistent spacing and typography.

For complex applications, present a screenshot inside a realistic browser or application frame, with subtle depth and a clean background.

Do not use a browser frame around every image if a simpler presentation looks better.

Avoid excessive device mockups, fake dashboard data, floating decorative UI elements, and complicated perspective effects.

Screenshots should feel like genuine evidence of the company's capabilities.

If a screenshot contains sensitive customer information, do not publish it without authorization. Use approved assets or a clearly labeled sanitized version.

### E. Built for the People Doing the Work

Create an emotional, human-centered section explaining the philosophy behind OrangeDev.

Suggested headline:

**Powerful software. Without the unnecessary complexity.**

Supporting copy:

The best software doesn't make people adapt to complicated systems. It helps them do their jobs with confidence.

Whether someone is managing inventory, processing payroll, supervising a team, or overseeing an entire operation, the experience should feel clear, dependable, and straightforward.

Emphasize simplicity, usability, and practical problem-solving.

This section should be visually calm and typographically strong.

### F. Our Journey

Present the 2022–2026 timeline as a polished editorial timeline rather than a conventional corporate milestone grid.

Use five milestones, one for each year.

The design should make the progression from small projects to large operational systems immediately understandable.

Potential headline:

**Five years of solving real problems.**

Use a vertical timeline on mobile and a carefully composed horizontal or vertical layout on larger screens, depending on the available space.

The timeline should be easy to read without animation.

Reveal milestones progressively as the user scrolls, but never make their content inaccessible without JavaScript.

Do not invent additional milestones.

### G. Why OrangeDev

Explain the company's actual differentiators:

* Solutions designed around real operational needs.
* Interfaces accessible to nontechnical users.
* Experience with complex business workflows.
* Reliable delivery and long-term client relationships.
* Technical support online and onsite, where agreed.
* Ongoing software operating support, subject to the relevant service agreement.

Potential headline:

**Built to work. Supported for the long run.**

Explain the support model accurately. Do not imply that every support service is unlimited or universally free.

The existing company story mentions lifetime software operating support. If this is a genuine commitment, explain its scope and applicable terms transparently rather than making an ambiguous blanket promise.

### H. Closing CTA

Finish with a confident, visually memorable section.

Suggested headline:

**Tell us what needs to work better.**

Supporting copy:

Whether you need a simple business tool, a dependable payroll system, or a complete ERP solution, let's talk about the problem you're trying to solve.

Primary CTA: Start a conversation.

Secondary CTA: Explore our work.

Use the brand colors with restraint and connect the visual language to the opening logo transformation.

### I. Footer

Include:

* OrangeDev logo.
* A short company description.
* Navigation links.
* Contact details, only when verified from existing project information.
* Social links, only when actual company profiles are available.
* Copyright year generated dynamically.
* Relevant privacy and legal links if the website has the necessary pages.

The footer should feel intentional, not like an afterthought.

## 8. Animation and Motion Direction

Use Lenis for smooth scrolling.

Animations should support the story, not compete with it.

Use restrained, coordinated effects:

* Gentle opacity and vertical reveals.
* Small image movement where appropriate.
* Staggered text reveals for selected headlines.
* Subtle image clipping or masking.
* Refined navigation transitions.
* Carefully timed transitions between monochrome and brand color.
* Minimal hover interactions with clear visual feedback.

Aim for the quality of a well-designed creative technology studio website, not a collection of animation demos.

### Important motion rules

* Keep most transitions between roughly 400 and 800 milliseconds unless scroll-linked.
* Avoid animating every element individually.
* Avoid random delays and excessive stagger effects.
* Avoid parallax on every section.
* Avoid constantly moving decorative elements.
* Do not sacrifice readability for animation.
* Avoid heavy blur filters and expensive full-screen effects.
* Respect reduced-motion preferences.
* Ensure content remains usable if animation initialization fails.

Integrate Lenis with the animation system correctly.

If GSAP and ScrollTrigger are used, establish a clean, predictable integration with Lenis and avoid multiple competing animation loops.

Do not introduce multiple animation libraries for overlapping responsibilities.

## 9. Design Quality Requirements

Pay close attention to:

**Typography**

Use a coherent type system with a strong display face and a readable body face. Prefer existing project fonts when appropriate. Otherwise, choose a restrained, modern pairing and load it efficiently.

Headlines should feel deliberate rather than oversized for the sake of impact.

**Spacing**

Use consistent spacing values. Allow major sections to breathe. Avoid cramped layouts and unnecessarily large empty areas.

**Grid**

Use a consistent content width and a clear grid that adapts intelligently to mobile, tablet, and desktop.

**Colors**

Use the existing brand palette. Preserve strong contrast and avoid adding unnecessary colors.

**Borders and surfaces**

Prefer subtle separators, clean backgrounds, and intentional layering. Avoid excessive rounded cards, glassmorphism, and shadows.

**Images**

Use real assets from the project. Treat screenshots as editorial content rather than decorative wallpaper.

**Responsive behavior**

Design mobile layouts intentionally. Do not simply shrink the desktop layout.

**Interaction**

Every button, link, menu, and CTA must have a meaningful action. No fake buttons, dead navigation links, or placeholder interactions disguised as working features.

## 10. Technical Stack

Use:

* Next.js with the existing project conventions.
* React.
* TypeScript, if the project is already using it or can adopt it without unnecessary migration.
* Tailwind CSS, matching the installed version.
* Lenis for smooth scrolling.
* GSAP and ScrollTrigger only if justified by the signature scroll animation.
* Native browser APIs and CSS for simpler interactions.

Prefer Next.js App Router if it is already present. If the project uses another established routing structure, do not migrate it without a compelling reason.

Use Server Components by default. Add `"use client"` only where client-side interaction, animation, or state is necessary.

Keep static content and page structure server-rendered wherever practical.

## 11. Codebase Simplicity — Non-Negotiable

The code must be as carefully designed as the website.

OpenCode must not overengineer the implementation.

Follow these rules:

1. Prefer a small number of clear, well-named files.
2. Keep components close to where they are used unless reuse is genuine.
3. Create shared components only when they eliminate meaningful duplication.
4. Do not abstract a component merely because two sections contain a heading or button.
5. Avoid unnecessary configuration files, wrappers, providers, hooks, utilities, and custom frameworks.
6. Do not build a design-system framework for a single website.
7. Do not introduce state management libraries for a mostly static marketing site.
8. Do not introduce a CMS, database, backend, or API unless the actual requirements need one.
9. Avoid deeply nested directories and generic `components/common/base/ui/shared` structures.
10. Do not create separate files for every trivial element.
11. Keep the content readable and easy to edit.
12. Use clear names rather than generic names such as `SectionOne`, `AnimatedThing`, or `Wrapper2`.
13. Avoid unnecessary comments that repeat what the code already says.
14. Add comments only when explaining genuinely non-obvious decisions.
15. Avoid `any`, unnecessary type machinery, excessive prop forwarding, and elaborate generic components.
16. Avoid giant components that become difficult to understand. Split meaningful sections into clear components when doing so genuinely improves readability.
17. Do not duplicate animation logic across sections. Share it only where the same real behavior is reused.
18. Do not install packages for features that CSS or existing dependencies can handle.
19. Avoid unnecessary abstractions around simple links, buttons, typography, and layout.
20. Prefer straightforward code that another developer can understand immediately.

A reasonable initial structure might look like:

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  navbar.tsx
  logo.tsx
  hero.tsx
  projects.tsx
  timeline.tsx
  footer.tsx
lib/
  projects.ts
public/
  images/
```

This is a suggestion, not a mandatory directory structure. Adapt it to the repository and keep it even simpler where possible.

Do not split files simply to achieve this exact tree.

Use data arrays for genuinely repetitive project or timeline content. Keep one-off editorial sections explicit rather than forcing every section into a universal rendering system.

## 12. Performance, Accessibility, and Reliability

The finished website must:

* Work correctly on modern mobile and desktop browsers.
* Use semantic HTML.
* Have accessible navigation and interactive controls.
* Maintain keyboard accessibility and visible focus states.
* Provide meaningful alt text for informative images.
* Avoid unnecessary client-side JavaScript.
* Use optimized images and Next.js image handling where appropriate.
* Prevent layout shifts.
* Use sensible font loading strategies.
* Respect reduced-motion settings.
* Avoid hydration errors.
* Avoid console errors and React warnings.
* Preserve readability when animations are disabled.
* Provide useful metadata, a page title, and a description.
* Include a suitable favicon or logo-based icon if the assets support it.

Use the real OrangeDev logo for branding rather than generating a substitute.

## 13. Implementation Workflow

Work in the following order:

**Step 1 — Inspect**

Read the existing code and assets. Understand the theme before implementing.

**Step 2 — Plan**

Decide on the page composition, reusable components, asset selection, and the logo animation approach.

Keep the plan concise. Do not spend time generating elaborate architecture documentation.

**Step 3 — Build the full page**

Implement the actual website, including all sections, real navigation, responsive layouts, and available project imagery.

Do not stop after the hero or produce only a visual mockup.

**Step 4 — Implement the signature animation**

Get the logo geometry and scroll transformation right. Make the monochrome opening transition into the full OrangeDev identity.

**Step 5 — Polish**

Refine typography, section spacing, screenshot composition, responsive layouts, hover states, and transitions.

**Step 6 — Verify**

Run the available lint, type-check, build, and test commands. Fix errors caused by the implementation.

If browser automation or screenshot tooling is already available, use it to inspect the actual result at desktop and mobile widths.

Check the opening state, the logo's completed state, navigation, image loading, footer, and reduced-motion behavior.

Do not claim that checks passed unless they were actually run.

**Step 7 — Final review**

Remove unused imports, dead code, unnecessary packages, debug output, and temporary placeholders.

Confirm that the implementation remains understandable and does not contain unnecessary abstractions.

## 14. Definition of Done

The work is complete only when:

* The entire website has been implemented, not just the first viewport.
* The existing theme and brand identity have been preserved.
* The opening logo begins monochrome with a detached upper arc.
* Scrolling brings the arc into position and restores the orange and green brand colors.
* The visual transition feels deliberate, smooth, and memorable.
* The website communicates OrangeDev's story and capabilities clearly.
* Project screenshots are used selectively and professionally.
* The timeline accurately reflects the company's progression from 2022 through 2026.
* All primary navigation and CTAs work.
* Mobile layouts are thoughtfully designed.
* Motion is polished but restrained.
* The implementation remains simple, maintainable, and easy to modify.
* Available verification commands have been run and implementation errors resolved.

## Final Creative Principle

Do not try to impress visitors by showing how complicated the website is.

Impress them through clarity, restraint, confidence, precise details, and the feeling that every element belongs exactly where it is.

OrangeDev builds software to simplify complicated work.

**The website should embody that same philosophy.**
