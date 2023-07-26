import React from 'react';

const HomeThreeCardsInformations = () => {
  return (
    <section className={'home-three-cards-informations container-l'}>
      <aside className={'home-three-cards-informations-container'}>
        <div className={'card-item secondary'}>
          <div className={'card-item-container'}>
            <div className={'card-item-container-picto hearth'}>
              <img src={'/icons/hearth.svg'} />
            </div>
            <div className={'cards-item-container-title'}>
              <h4 className={'text-20 color-secondary bold'}>
                Découvrez des projets impactants
              </h4>
            </div>
            <div className={'cards-item-container-paragraph'}>
              <p className={'color-black regular text-16'}>
                Découvrez chaque mois un nouveau projet associatif. Nous vous
                présentons l&apos;association et son projet en détail pour que
                vous puissiez comprendre l&apos;impact que votre donation peut
                avoir.
              </p>
            </div>
          </div>
        </div>
        <div className={'card-item green'}>
          <div className={'card-item-container'}>
            <div className={'card-item-container-picto hearth'}>
              <img src={'/icons/card.svg'} />
            </div>
            <div className={'cards-item-container-title'}>
              <h4 className={'text-20 color-green bold'}>
                Faire la différence avec un don
              </h4>
            </div>
            <div className={'cards-item-container-paragraph'}>
              <p className={'color-black regular text-16'}>
                Votre don, même petit, fait une différence pour soutenir les
                projets associatifs sélectionnés avec soin par Un Pour Cent.
                Chaque euro compte pour notre mission de changer positivement la
                vie des personnes dans le besoin.
              </p>
            </div>
          </div>
        </div>
        <div className={'card-item primary'}>
          <div className={'card-item-container'}>
            <div className={'card-item-container-picto hearth'}>
              <img src={'/icons/desktop.svg'} />
            </div>
            <div className={'cards-item-container-title'}>
              <h4 className={'text-20 color-primary bold'}>
                Suivez l&apos;impact de votre don
              </h4>
            </div>
            <div className={'cards-item-container-paragraph'}>
              <p className={'color-black regular text-16'}>
                Nous vous informons régulièrement de l&apos;impact positif de
                votre donation avec des témoignages et des photos des
                bénéficiaires. Ensemble, nous pouvons faire une différence
                significative dans la vie de ceux qui ont besoin d&apos;aide.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default HomeThreeCardsInformations;
