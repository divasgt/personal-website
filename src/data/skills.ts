import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiReactrouter,
  SiTailwindcss,
  SiShadcnui,
  SiMui,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiCloudinary,
  SiRedux,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiVite,
  SiPostman,
  SiNpm,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";
import { IconType } from "react-icons";

export type Skill = {
  label: string;
  icon?: IconType;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { label: "JavaScript", icon: SiJavascript },
      { label: "TypeScript", icon: SiTypescript },
      { label: "HTML", icon: SiHtml5 },
      { label: "CSS", icon: SiCss },
      { label: "Python", icon: SiPython },
      { label: "Java", icon: FaJava },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { label: "React.js", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "React Router", icon: SiReactrouter },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Shadcn UI", icon: SiShadcnui },
      { label: "Material UI", icon: SiMui },
      { label: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Express.js", icon: SiExpress },
      { label: "Next.js API Routes", icon: SiNextdotjs },
      { label: "REST APIs" },
      { label: "JWT Auth" },
      { label: "MongoDB", icon: SiMongodb },
      { label: "SQL" },
      { label: "MySQL", icon: SiMysql },
      { label: "Firebase", icon: SiFirebase },
      { label: "Supabase", icon: SiSupabase },
      // { label: "Nodemailer" },
      // { label: "Multer" },
      // { label: "Cloudinary", icon: SiCloudinary },
    ],
  },
  {
    category: "State Management",
    skills: [
      { label: "Redux", icon: SiRedux },
      { label: "Redux Toolkit", icon: SiRedux },
      { label: "Zustand" },
      // { label: "Context API", icon: SiReact },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { label: "Git", icon: SiGit },
      { label: "GitHub", icon: SiGithub },
      { label: "Figma", icon: SiFigma },
      { label: "Vercel", icon: SiVercel },
      { label: "Netlify", icon: SiNetlify },
      { label: "Vite", icon: SiVite },
      { label: "Postman", icon: SiPostman },
      { label: "npm", icon: SiNpm },
      { label: "Linux / WSL", icon: SiLinux },
    ],
  },
  {
    category: "AI",
    skills: [
      { label: "Generative AI / LLMs", icon: TbBrain },
      { label: "Prompt Engineering", icon: TbBrain },
      { label: "Cursor IDE" },
      { label: "Claude Code" },
      { label: "Codex" },
    ],
  },
];
