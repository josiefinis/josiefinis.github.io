import Icon from "./icon";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mx-fluid">
      <div className="@container">
        <h1 className="font-display text-fluid-6xl">Josefin Wall</h1>
        <div className="flex flex-col items-start justify-end gap-8">
          <a
            href="https://github.com/josiefinis"
            target="_blank"
            className="flex items-center gap-6 block-12 text-3xl hover:underline hover:underline-offset-12"
          >
            <Icon name="githubWhite" alt="Github" />
            <span>josiefinis</span>
          </a>
          <a
            href="https://www.linkedin.com/in/josefin-wall-a513a4408/"
            target="_blank"
            className="flex items-center gap-4 block-12 text-3xl hover:underline hover:underline-offset-12"
          >
            <Icon name="linkedinWhite" alt="LinkedIn" />
            <span>Josefin Wall</span>
          </a>
        </div>
      </div>
      <div></div>
    </section>
  );
}
