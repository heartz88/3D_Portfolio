// Import assets with error handling
let assets = {};
try {
  assets = await import("../assets");
} catch (error) {
  console.error("Error importing assets:", error);
  // Fallback empty objects
  assets = {
    backend: '',
    blueprint: '',
    blueprintbrief: '',
    bootstrap: '',
    django: '',
    html: '',
    java: '',
    javascript: '',
    mongodb: '',
    nodejs: '',
    postgresql: '',
    python: '',
    reactjs: '',
    superdrug: '',
    tailwind: '',
    threejs: '',
    typescript: '',
    web: ''
  };
}

const {
  backend,
  blueprint,
  blueprintbrief,
  bootstrap,
  django,
  html,
  java,
  javascript,
  mongodb,
  nodejs,
  postgresql,
  python,
  reactjs,
  superdrug,
  tailwind,
  threejs,
  typescript,
  web
} = assets;

// Navigation links - safe static data
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Services - using safe fallback
export const services = [
  {
    title: "Web Developer",
    icon: web || '',
  },
  {
    title: "Backend Developer",
    icon: backend || '',
  },
];

// Technologies with safe fallbacks
export const technologies = [
  {
    name: "PostgreSQL",
    icon: postgresql || '',
  },
  {
    name: "Bootstrap",
    icon: bootstrap || '',
  },
  {
    name: "Django",
    icon: django || '',
  },
  {
    name: "Java",
    icon: java || '',
  },
  {
    name: "Python",
    icon: python || '',
  },
  {
    name: "HTML 5",
    icon: html || '',
  },
  {
    name: "JavaScript",
    icon: javascript || '',
  },
  {
    name: "TypeScript",
    icon: typescript || '',
  },
  {
    name: "React JS",
    icon: reactjs || '',
  },
  {
    name: "Tailwind CSS",
    icon: tailwind || '',
  },
  {
    name: "Node JS",
    icon: nodejs || '',
  },
  {
    name: "MongoDB",
    icon: mongodb || '',
  },
  {
    name: "Three JS",
    icon: threejs || '',
  },
];

// Experiences
export const experiences = [
  {
    title: "Digital Solutions Developer | Intern",
    company_name: "Superdrug",
    icon: superdrug || '',
    iconBg: "#E6DEDD",
    date: "May 2025 - July 2025",
    points: [
      "Developing and maintaining web applications using Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to find solutions to complex problems.",
      "Created solutions for one of which was making an Impex file Generator.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "The Blueprint Brief",
    icon: blueprint || '',
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Developing and maintaining website using Python specifically the Django library.",
      "Collaborating with other developers in achieving the main goal of making the website visually stunning and functional.",
      "Contributed to most of the styling, views and currently looking at the flow of the website .",
    ],
  },
];

// Testimonials - no asset dependencies
export const testimonials = [
  {
    testimonial:
      "Very professional and dedicated to their work. They delivered a high-quality product on time with good timing. Loved working along side him!",
    name: "Benyamin Mahamed",
    designation: "Co-founder",
    company: "The Blueprint Brief",
    image: "https://res.cloudinary.com/dxgqxseek/image/upload/v1/dxnghol8fpcv6lhhoudr.jpg",
  },
  {
    testimonial:
    `David showcased remarkable adaptability by handling various languages and technologies, playing a key role in a website launch that gained over a thousand newsletter subscribers in its first month.`,
    name: "Abdifatah Mahamed",
    designation: "Co-founder",
    company: "The Blueprint Brief",
    image: "https://res.cloudinary.com/dxgqxseek/image/upload/v1/Abdifatah_wqgavo",
  },
];

// Projects
export const projects = [
  {
    name: "The Blueprint Brief",
    description:
    `A multimedia legal education platform that simplifies complex legal information,
    news, and laws for students and aspiring legal professionals.
    Features legal insights, commercial news analysis,
    and educational blog content to make law accessible to everyone.`,
    tags: [
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "postgresql",
        color: "teal-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
    ],
    image: blueprintbrief || '',
    source_code_link: "https://theblueprintbrief.com/",
    isWebsite: true,
  },
];