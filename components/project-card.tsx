import Image from "next/image";
import { ReactNode } from "react";
import Tag from "@/components/tag";
import Icon from "@/components/icon";

interface LinkProps {
  name: string;
  icon: string;
  href: string;
}

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ProjectCardProps {
  heading: string;
  date: string;
  place: string;
  image: ImageProps;
  tags: string[];
  mainLink: string;
  links: LinkProps[];
  children: ReactNode;
}

export default function ProjectCard({
  heading,
  date,
  place,
  image,
  tags,
  mainLink,
  links,
  children,
}: ProjectCardProps) {
  const { src, alt, width, height } = image;
  return (
    <article
      aria-labelledby="heading"
      className="@container relative flex flex-col gap-2 *:not-last:not-[.order-first]:mx-4 | m-3 rounded-2xl shadow-2xl | has-[.main-link:hover]:outline-2"
    >
      <header className="mbs-4">
        <a
          href={mainLink}
          target="_blank"
          className="main-link after:absolute after:inset-0"
        >
          <h3 id="heading" className="font-display text-fluid-4xl">
            {heading}
          </h3>
        </a>
        <div className="flex justify-between items-center mbs-4">
          <time dateTime={date} className="text-fluid-2xl">
            {date}
          </time>
          <Tag key={place} name={place} />
        </div>
      </header>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="order-first inline-full aspect-square object-cover rounded-ss-2xl rounded-se-2xl"
      />
      <p className="text-fluid-xl mbs-4">{children}</p>
      <div className="flex justify-start gap-3 | mbs-4">
        {tags.map((tag) => (
          <Tag key={tag} name={tag} className="max-inline-10" />
        ))}
      </div>
      <footer className="mbs-auto">
        <div className="flex justify-end">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              className="p-2 rounded-ss-2xl rounded-ee-2xl hover:outline-2 relative z-10"
            >
              <Icon name={link.icon} />
            </a>
          ))}
        </div>
      </footer>
    </article>
  );
}
