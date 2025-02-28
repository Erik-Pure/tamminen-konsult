import Image from "next/image";
import Services from "./components/Services";
import { client } from "./lib/sanity";
import { landingPage } from "./lib/interface";
import Employees from "./components/Employees";
import { ta } from "date-fns/locale";

async function getData() {
  const query = `*[_type == 'landingPage'][0] {
    title,
    ingress, }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: landingPage = await getData();
  return (
    <main>
      <div className="hero">
        <div className="heroCopy">
          <h1>
            <Image
              src="img/tamminen-logo-black.svg"
              alt={data.title}
              width={420}
              height={140}
              style={{ width: "80%", height: "auto" }}
            />
          </h1>
          <h3>
            Vi är erfarna konsulter och erbjuder expertis inom brandskydd,
            fuktsäkerhet och bygg- och projektledning.
          </h3>
          <a className="btn outline" href="#services">
            Tjänster
          </a>
          <a className="btn" href="#contact">
            Kontakt
          </a>
        </div>
        <div className="heroBgVideo">
          <video autoPlay muted loop playsInline>
            <source src="vid/hero_video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="mainContent">
        <Services />
        <Employees />
      </div>
    </main>
  );
}
