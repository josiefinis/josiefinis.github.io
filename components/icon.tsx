import Image from "next/image";
import code from "@/public/code.svg";
import web from "@/public/web.svg";

interface IconProps {
  name: string;
  href: string;
  className: string;
}

const icons = new Map([
  ["code", code],
  ["web", web],
]);

export default function Icon({ name, href, className }: IconProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={`p-2 rounded-ss-2xl rounded-ee-2xl hover:outline-2 ${className}`}
    >
      <Image
        src={icons.get(name)}
        alt={name}
        className="block-10 inline-auto max-inline-10"
      />
    </a>
  );
}
