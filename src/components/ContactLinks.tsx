"use client";

import { useState } from "react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";
import { IconType } from "react-icons";

const EMAIL = "divasverma18@gmail.com";

type LinkItem = {
  label: string;
  href: string;
  text: string;
  icon: IconType;
  isEmail?: boolean;
};

const links: LinkItem[] = [
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    text: EMAIL,
    icon: FiMail,
    isEmail: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/divas-verma",
    text: "linkedin.com/in/divas-verma",
    icon: FaLinkedinIn,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/savidv2",
    text: "x.com/savidv2",
    icon: SiX,
  },
  {
    label: "GitHub",
    href: "https://github.com/divasgt",
    text: "github.com/divasgt",
    icon: SiGithub,
  },
];

export default function ContactLinks() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {links.map(({ label, href, text, icon: Icon, isEmail }) => (
        <div key={label} className="flex items-center gap-3">
          <a
            href={href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            className="flex items-center gap-3 group/link"
          >
            <span className="text-tertiary group-hover/link:text-foreground shrink-0 transition-colors duration-100">
              <Icon size={16} />
            </span>
            <span className="text-sm text-secondary group-hover/link:text-foreground underline-offset-4 group-hover/link:underline transition-colors duration-100 truncate">
              {text}
            </span>
          </a>
          {isEmail && (
            <div className="relative group/copy shrink-0">
              <button
                onClick={handleCopy}
                aria-label="Copy email address"
                className="flex items-center text-tertiary hover:text-foreground transition-colors duration-100"
              >
                {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
              </button>
              <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-secondary bg-background border border-neutral-500/20 rounded px-1.5 py-0.5 opacity-0 group-hover/copy:opacity-100 transition-opacity duration-100">
                {copied ? "Copied!" : "Copy"}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
