import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/" className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 96.064 94.444"
        >
          <polygon
            points="75.425 23.217 56.778 23.217 39.286 23.217 20.639 23.217 20.639 40.71 39.286 40.71 39.286 78.004 56.778 78.004 56.778 40.71 75.425 40.71 75.425 23.217"
            fill="#231f20"
          />
          <rect
            x="39.286"
            width="17.492"
            height="17.492"
            rx="8.746"
            fill="#f89f29"
          />
          <path
            d="M35.353,2.277a45.909,45.909,0,1,0,25.358,0"
            fill="none"
            stroke="#f89f29"
            strokeMiterlimit="10"
            strokeWidth="4.245"
          />
        </svg>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={"/#services"}>Tjänster</Link>
          </li>
          <li>
            <Link className="contactLink" href={"/#contact"}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
