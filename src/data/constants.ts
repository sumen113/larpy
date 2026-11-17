// thoda zada ts ho gya idhar
import keyboardLayout from "./keyboard.json";

// Keycap layout (colors + logos) lives in ./keyboard.json, 6 per row.
// The enum order below must match the order of `keys` in that file.
export enum SkillNames {
  HYPRLAND = "hyprland",
  KOYEB = "koyeb",
  DOCKER = "docker",
  GITHUB = "github",
  REACT = "react",
  LINUX = "linux",
  ARCH = "archlinux",
  UNITY = "unity",
  CSS = "css",
  AMD = "amd",
  VSCODE = "vscode",
  NVIDIA = "nvidia",
  STEAM = "steam",
  WEBPACK = "webpack",
  JS = "js",
  GSAP = "gsap",
  CLAUDE = "claude",
  NODEJS = "nodejs",
  PYTHON = "python",
  GODOT = "godot",
  VERCEL = "vercel",
  TIKTOK = "tiktok",
  RAILWAY = "railway",
  FIREBASE = "firebase",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Optional local artwork for the 3D key; falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};

type SkillMeta = { label: string; shortDescription: string; color: string };

// color = HTML brand accent (skills grid glow); the keycap color comes from keyboard.json
const SKILL_META: Record<SkillNames, SkillMeta> = {
  [SkillNames.HYPRLAND]: {
    label: "Hyprland",
    shortDescription: "larpland",
    color: "#58e1ff",
  },
  [SkillNames.KOYEB]: {
    label: "Koyeb",
    shortDescription: "tbh i only used for free trial",
    color: "#9ca3af",
  },
  [SkillNames.DOCKER]: {
    label: "Docker",
    shortDescription: "i have no clue how to use",
    color: "#2496ed",
  },
  [SkillNames.GITHUB]: {
    label: "GitHub",
    shortDescription: "i might not be larping this",
    color: "#9ca3af",
  },
  [SkillNames.REACT]: {
    label: "React",
    shortDescription: `sumensite was made with react`,
    color: "#61dafb",
  },
  [SkillNames.LINUX]: {
    label: "Linux",
    shortDescription: "opsec demon",
    color: "#fcc624",
  },
  [SkillNames.ARCH]: {
    label: "Arch Linux",
    shortDescription: "i use arch btw",
    color: "#1793d1",
  },
  [SkillNames.UNITY]: {
    label: "Unity",
    shortDescription: "godot better",
    color: "#9ca3af",
  },
  [SkillNames.CSS]: {
    label: "CSS",
    shortDescription: "center a div",
    color: "#1572b6",
  },
  [SkillNames.AMD]: {
    label: "AMD",
    shortDescription: "amd >>> nvidia",
    color: "#ed1c24",
  },
  [SkillNames.VSCODE]: {
    label: "VS Code",
    shortDescription: "only microslop thing i use",
    color: "#007acc",
  },
  [SkillNames.NVIDIA]: {
    label: "NVIDIA",
    shortDescription: "power consumtion from 3080",
    color: "#76b900",
  },
  [SkillNames.STEAM]: {
    label: "Steam",
    shortDescription: "86% of library is pirated",
    color: "#66c0f4",
  },
  [SkillNames.WEBPACK]: {
    label: "Webpack",
    shortDescription: "it had a cool logo, idk what this is",
    color: "#8dd6f9",
  },
  [SkillNames.JS]: {
    label: "JavaScript",
    shortDescription: "most basic coding language",
    color: "#f0db4f",
  },
  [SkillNames.GSAP]: {
    label: "GSAP",
    shortDescription: "i like gsap",
    color: "#88ce02",
  },
  [SkillNames.CLAUDE]: {
    label: "Claude",
    shortDescription: "i like vibecoding",
    color: "#d97757",
  },
  [SkillNames.NODEJS]: {
    label: "Node.js",
    shortDescription: "sudo npm opsec",
    color: "#6cc24a",
  },
  [SkillNames.PYTHON]: {
    label: "Python",
    shortDescription: "i indent in spaces",
    color: "#3776ab",
  },
  [SkillNames.GODOT]: {
    label: "Godot",
    shortDescription: "pronounced, go dot",
    color: "#478cbf",
  },
  [SkillNames.VERCEL]: {
    label: "Vercel",
    shortDescription: "this always comes with fastly",
    color: "#9ca3af",
  },
  [SkillNames.TIKTOK]: {
    label: "TikTok",
    shortDescription: "only thing i use here daily",
    color: "#fe2c55",
  },
  [SkillNames.RAILWAY]: {
    label: "Railway",
    shortDescription: "i am larping railway",
    color: "#9d7bff",
  },
  [SkillNames.FIREBASE]: {
    label: "Firebase",
    shortDescription: "why do i need verified google account for this",
    color: "#ffca28",
  },
};

// Logos with a white local copy in /public/assets/keyboard/logos (keyed by normalized slug).
const LOCAL_LOGOS: Record<string, string> = {
  claude: "claude.svg",
  docker: "docker.svg",
  linux: "linux.svg",
  nodedotjs: "nodejs.svg",
  react: "react.svg",
  steam: "steam.svg",
  javascript: "js.svg",
};
// keyboard.json names that differ from the Simple Icons slug
const SLUG_ALIASES: Record<string, string> = { godot: "godotengine" };

const isUrl = (logo: string) => /^https?:\/\//.test(logo);
const normalize = (logo: string) => logo.toLowerCase().replace(/[^a-z0-9]/g, "");
const logoSlug = (logo: string) => {
  const slug = normalize(logo);
  return SLUG_ALIASES[slug] ?? slug;
};

/** White artwork for the 3D keycap: a full URL as given, else a local SVG, else Simple Icons. */
function keyboardLogo(logo: string): string {
  if (isUrl(logo)) return logo;
  const local = LOCAL_LOGOS[normalize(logo)];
  return local ? `/assets/keyboard/logos/${local}` : `https://cdn.simpleicons.org/${logoSlug(logo)}/ffffff`;
}

/** Brand-colored artwork for the HTML skills grid / experience badges. */
function htmlLogo(logo: string, color: string): string {
  return isUrl(logo) ? logo : `https://cdn.simpleicons.org/${logoSlug(logo)}/${color.replace("#", "")}`;
}

const SKILL_NAMES = Object.values(SkillNames);
if (
  keyboardLayout.keys.length !== keyboardLayout.rows * keyboardLayout.cols ||
  keyboardLayout.keys.length !== SKILL_NAMES.length
) {
  throw new Error("keyboard.json rows x cols, its keys, and SkillNames must all match");
}

export const SKILLS = Object.fromEntries(
  SKILL_NAMES.map((name, index): [SkillNames, Skill] => {
    const key = keyboardLayout.keys[index];
    const meta = SKILL_META[name];
    return [name, {
      id: index + 1,
      name,
      ...meta,
      icon: htmlLogo(key.logo, meta.color),
      keyboardIcon: keyboardLogo(key.logo),
      keyboardColor: key.color,
    }];
  }),
) as Record<SkillNames, Skill>;

export type Experience = {
  id: number;
  // multiple periods = returning stint, avoids a duplicate card
  periods: { start: string; end: string }[];
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    periods: [
      { start: "June 2013", end: "now" },
    ],
    title: "full time larper",
    company: "gihs",
    description: [
      "self explanitory",
      "arch use BTW",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.DOCKER,
    ],
  }
];

export const themeDisclaimers = {
  light: [
    "are you a loser for using light mode??"
  ],
  dark: [
    "why were you using light mode in the first place"
  ],
};
