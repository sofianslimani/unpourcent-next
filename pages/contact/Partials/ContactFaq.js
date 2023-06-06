import React, { useState } from 'react';
import { MaxWidth } from '../../../components/MaxWidth';
import { motion, AnimatePresence } from 'framer-motion';
import classnames from 'classnames';
import Link from 'next/link';

const FAQ_INDEX_ATTRIBUTE_NAME = 'faq-index';

const ContactFaq = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const handleClick = (index) => {
    setFaqIndex(index !== faqIndex ? index : null);
  };

  const items = [
    {
      question: 'Comment puis-je faire un don sur Un Pour Cent ?',
      answer: 'lorem ipsum',
    },
    {
      question: 'Comment puis-je savoir ce qui est fait avec mon don ?',
      answer: 'lorem ipsum',
    },
    {
      question:
        'Puis-je choisir le projet associatif que je souhaite soutenir ?',
      answer: 'lorem ipsum',
    },
  ];

  const halfLength = Math.ceil(items.length / 2);

  const renderFaqItem = (item, index) => (
    <div className="faq__content__item" key={index}>
      <div className="faq__content__item__header">
        <div className="faq__content__item__header__title">
          <Link
            className="faq__content__item__header__title__link"
            href="#"
            onClick={() => handleClick(index)}
            {...{
              [FAQ_INDEX_ATTRIBUTE_NAME]: index,
            }}
          ></Link>
        </div>
        <div className="faq__content__item__header__icon">
          {index === faqIndex ? (
            <img src="./icons/arrow-down.svg" />
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
        className={classnames('faq__content__item__content', {
          'faq__content__item__content--current': index === faqIndex,
        })}
      >
        <div style={{ paddingBottom: '16px' }}>
          <div className={''}>
            <p className={'bold'}>{item.question}</p>
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
          <div className={'contact-form-container-bottom'}>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={'faq__content__container'}
            >
              <div className="faq__content">
                {items.slice(0, halfLength).map(renderFaqItem)}
              </div>

              <div className="faq__content">
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
