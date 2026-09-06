export const profile = {
  name: "Rudransh Garewal",
  location: "Chennai, IN",
  email: "shrijeegarewal07@gmail.com",
  phone: "+91 93404 99870",
  resume: "/Rudransh_Garewal.pdf",
  photo: "/profile-pic.png",
};

export const tagline = "backend & platform engineering — go, rust, distributed systems";

export const tags = [
  "go",
  "rust",
  "soroban",
  "grpc",
  "kafka",
  "postgres",
  "kubernetes",
  "solidity",
  "embedded rust",
  "p2p / consensus",
];

export const socials = [
  { label: "github", href: "https://github.com/RudranshG07" },
  { label: "x", href: "https://x.com/rudyg0722" },
  { label: "linkedin", href: "https://www.linkedin.com/in/rudransh-garewal-784492253/" },
  { label: "email", href: "mailto:shrijeegarewal07@gmail.com" },
];

export const summary = [
  {
    text: "Engineering student in Chennai, studying Electronics & Computer Engineering at SRM",
    tags: [{ label: "SRMIST", href: "https://www.srmist.edu.in/" }],
  },
  {
    text: "Awarded $15,000 by the Stellar Community Fund to build and ship STELLO, live to 500+ users",
    tags: [{ label: "STELLO", href: "https://stellofi.com" }],
  },
  {
    text: "Backend and platform engineering in Go and Rust — settlement paths, retry logic, and accounting that still balances when something fails halfway through",
    tags: [],
  },
  {
    text: "Building developer tooling and build infrastructure for robotics",
    tags: [{ label: "Pyros", href: "https://www.getpyros.com/" }],
  },
  {
    text: "9 hackathon wins across EVM, BTC L2, Solana, Stellar and Ledger — $4,500+ in prizes",
    tags: [],
  },
  {
    text: "Member at Satoshi Lab, the cybersecurity and blockchain group inside Next Tech Lab",
    tags: [],
  },
];

export const projects = [
  {
    name: "STELLO",
    note: "backed by Stellar Community Fund",
    description: "Liquid staking on Stellar — sXLM, validator delegation and lending pools",
    href: "https://stellofi.com",
  },
  {
    name: "Scry",
    note: "",
    description: "Prediction markets settled by live camera feeds and computer vision",
    href: "https://github.com/RudranshG07/scry",
  },
  {
    name: "Pyros",
    note: "1,000+ npm downloads",
    description: "Build infrastructure and backend services for a robotics platform",
    href: "https://www.getpyros.com/",
  },
  {
    name: "Hardware Wallet",
    note: "open source",
    description: "Air-gapped ESP32 signer written in Rust, C and assembly",
    href: "https://github.com/RudranshG07/hardware-wallet",
  },
];

export const experience = [
  {
    role: "Grant Recipient & Protocol Engineer",
    org: "Stellar Community Fund",
    href: "https://communityfund.stellar.org/",
    period: "Apr 2026 — Present",
    location: "Remote",
    bullets: [
      "Awarded $15,000 through SCF's public review and community vote to build and ship STELLO, live to 500+ early users: XLM staking against sXLM, validator delegation, lending pools, an auto-rebalancing yield strategy and token-weighted governance.",
      "Wrote the Soroban contracts in Rust, including the settlement path that keeps stake accounting consistent when a delegation or rebalance fails partway through.",
    ],
  },
  {
    role: "Member",
    org: "Next Tech Lab — Satoshi Lab",
    href: "https://nextech.io/",
    period: "Apr 2025 — Present",
    location: "SRMIST",
    bullets: [
      "Cybersecurity and blockchain group within Next Tech Lab, the first Indian student-led winner of the QS Reimagine Education Award.",
    ],
  },
];

export const achievements = [
  {
    title: "9 hackathon wins across EVM, BTC L2, Solana, Stellar and Ledger",
    prize: "$4,500+",
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
