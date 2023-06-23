import React, { useEffect, useState } from 'react';
import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const SectionThreeKpis = ({ dataKpis, color }) => {
  /*   const [kpis, setKpis] = useState([]);
   */
  const [data, setData] = useState([]);

  useEffect(() => {
    /*  if (dataKpis) {
      setKpis(dataKpis);
    } */

    base('Stats')
      .select({ view: 'Grid view' })
      .firstPage((err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        const data = records.map((record) => record.fields); // Ici, adaptez la transformation des données en fonction de la structure de votre table
        setData(data);

        console.log(data);
      });
  }, []);

  return (
    <section className={`section-three-kpis container-s`}>
      <aside className={`section-three-kpis-container ${color}`}>
        {/*      {kpis.map((item, index) => {
          return (
            <div key={index} className={'section-three-kpis-container-item'}>
              <h2
                className={
                  'section-three-kpis-container-price bold text-38 color-white'
                }
              >
                {item.count}
                {item.isPrice ? '€' : ''}
              </h2>
              <p className={'text-16 color-white regular'}>{item.text}</p>
            </div>
          );
        })} */}

        {data.length > 0 && (
          <>
            <div className={'section-three-kpis-container-item'}>
              <h2
                className={
                  'section-three-kpis-container-price bold text-38 color-white'
                }
                >
                {data[0].donations_number}
              </h2>
              <p className={'text-16 color-white regular'}>
                dons collectés jusqu'à présent par Un Pour Cent
              </p>
            </div>

            <div className={'section-three-kpis-container-item'}>
              <h2
                className={
                  'section-three-kpis-container-price bold text-38 color-white'
                }
              >
              {data[0].donations_amount} €
              </h2>
              <p className={'text-16 color-white regular'}>
                projets associatifs aidés par Un Pour Cent
              </p>
            </div>

            <div className={'section-three-kpis-container-item'}>
              <h2
                className={
                  'section-three-kpis-container-price bold text-38 color-white'
                }
              >
                {data[0].projects_number}
              </h2>
              <p className={'text-16 color-white regular'}>
                projets associatifs aidés par Un Pour Cent
              </p>
            </div>
          </>
        )}
      </aside>
    </section>
  );
};

export default SectionThreeKpis;
