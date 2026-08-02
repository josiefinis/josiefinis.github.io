import ProjectCard from "@/components/project-card";
import data from "@/data/projects.json";
import styles from "./projects.module.css";

export default function Projects() {
  data.sort(
    (a, b) =>
      new Date(b.date as string).getTime() -
      new Date(a.date as string).getTime(),
  );
  return (
    <section
      aria-labelledby="section-heading"
      className="space-y-[1em] mx-fluid"
    >
      <div className="@container md:inline-1/2">
        <h2 id="section-heading" className="font-display text-fluid-4xl">
          Projects
        </h2>
      </div>
      <div className={styles.grid}>
        {data.map((project) => {
          const {
            name,
            date,
            place,
            image,
            description,
            tags,
            main_link: mainLink,
            links,
          } = project;
          return (
            <ProjectCard
              key={name}
              heading={name}
              date={date}
              place={place}
              image={image}
              tags={tags}
              mainLink={mainLink}
              links={links}
            >
              {description}
            </ProjectCard>
          );
        })}
      </div>
    </section>
  );
}
