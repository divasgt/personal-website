import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiFileText } from "react-icons/fi";
import { IconType } from "react-icons";

export type ContactLink = {
  label: string;
  href: string;
  text: string;
  icon: IconType;
  type: "email" | "social" | "other";
};

export const contactLinks: Record<string, ContactLink> = {
  Email: {
    label: "Email",
    href: "mailto:divasverma18@gmail.com",
    text: "divasverma18@gmail.com",
    icon: FiMail,
    type: "email",
  },
  LinkedIn: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/divas-verma",
    text: "linkedin.com/in/divas-verma",
    icon: FaLinkedinIn,
    type: "social",
  },
  X: {
    label: "X (Twitter)",
    href: "https://x.com/savidv2",
    text: "x.com/savidv2",
    icon: SiX,
    type: "social",
  },
  GitHub: {
    label: "GitHub",
    href: "https://github.com/divasgt",
    text: "github.com/divasgt",
    icon: SiGithub,
    type: "social",
  },
  Resume: {
    label: "Resume",
    href: "https://drive.google.com/drive/folders/1FKUQBae3dFZlgTytD_zLW-512QLz0h5m?usp=sharing",
    text: "Resume",
    icon: FiFileText,
    type: "other",
  },
};
