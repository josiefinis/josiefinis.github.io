import Icon from "./icon";
import personal from "@/data/personal.json";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mx-fluid">
      <div className="@container">
        <h1 className="font-display text-fluid-6xl">Josefin Wall</h1>
        <div className="flex flex-col items-start justify-end gap-8">
          {personal.profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.href}
              target="_blank"
              className="flex items-center gap-6 block-12 text-3xl hover:underline hover:underline-offset-12"
            >
              <Icon name={profile.name} alt={profile.display_name} />
              <span>{profile.username}</span>
            </a>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}
