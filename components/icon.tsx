import Image from "next/image";
import code from "@/public/code.svg";
import web from "@/public/web.svg";

interface IconProps {
  name: string;
  className?: string;
}

const icons = new Map([
  ["code", code],
  ["web", web],
]);

export default function Icon({ name, className }: IconProps) {
  return (
    <Image
      src={icons.get(name)}
      alt={name}
      className={`block-full inline-auto inline ${className}`}
    />
  );
}
