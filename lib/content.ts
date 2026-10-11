export type Project = {
  index: string;
  slug: string;
  name: string;
  category: string;
  year: string;
  problem: string;
  contribution: string;
  art: "commerce" | "presence" | "trippy" | "payroll" | "erp";
  note: string;
  story: string[];
  points: string[];
};

export const PROJECTS: Project[] = [
  {
    index: "05",
    slug: "contractor-erp",
    name: "Contractor ERP",
    category: "Enterprise operations",
    year: "2026",
    problem: "Contractors needed projects, sites, labour, materials, and payments in one dependable system.",
    contribution: "Built a fully operational ERP: project progress from sites, muster, salary, stock, expenses, and reports.",
    art: "erp",
    note: "Sample data preview",
    story: [
      "By 2026 OrangeDev had become an established brand and took on its largest system yet: a fully operational ERP for contractors. This is the project where every earlier lesson compounds. Commerce taught simplicity, the UK project taught delivery, Trippy taught operations, payroll taught precision.",
      "The system connects what contractors previously tracked in separate places: projects with progress derived from their sites, labour with attendance linked salary and advances, materials with stock that can never go negative, expenses split cleanly between site and personal, client payments, and reports across all of it.",
      "The preview on this site uses representative sample data. It shows the system's structure, not a client's live operation: one coherent operational environment instead of five scattered tools.",
    ],
    points: [
      "Project progress derived from sites",
      "Labour, attendance, and salary in one flow",
      "Materials with guarded stock",
      "Site versus personal expense separation",
      "Client payments and cross cutting reports",
    ],
  },
  {
    index: "04",
    slug: "payroll-software",
    name: "Payroll Software",
    category: "Workforce and payroll",
    year: "2025",
    problem: "Processing pay for 500+ workers every cycle without errors or end of month panic.",
    contribution: "Built attendance linked salary calculation, advances, approvals, and payment records at scale.",
    art: "payroll",
    note: "Supports 500+ workers",
    story: [
      "The 2025 payroll build was a breakthrough: a complete payroll system handling more than 500 workers seamlessly. Payroll is unforgiving software. Every number lands in someone's pocket, and every mistake lands in someone's trust.",
      "The design treats accuracy as a user experience problem. Employee lists stay structured, payroll status is always visible, earnings summaries read at a glance, and the approval step makes the whole run feel deliberate rather than anxious. Names and figures shown here are representative sample data.",
      "The same year also brought multiple client websites and interfaces. Payroll at scale is what proved OrangeDev could carry systems where precision matters most.",
    ],
    points: ["Structured employee lists", "Earnings summaries and status indicators", "Payroll runs supporting 500+ workers", "Clean approval flow"],
  },
  {
    index: "03",
    slug: "trippy",
    name: "Trippy",
    category: "Transport management",
    year: "2024",
    problem: "Transport managers needed coordination and control over daily movement without phone chaos.",
    contribution: "Built dispatch, route, and fleet status workflows for transport operations.",
    art: "trippy",
    note: "Sample data preview",
    story: [
      "Trippy, started in 2024, was OrangeDev's first major build for the transport sector, and its first software for people whose work never sits still. Transport managers coordinate vehicles, routes, and people across a moving day, and phone calls were doing all of it.",
      "The software gives that day a shape: routes drawn as systems rather than lists, dispatch boards with honest status indicators, and fleet overviews that stay readable when operations get busy. Routes and figures shown here are representative sample data.",
      "It was the company's first step into operational software: systems used in the middle of the working day, where clarity is essential.",
    ],
    points: ["Route and dispatch workflows", "Fleet status overview", "Status indicators for daily operations"],
  },
  {
    index: "02",
    slug: "uk-website",
    name: "UK Website",
    category: "Website development",
    year: "2023",
    problem: "A UK client needed a digital presence with clear hierarchy and dependable delivery across borders.",
    contribution: "Built a considered, content first website with careful typography and straightforward structure.",
    art: "presence",
    note: "Sample data preview",
    story: [
      "In 2023 OrangeDev took on its first major international project: a full website build for a client in the United Kingdom. Working across borders meant communication had to be precise and delivery dependable. There was no room for ambiguity about what was being built.",
      "The result was a content first website: considered typography, clear hierarchy, and a structure that guides readers instead of decorating around them. The preview shown here uses representative sample content, not the client's actual pages.",
      "It proved the studio could carry a project beyond its home market, and marked the step from smaller builds to client work with real reputation attached.",
    ],
    points: ["Content first page structure", "Considered typography and hierarchy", "Remote delivery with clear communication"],
  },
  {
    index: "01",
    slug: "client-commerce",
    name: "Client Commerce",
    category: "E-commerce",
    year: "2022",
    problem: "A small business needed a clean online store customers could finish buying from.",
    contribution: "Designed and built a simple, fast storefront with a clear product, cart, and checkout flow.",
    art: "commerce",
    note: "Sample data preview",
    story: [
      "OrangeDev's first project, taken on in 2022, was deliberately small: a single online store for a single business. The brief was not scale or novelty. It was usability. Customers had to find products, understand prices, and complete a purchase without help.",
      "The build stayed close to that brief. A clean catalogue, an honest cart, and a checkout summary that shows exactly what you pay before you pay it. Product names and figures shown on this site are representative sample data.",
      "It set the template for everything after: start with the person's actual task, remove everything that gets in the way, and make the software feel obvious.",
    ],
    points: ["Clean product catalogue", "Simple cart and checkout summary", "Fast on phones and low bandwidth"],
  },

];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export const TIMELINE = [
  {
    year: "2022",
    title: "The Beginning",
    text: "Small, practical projects for individuals. First build: Client Commerce, a simple and usable e-commerce website.",
  },
  {
    year: "2023",
    title: "Beyond Borders",
    text: "First major website development project for a client in the United Kingdom.",
  },
  {
    year: "2024",
    title: "Into Transport",
    text: "Trippy, the first major build for transport managers and their daily operations.",
  },
  {
    year: "2025",
    title: "Payroll at Scale",
    text: "Complete payroll software handling 500+ workers seamlessly, plus multiple client websites and interfaces.",
  },
  {
    year: "2026",
    title: "Enterprise Systems",
    text: "Established studio. Fully operational ERP for contractors, and larger operational problems ahead.",
  },
];

