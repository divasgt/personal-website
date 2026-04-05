"use client";

import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { contactLinks } from "@/data/links";

export default function ContactLinks() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {Object.values(contactLinks).map(
        ({ label, href, text, icon: Icon, type }) => (
          <div key={label} className="flex items-center gap-3">
            <a
              href={href}
              target={type === "email" ? undefined : "_blank"}
              rel={type === "email" ? undefined : "noopener noreferrer"}
              className="flex items-center gap-3 group/link"
            >
              <span className="text-tertiary group-hover/link:text-foreground shrink-0 transition-colors duration-100">
                <Icon size={16} />
              </span>
              {/* <span className="text-sm text-secondary shrink-0 w-24">
                {label}
              </span> */}
              <span className="text-sm text-secondary group-hover/link:text-foreground underline-offset-4 decoration-neutral-500/40 group-hover/link:decoration-foreground group-hover/link:underline transition-all duration-100 truncate">
                {text}
              </span>
            </a>

            {/* Copy button for email */}
            {type === "email" && (
              <div className="relative group/copy shrink-0">
                <button
                  onClick={() => handleCopy(text)}
                  aria-label="Copy email address"
                  className="flex items-center text-tertiary hover:text-foreground transition-colors duration-100 cursor-pointer"
                >
                  {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                </button>
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-secondary bg-background border border-neutral-500/20 rounded px-1.5 py-0.5 opacity-0 group-hover/copy:opacity-100 transition-opacity duration-100">
                  {copied ? "Copied!" : "Copy"}
                </span>
              </div>
            )}
          </div>
        ),
      )}
    </div>
  );
}
