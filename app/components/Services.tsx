import Image from "next/image";
import { service } from "../lib/interface";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import "../services.scss";

async function getData() {
  const query = `*[_type == 'services'] {
    title,
    ingress,
    description,
    link,    
    image,
    "currentSlug": slug.current,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Services() {
  const data: service[] = await getData();

  return (
    <section className="servicesOverview" id="services">
      {/* <h2>Våra tjänster</h2> */}
      <div className="serviceGrid">
        {data.map((service, idx) => (
          <Link
            href={`/service/${service.currentSlug}`}
            key={idx}
            className="service"
          >
            <h3>{service.title}</h3>
            <div className="posterImage">
              <Image
                className="poster"
                src={urlFor(service.image).url()}
                alt={service.title}
                width={260}
                height={320}
              />

              <div className="plusSign">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-0b1d9552=""
                >
                  <g clipPath="url(#clip0_1926_2354)">
                    <path
                      d="M20.75 11.25H12.75V3.25H11.25V11.25H3.25V12.75H11.25V20.75H12.75V12.75H20.75V11.25Z"
                      fill="black"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1926_2354">
                      <rect
                        width="17.5"
                        height="17.5"
                        fill="white"
                        transform="translate(3.25 3.25)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <p>{service.ingress}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
