import Link from 'next/link';
import { MaxWidth } from '../MaxWidth';

export const DonateSection = ({
  title, description, isExternal, link, linkText
}) => {
  return (
    <section className="donate-section">
      <MaxWidth>
        <h2>{ title }</h2>
        <p>{ description }</p>
        {
          isExternal ? (
            <a target='_blank' href={link}>
              { linkText }
            </a>
          ) : (
            <Link href={link}>
              { linkText }
            </Link>
          )
        }
      </MaxWidth>
    </section>
  );
};
