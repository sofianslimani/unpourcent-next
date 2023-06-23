import Link from 'next/link';
import React from 'react';
import { MaxWidth } from '../MaxWidth';

export const DonateSection = () => {
  return (
    <section className="donate-section">
      <MaxWidth>
        <h2>Aider cette cause maintenant</h2>
        <p>Faites une donation et soyez acteur</p>
        <Link href="https://donate.stripe.com/cN2dSo4vW45A6li5kk">
          Faire une donnation
        </Link>
      </MaxWidth>
    </section>
  );
};
