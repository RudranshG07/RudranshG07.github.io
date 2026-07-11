// All copy/data sourced from the original portfolio site.

export const profile = {
  name: "Rudransh Garewal",
  initials: "RG",
  location: "Chennai",
  eyebrow: "PORTFOLIO '26",
  roles: ["backend", "web3", "protocol", "onchain"],
  roleSuffix: "developer",
  description:
    "i build reliable services, protocols, and onchain products in go and rust. from backend logic to cross-chain execution, i take ideas all the way to production.",
  email: "shrijeegarewal07@gmail.com",
  marquee: "BUILDING ONCHAIN",
};

export const socials = [
  { label: "Twitter", href: "https://x.com/rudyg0722" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rudransh-garewal-784492253/",
  },
  { label: "GitHub", href: "https://github.com/RudranshG07" },
  { label: "Email", href: "mailto:shrijeegarewal07@gmail.com" },
];

export type Project = {
  title: string;
  category: string;
  tags: string[];
  description: string;
  href: string;
  hrefLabel: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Compute Network",
    category: "50+ active nodes",
    tags: ["Rust", "Go", "Anchor"],
    description:
      "A peer-to-peer GPU and bandwidth network with onchain resource allocation, staking, rewards, dynamic pricing, and proof-of-resource verification.",
    href: "https://github.com/RudranshG07/gpu-r",
    hrefLabel: "Source",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Transaction Router",
    category: "1K+ requests · ~15s settlement",
    tags: ["Solidity", "Rust", "Go"],
    description:
      "An intent engine that turns plain-language requests into executable routes across Ethereum, Solana, Avalanche, and Stellar.",
    href: "https://github.com/RudranshG07/AI-Intent-Based-Atomic-Swap",
    hrefLabel: "Source",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "STELLO",
    category: "500+ users · 30+ proposals",
    tags: ["Stellar", "Soroban", "React"],
    description:
      "A live liquid staking protocol with validator delegation, lending pools, auto-rebalancing yield, and token-weighted governance.",
    href: "https://stellofi.vercel.app/",
    hrefLabel: "Live",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Hackathon Builds",
    category: "$4K+ in prizes",
    tags: ["EVM", "Stellar", "Stacks"],
    description:
      "Award-winning products across EVM chains, Stellar, Stacks, and Ledger, shipped from backend logic to live demos.",
    href: "https://github.com/RudranshG07",
    hrefLabel: "GitHub",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80&auto=format&fit=crop",
  },
];

export type Achievement = {
  metric: string;
  title: string;
  desc: string;
};

export const achievements: Achievement[] = [
  {
    metric: "$4K+",
    title: "In hackathon prizes",
    desc: "Across EVM, Stellar, Stacks, and Ledger builds.",
  },
  {
    metric: "1K+",
    title: "Intent requests routed",
    desc: "Across four chains with roughly 15-second settlement.",
  },
  {
    metric: "50+",
    title: "Active network nodes",
    desc: "Sharing GPU compute and bandwidth peer to peer.",
  },
  {
    metric: "0",
    title: "Critical vulnerabilities",
    desc: "Across everything deployed, so far.",
  },
];

export type SkillItem = { name: string; slug?: string };
export type SkillGroup = { title: string; items: SkillItem[]; image: string };

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=700&q=70&auto=format&fit=crop`;

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "Go", slug: "go" },
      { name: "Rust", slug: "rust" },
      { name: "Solidity", slug: "solidity" },
      { name: "TypeScript", slug: "typescript" },
    ],
    image: u("1555066931-4365d14bab8c"),
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Linux", slug: "linux" },
      { name: "CI/CD" },
    ],
    image: u("1639815188546-c43c240ff4df"),
  },
  {
    title: "Chains",
    items: [
      { name: "Ethereum", slug: "ethereum" },
      { name: "Solana", slug: "solana" },
      { name: "Stellar / Soroban", slug: "stellar" },
      { name: "Bitcoin L2s", slug: "bitcoin" },
    ],
    image: u("1593720213428-28a5b9e94613"),
  },
  {
    title: "Protocol tooling",
    items: [
      { name: "Anchor" },
      { name: "Foundry" },
      { name: "Hardhat" },
      { name: "Ethers.js" },
    ],
    image: u("1581276879432-15e50529f34b"),
  },
  {
    title: "Networking",
    items: [
      { name: "Consensus" },
      { name: "P2P networking" },
      { name: "Fault-tolerant state" },
      { name: "Resource verification" },
    ],
    image: u("1558494949-ef010cbdcc31"),
  },
  {
    title: "Focus areas",
    items: [
      { name: "DeFi" },
      { name: "DePIN" },
      { name: "Cross-chain execution" },
      { name: "Liquid staking" },
      { name: "Backend services" },
    ],
    image: u("1640340434855-6084b1f4901c"),
  },
];

export const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
