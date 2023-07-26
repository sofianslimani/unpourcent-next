import Link from "next/link";

export function DonateSection({
  title,
  description,
  isExternal,
  link,
  linkText,
}) {
  return (
    <section className="donate-section">
      <h2>{title}</h2>
      <p>{description}</p>
      {isExternal ? (
        <a href={link} rel="noopener" target="_blank">
          {linkText}
        </a>
      ) : (
        <Link href={link}>{linkText}</Link>
      )}
    </section>
  );
}
