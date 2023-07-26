import Link from "next/link";
import React from "react";

function SocialSection() {
  return (
    <section className="social-section container-s">
      <h2>
        Suivez <span>Amatullah</span> sur les réseaux sociaux !
      </h2>
      <div className="socials__cards">
        <Link
          className="socials__card socials__card--twitter"
          href="https://twitter.com/amatullah_fr?lang=fr"
        >
          <img alt="twitter" src="/socials/twitter.svg" /> <h3>Twitter</h3>
        </Link>
        <Link
          className="socials__card socials__card--facebook"
          href="https://www.facebook.com/ASSOCIATION.AMATULLAH/?locale=fr_FR"
        >
          <img alt="facebook" src="/socials/facebook.svg" /> <h3>Facebook</h3>
        </Link>
        <Link
          className="socials__card socials__card--instagram"
          href="https://www.instagram.com/association_amatullah/?hl=fr"
        >
          <img alt="instagram" src="/socials/instagram.svg" />
          <h3>Instagram</h3>
        </Link>
        <Link
          className="socials__card socials__card--linkedin"
          href="https://www.linkedin.com/company/amatullah-au-service-de-l-humanité/"
        >
          <img alt="linkedin" src="/socials/linkedin.svg" /> <h3>Linkedin</h3>
        </Link>
      </div>
    </section>
  );
}

export default SocialSection;