export const SERVICES = [
  {
    n: "01",
    title: "Business Software",
    text: "Purpose built applications for everyday operations: stock, attendance, and the tools teams open every morning.",
  },
  {
    n: "02",
    title: "Payroll and Workforce",
    text: "Reliable payroll workflows and workforce systems that support real teams at scale, including 500+ worker operations.",
  },
  {
    n: "03",
    title: "ERP and Operations",
    text: "Connected tools for projects, sites, people, materials, and money. Progress you can trust.",
  },
  {
    n: "04",
    title: "Websites and Interfaces",
    text: "Thoughtful, functional websites and interfaces designed around the people who use them.",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Understand the real work",
    text: "We start with how your team actually works, the busiest hour not the demo flow. One honest conversation is enough to begin.",
  },
  {
    n: "02",
    title: "Shape the simplest path",
    text: "We map the smallest system that solves the problem: what stays, what goes, and what must never break.",
  },
  {
    n: "03",
    title: "Build in the open",
    text: "Working software early, shared often. You see progress on real data, not slides, from storefront to payroll to ERP.",
  },
  {
    n: "04",
    title: "Prove it on a working day",
    text: "We test with non technical users doing real tasks like muster, salary, and stock until it feels obvious.",
  },
  {
    n: "05",
    title: "Support for the long run",
    text: "Online and onsite support where agreed, in writing. Relationships since 2022, not tickets that close at handover.",
  },
];

export const FAQS = [
  {
    q: "How do we start a project?",
    a: "Tell us what needs to work better. One honest line is enough. We reply within one working day, align on the real problem, and propose the simplest path forward in plain language.",
  },
  {
    q: "How long does typical work take?",
    a: "Small tools and websites move in weeks. Operational systems like payroll or ERP are phased so you get working software early. Timelines are agreed up front, in writing, before we build.",
  },
  {
    q: "Who is the software designed for?",
    a: "Non technical teams first: workers, supervisors, and owners. If a first time user cannot use it with confidence on a busy day, we treat that as a design failure.",
  },
  {
    q: "Do you provide support after delivery?",
    a: "Yes. Ongoing software operating support is covered by the relevant service agreement, online and onsite where agreed with each client.",
  },
  {
    q: "Can we see your client work?",
    a: "Client systems handle sensitive operational data, so this site shows representative product previews with sample data instead of live client screens. Each work story describes what was built, for whom, and why.",
  },
];
