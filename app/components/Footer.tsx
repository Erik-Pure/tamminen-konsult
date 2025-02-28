import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Image
        src="img/tamminen-logo.svg"
        alt="Tamminen logo"
        width={320}
        height={120}
      />
      <p>© 2025 Tamminen Konsult AB</p>
    </footer>
  );
}
