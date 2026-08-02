import Image from "next/image";

import blank from "@/public/blank.svg";
import lexicon from "@/public/lexicon-logo.svg";
import html from "@/public/html.svg";
import css from "@/public/css.svg";
import typescript from "@/public/ts-logo-128.svg";
import react from "@/public/react.svg";
import tailwind from "@/public/tailwind.svg";
import nextjs from "@/public/NEXTJS/icon/dark-background/nextjs-icon-dark-background.svg";

const tags = new Map([
  ["Home", blank],
  ["Lexicon", lexicon],
  ["HTML5", html],
  ["CSS3", css],
  ["TypeScript", typescript],
  ["React", react],
  ["Tailwind", tailwind],
  ["Nextjs", nextjs],
]);

interface TagProps {
  name: string;
  className?: string;
}

export default function Tag({ name, className }: TagProps) {
  return (
    <Image
      src={tags.get(name)}
      alt={name}
      className={`max-block-10 inline-auto ${className}`}
    />
  );
}
