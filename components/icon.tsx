import Image from "next/image";
import code from "@/public/code.svg";
import web from "@/public/web.svg";
import adjust from "@/public/adjust.svg";
import githubWhite from "@/public/github/GitHub_Invertocat_White.svg";
import githubBlack from "@/public/github/GitHub_Invertocat_Black.svg";
import linkedinWhite from "@/public/in-logo/InBug-White.png";
import linkedinBlack from "@/public/in-logo/InBug-White.png";
import linkedin from "@/public/in-logo/LI-In-Bug.png";

interface IconProps {
  name: string;
  alt: string;
  className?: string;
}

const icons = new Map([
  ["code", code],
  ["web", web],
  ["adjust", adjust],
  ["github", githubWhite],
  ["githubWhite", githubWhite],
  ["githubBlack", githubBlack],
  ["linkedinWhite", linkedinWhite],
  ["linkedinBlack", linkedinBlack],
  ["linkedin", linkedin],
]);

export default function Icon({ name, alt, className }: IconProps) {
  return (
    <Image
      src={icons.get(name)}
      alt={alt}
      className={`block-full inline-auto inline ${className}`}
    />
  );
}
