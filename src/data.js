const base = import.meta.env.BASE_URL

const projects = [
    {
    name: "Uber Analysis",
    description: "Uber Analysis about the fare and driver details",
    image: `${base}dist/uber_analysis.png`, 
    tags: ["Tableau"],
    github: "https://github.com/aadit-vachher",
    live: "https://public.tableau.com/views/UberDashboardnewwwwww/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    name: "Blinkit Dataset Analysis",
    description: "Delivery performance dashboard showing on-time rate, delay distribution, delivery time versus distance patterns, and top delay reasons. Tracks trends by date and identifies outliers and partners driving delays to guide operational improvements.",
    image: `${base}blinkit_dataset.png`,
    tags: ["Looker Studio", "Data Analytics"],
    github: "https://github.com/aadit-vachher/Blinkit_dataset_analysis",
    live: "https://lookerstudio.google.com/reporting/812bcbe2-3de6-4e8f-ac81-69e58314562e"
  },
  {
    name: "Road Accidents Dashboard",
    description: "A data analytics dashboard built on a road accidents dataset. Analyzes accident patterns, trends, and risk factors to provide actionable insights for improving road safety and infrastructure planning.",
    image: `${base}road_accidents.png`,
    tags: ["Google Sheets", "Data Analytics"],
    github: "https://github.com/aadit-vachher/section-c_g-11_travel-and-infrastructure",
    live: "https://docs.google.com/spreadsheets/d/1zT9j58xiNe1nAsE5asIWHaov_ZkFqzPzI-yWX1NfUZo/edit?usp=sharing"
  },
  {
    name: "Second Brain",
    description: "A digital space to capture ideas, organize thoughts, and retrieve information. Built with Node.js, Prisma, and PostgreSQL with JWT authentication. Features include protected routes, database relationships, and a structured knowledge system.",
    image: `${base}secnod_brains.png`,
    tags: ["Node.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/aadit-vachher/second-brain",
    live: "https://second-brain-orcin.vercel.app"
  },
  {
    name: "Expense Tracker",
    description: "Helps users monitor spending habits and gain better control over personal finances through structured tracking. Built with React.js, Express, Prisma ORM, and JWT authentication with a clean modular backend structure.",
    image: `${base}expense_tracker.png`,
    tags: ["React", "Express", "Prisma"],
    github: "https://github.com/aadit-vachher/project_expense_tracker",
    live: "https://expense-tracker-main-frontend.netlify.app"
  },
  {
    name: "SAB Applier",
    description: "A document upload portal built with JavaScript. Allows users to submit and manage documents through a clean, intuitive interface with structured form handling and file upload functionality.",
    image: `${base}project-sabapplier.png`,
    tags: ["JavaScript"],
    github: "https://github.com/aadit-vachher/sabapplier",
    live: "https://sabapplier.netlify.app"
  }
]

export default projects
