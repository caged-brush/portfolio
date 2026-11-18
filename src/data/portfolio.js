export const profile = {
  name: "Suleiman Jibril-Ahmed",
  email: "suleimanj515@gmail.com",
  github: "https://github.com/caged-brush",
  linkedin: "https://www.linkedin.com/in/suleimanjibril",
};

export const projects = [
  {
    slug: "kavyx",
    name: "Kavyx",
    label: "Founder project",
    category: "Full-stack",
    image: "kavyx",
    headline: "A discovery platform for combat sports",
    description: "Kavyx gives fighters a place to share their records and find opportunities, and gives scouts a way to discover talent and reach out directly.",
    role: "Founder & Full-Stack Developer",
    period: "Jan 2025 – present",
    stack: ["React Native", "Next.js", "Node.js", "Supabase", "Socket.IO", "Spring Boot"],
    sections: [
      ["Making talent easier to find", "Scouts need practical details like a fighter’s weight class, record, and location before opening a conversation. I built role-specific profiles, search filters, and an opportunity feed around those details."],
      ["Owning the full stack", "I built the React Native client, Node.js and Express REST APIs, and Supabase PostgreSQL data layer. Socket.IO supports direct messaging, and a Java/Spring Boot service exposes fighter-specific match results."],
      ["Managing identity and releases", "I migrated from custom JWT authentication to Supabase Auth and integrated Supabase Storage with access controls for profile media. I’ve verified deployments across Render, Vercel, and Apple TestFlight."],
    ],
    links: [
      { label: "Visit Kavyx", href: "https://kavyx.tech" },
      { label: "View GitHub repository", href: "https://github.com/caged-brush/fighthub" },
    ],
  },
  {
    slug: "tool-visibility",
    name: "Tool Visibility Platform",
    label: "Acres Enterprises × TRU",
    category: "Hardware & data",
    image: "receiver",
    headline: "From BLE beacon to tool sighting",
    description: "A capstone with Acres Enterprises to help teams see where shared tools were last detected. I contributed the Raspberry Pi scanner and a simulator for full-stack testing.",
    role: "Hardware & Data Simulator Contributor",
    period: "Sep 2026 – present",
    stack: ["Python", "Raspberry Pi", "Bluetooth LE", "TypeScript", "NestJS", "Azure SQL"],
    sections: [
      ["Capturing a sighting", "I built a Python scanner on a Raspberry Pi to collect a beacon address, receiver ID, signal strength, and UTC timestamp from Bluetooth Low Energy advertisements."],
      ["Developing without the hardware", "I wrote a TypeScript simulator that outputs JSON sightings with tool ID, location, UTC timestamp, source, and confidence. Teammates could use those events to exercise integrations without waiting for a receiver or physical tag."],
      ["Integrating with the platform", "I worked with the frontend and backend contributors on a NestJS and Azure SQL platform and helped troubleshoot receiver connectivity, authentication, and local setup."],
    ],
  },
  {
    slug: "sugarspice",
    name: "Sugar & Spice",
    label: "Client website",
    category: "Web",
    image: "sugar",
    headline: "A website rebuild for a local beauty bar",
    description: "A mobile-first Next.js rebuild that gave the business a clearer way to present its services, gallery, and testimonials.",
    role: "Web Developer",
    stack: ["Next.js", "Tailwind CSS", "Motion", "Vercel"],
    sections: [
      ["Making services easier to find", "I worked directly with the owner and organized services, the gallery, and customer testimonials into distinct sections so visitors could find what they needed before booking."],
      ["Building for mobile", "I used Next.js App Router and Tailwind CSS to build responsive layouts that work across screen sizes. I used motion sparingly to support transitions and deployed the site on Vercel."],
    ],
  },
];

export const experience = [
  {
    organization: "Rulerise Inc.",
    role: "Software Developer Intern",
    period: "Jun – Sep 2024",
    location: "Toronto, ON · Remote",
    description: "Built responsive React and Next.js features from Figma prototypes using TypeScript and Tailwind CSS. Integrated REST APIs, reviewed pull requests, and resolved defects before releases in a remote Agile team.",
  },
  {
    organization: "Thompson Rivers University",
    role: "E-Learning Support Technician (Co-op)",
    period: "Sep – Dec 2024",
    location: "Kamloops, BC",
    description: "Supported faculty and students using WordPress and digital learning platforms. Triaged production issues, verified fixes, and documented recurring workflows.",
  },
];

export const skills = [
  ["Frontend & mobile", ["TypeScript", "React", "Next.js", "React Native", "Tailwind CSS"]],
  ["Backend & data", ["Node.js", "Express", "NestJS", "Spring Boot", "PostgreSQL", "Azure SQL"]],
  ["Cloud & tooling", ["AWS Lambda", "API Gateway", "S3", "DynamoDB", "Supabase", "Render", "Vercel"]],
  ["Languages", ["JavaScript", "Python", "Java", "SQL"]],
];
