export const profile = {
  name: "Rudransh Garewal",
  location: "Chennai, IN",
  email: "shrijeegarewal07@gmail.com",
  phone: "+91 93404 99870",
  resume: "https://drive.google.com/file/d/1fEQ83OY5cBBTMB-3NHAxggeZ6AKKQNHT/view?usp=sharing",
  photo: "/profile-pic.jpg",
};

export const tagline = "backend & platform engineering";

export const tags = [
  "go",
  "rust",
  "soroban",
  "distributed systems",
  "grpc",
  "kafka",
  "kubernetes",
  "solidity",
  "embedded rust",
];

export const about = [
  "most of my work is distributed systems and blockchain infrastructure, including a liquid staking protocol funded by a stellar community fund grant and running for 500+ users.",
  "i also build closer to the metal: an air-gapped esp32 signer in rust, c and assembly, and build tooling for a robotics platform.",
];

export const socials = [
  { label: "github", href: "https://github.com/RudranshG07" },
  { label: "x", href: "https://x.com/rudyg0722" },
  { label: "linkedin", href: "https://www.linkedin.com/in/rudransh-garewal-784492253/" },
  { label: "email", href: "mailto:shrijeegarewal07@gmail.com" },
];

export const summary = [
  {
    text: "Backend and platform engineering in Go and Rust: settlement paths, retry logic, and accounting that still balances when something fails halfway through",
    tags: [],
  },
  {
    text: "Building developer tooling and build infrastructure for robotics",
    tags: [{ label: "Pyros", href: "https://www.getpyros.com/" }],
  },
  {
    text: "Awarded $15,000 by the Stellar Community Fund to build and ship STELLO, live to 500+ users",
    tags: [{ label: "STELLO", href: "https://stellofi.com" }],
  },
  {
    text: "9 hackathon wins across EVM, BTC L2, Solana, Stellar and Ledger, $7,000 in prizes",
    tags: [],
  },
  {
    text: "Member at Satoshi Lab, the cybersecurity and blockchain group inside Next Tech Lab",
    tags: [],
  },
  {
    text: "Engineering student in Chennai, studying Electronics & Computer Engineering at SRM",
    tags: [{ label: "SRMIST", href: "https://www.srmist.edu.in/" }],
  },
];

export const projects = [
  {
    name: "STELLO",
    logo: "/logo-stello.jpg",
    note: "backed by Stellar Community Fund",
    description: "Liquid staking on Stellar: sXLM, validator delegation and lending pools",
    href: "https://stellofi.com",
  },
  {
    name: "Scry",
    logo: "/logo-scry.jpg",
    note: "",
    description: "Prediction markets settled by live camera feeds and computer vision",
    href: "https://github.com/RudranshG07/scry",
  },
  {
    name: "Pyros",
    logo: "/logo-pyros.jpg",
    note: "1,000+ npm downloads",
    description: "Build infrastructure and backend services for a robotics platform",
    href: "https://www.getpyros.com/",
  },
  {
    name: "Hardware Wallet",
    logo: "/logo-wallet.jpg",
    note: "open source",
    description: "Air-gapped ESP32 signer written in Rust, C and assembly",
    href: "https://github.com/RudranshG07/hardware-wallet",
  },
];

export const experience = [
  {
    role: "Protocol Engineer",
    org: "STELLO",
    href: "https://stellofi.com",
    period: "Apr 2026 to Present",
    location: "Remote",
    bullets: [
      "Awarded a $15,000 grant by the Stellar Community Fund through its public review and community vote, to build and ship STELLO, live to 500+ early users: XLM staking against sXLM, validator delegation, lending pools, an auto-rebalancing yield strategy and token-weighted governance.",
      "Wrote the Soroban contracts in Rust, including the settlement path that keeps stake accounting consistent when a delegation or rebalance fails partway through.",
    ],
  },
  {
    role: "Member",
    org: "Next Tech Lab, Satoshi Lab",
    href: "https://nextech.io/",
    period: "Apr 2025 to Present",
    location: "SRMIST",
    bullets: [
      "Cybersecurity and blockchain group within Next Tech Lab, the first Indian student-led winner of the QS Reimagine Education Award.",
    ],
  },
];

export const achievements = [
  {
    title: "9 hackathon wins across EVM, BTC L2, Solana, Stellar and Ledger",
    prize: "$7,000",
  },
  {
    title: "Stellar Community Fund grant to build and ship STELLO",
    prize: "$15,000",
  },
];

export const skills = [
  { group: "Languages", items: "Go, Rust, Python, TypeScript, C++, Solidity" },
  { group: "Backend", items: "gRPC, Kafka, REST, PostgreSQL, Redis, Node.js, microservices" },
  { group: "Infrastructure", items: "Docker, Kubernetes, Linux, GitHub Actions, Prometheus, Grafana" },
  { group: "Embedded", items: "ESP32, embedded Rust, linker scripts" },
  { group: "Distributed", items: "P2P networking, consensus, Ethereum, Solana, Stellar / Soroban, Bitcoin L2s" },
];
