import { PortableText } from "next-sanity";
import { employee } from "../lib/interface";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import "../employees.scss";

export const revalidate = 300;
export const dynamic = "force-dynamic";

async function getEmployees() {
  const query = `*[_type == 'employee'] {
    title,
    email,
    phone,
    image,
    bio,
    city,
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Employees() {
  const data: employee[] = await getEmployees();
  return (
    <div>
      <div className="employees" id="contact">
        {data.map((employee) => (
          <div key={employee.title} className="employee">
            <div className="empCopy">
              <div className="city">
                <Image
                  src="img/location-circle.svg"
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
    </div>
  );
}
