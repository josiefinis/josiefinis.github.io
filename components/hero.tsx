import Icon from "./icon";
import personal from "@/data/personal.json";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mx-fluid">
      <div className="@container">
        <h1 className="font-display text-fluid-6xl">Josefin Wall</h1>
        <div className="grid grid-cols-[4rem_1fr] gap-8">
          {personal.profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.href}
              target="_blank"
              className="col-span-2 grid grid-cols-subgrid items-center gap-6 text-3xl hover:underline hover:underline-offset-12"
            >
              <Icon
                name={profile.name}
                alt={profile.display_name}
                className="block-12"
              />
              <span>{profile.username}</span>
            </a>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}
