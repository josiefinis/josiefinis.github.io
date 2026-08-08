import Icon from "./icon";
import personal from "@/data/personal.json";

export default function Footer() {
  return (
    <footer className="min-block-50 px-fluid mbs-30 py-10 bg-pink-950">
      <nav>
        <div className="inline-fit">
          <h2 className="font-display text-fluid-lg">Josefin Wall</h2>
          <div className="flex justify-center gap-2 ">
            {personal.profiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.href}
                target="_blank"
                className={`p-2 rounded-md hover:outline-2`}
              >
                <Icon
                  name={profile.name}
                  alt={profile.display_name}
                  className={`block-8`}
                />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </footer>
  );
}
