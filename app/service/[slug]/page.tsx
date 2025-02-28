import { service } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import "../../services.scss";
import "../../employees.scss";

export const revalidate = 300;
export const dynamic = "force-dynamic";

async function getData(slug: string) {
  const query = `*[_type == 'services' && slug.current == '${slug}'] {
    slug,
    title,
    ingress,
    description,    
    image,
    link,
    linkText,
    contactPerson[]->{
      title,
      city,
      phone,
      email,
      image,
      linkedin,
      bio
    }
  }[0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data: service = await getData(slug);
  return (
    <div className="servicePage">
      <div className="serviceHero">
        <div className="heroCopy">
          <h1>{data.title}</h1>
          <h3>{data.ingress}</h3>
        </div>
        <Image
          className="heroBg"
          src={urlFor(data.image).url()}
          alt={data.title}
          layout="fill"
          priority
          objectFit="cover"
        />
      </div>
      {data.description && data.description.length > 0 ? (
        <div className="serviceBody">
          <PortableText value={data.description} />
          {data.link && data.linkText ? (
            <a className="btn outline" target="_blank" href={data.link}>
              <Image
                className="extLink"
                src="../img/ext-link.svg"
                width={20}
                height={20}
                alt={data.linkText}
              />
              {data.linkText}
            </a>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {data.contactPerson && data.contactPerson.length > 0 ? (
        <div className="container contactPersons">
          <h2>Kontaktperson</h2>
          {data.contactPerson.map((employee) => (
            <div key={employee.title} className="employee">
              <div className="empCopy">
                <div className="city">
                  <Image
                    src="../img/location-circle.svg"
                    alt={employee.city}
                    width={28}
                    height={28}
                  />
                  {employee.city}
                </div>
                <h3>{employee.title}</h3>
                <PortableText value={employee.bio} />
                <div className="contactDetails">
                  <a href={`mailto:${employee.email}`}>{employee.email}</a>
                  <a href={`phone:${employee.phone}`}>{employee.phone}</a>
                  <a target="_blank" href="{empoylee.link}">
                    Linkedin
                  </a>
                </div>
              </div>
              <div className="image">
                <Image
                  src={urlFor(employee.image).url()}
                  alt={employee.title}
                  width={320}
                  height={320}
                  priority
                  style={{ width: "90%", height: "auto" }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
