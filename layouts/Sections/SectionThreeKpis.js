import React, { useEffect, useState } from "react";
import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const SectionThreeKpis = ({ color }) => {
  const [kpis, setKpis] = useState([]);

  useEffect(() => {
    base("Stats")
      .select({ view: "Grid view" })
      .firstPage((err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        const data = records.map((record) => [
          {
            isPrice: false,
            count: record.fields.donations_number,
            text: "Donations collectées pour les différentes associations partenaire de un pour cent",
          },
          {
            isPrice: true,
            count: record.fields.donations_amount,
            text: "Somme collectée pour les différentes associations partenaire de un pour cent",
          },
          {
            isPrice: false,
            count: record.fields.projects_number,
            text: "Projet collecté pour les différentes associations partenaire de un pour cent",
          },
        ]);
        setKpis(data[0]);
      });
  }, []);

  return (
    <section className={`section-three-kpis container-s`}>
      <aside className={`section-three-kpis-container ${color}`}>
        {kpis.map((item, index) => {
          return (
            <div key={index} className={"section-three-kpis-container-item"}>
              <h2
                className={
                  "section-three-kpis-container-price bold text-38 color-white"
                }
              >
                {item.count}
                {item.isPrice ? " €" : ""}
              </h2>
              <p className={"text-16 color-white regular"}>{item.text}</p>
            </div>
          );
        })}
      </aside>
    </section>
  );
};

export default SectionThreeKpis;
