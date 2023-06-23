import React, { useState } from 'react';
import { MaxWidth } from '../../../components/MaxWidth';
import { motion, AnimatePresence } from 'framer-motion';
import classnames from 'classnames';
import Link from 'next/link';

const FAQ_INDEX_ATTRIBUTE_NAME = 'faq-index';

const ContactFaq = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const handleClick = (index, event) => {
    event.preventDefault();
    setFaqIndex(index !== faqIndex ? index : null);
  };

  const items = [
    {
      question: 'Comment puis-je faire un don sur Un Pour Cent ?',
      answer:
        'Faire un don sur Un Pour Cent est simple et sécurisé. Il vous suffit de vous rendre sur notre site internet et de sélectionner le projet que vous souhaitez soutenir. Vous pouvez ensuite choisir le montant de votre don et régler votre paiement en toute sécurité grâce à nos moyens de paiement en ligne.',
    },
    {
      question: 'Comment puis-je savoir ce qui est fait avec mon don ?',
      answer: "Nous vous tiendrons régulièrement informé(e) de l'avancement du projet que vous soutenez. Vous recevrez des mises à jour avec des témoignages et des photos des bénéficiaires pour voir concrètement l'impact de votre don.",
    },
    {
      question: 'Puis-je choisir le projet associatif que je souhaite soutenir ?',
      answer: "Malheureusement, nous ne pouvons pas offrir cette option pour le moment. Nous sélectionnons méticuleusement un projet associatif chaque mois en veillant à ce qu'il ait un impact positif sur la société. Vous pouvez être sûr(e) que votre donation sera utilisée de manière responsable et efficace pour soutenir le projet choisi.",
    },
  ];

  const halfLength = Math.ceil(items.length / 2);

  const renderFaqItem = (item, index) => (
    <div
      className={'contact-faq-container-bottom-wrapper-content-item'}
      key={index}
    >
      <div
        className={'contact-faq-container-bottom-wrapper-content-item-header'}
      >
        <div
          className={
            'contact-faq-container-bottom-wrapper-content-item-header-title'
          }
        >
          <button
            className={
              'contact-faq-container-bottom-wrapper-content-item-header-title-link text-16'
            }
            onClick={(event) => handleClick(index, event)}
            {...{
              [FAQ_INDEX_ATTRIBUTE_NAME]: index,
            }}
          >
            {item.question}
          </button>
        </div>
        <div
          className={
            'contact-faq-container-bottom-wrapper-content-item-header-icon'
          }
        >
          {index === faqIndex ? (
            <img src="./icons/arrow-bottom.svg" />
          ) : (
            <img src="./icons/arrow-right.svg" />
          )}
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: index === faqIndex ? 'auto' : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={classnames(
          'contact-faq-container-bottom-wrapper-content-item-content',
          {
            'contact-faq-container-bottom-wrapper-content-item-content--current':
              index === faqIndex,
          }
        )}
      >
        <div style={{ paddingBottom: '16px' }}>
          <div>
            <p>{item.answer}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <section className={'contact-faq'}>
      <MaxWidth>
        <div className={'contact-faq-container'}>
          <div className={'contact-faq-container-top'}>
            <h2 className={'bold'}>FAQ</h2>
            <p className={'bold'}>Nous répondons à toutes vos questions</p>
          </div>
          <div className={'contact-faq-container-bottom'}>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={'contact-faq-container-bottom-wrapper'}
            >
              <div className={'contact-faq-container-bottom-wrapper-content'}>
                {items.slice(0, halfLength).map(renderFaqItem)}
              </div>

              <div className={'contact-faq-container-bottom-wrapper-content'}>
                {items
                  .slice(halfLength)
                  .map((item, index) =>
                    renderFaqItem(item, index + halfLength)
                  )}
              </div>
            </motion.div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ContactFaq;
