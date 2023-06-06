import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={'header'}>
      <div className={'header-container bold'}>
        <div className={'header-container-left'}>
          <div className={'header-container-left-logo'}>
            <Link href="/">
              <img src="/logos/logo.svg" alt="logo" />
            </Link>
          </div>
          <nav className={'header-container-left-nav'}>
            <ul className={'header-container-left-nav-list'}>
              <li className={'header-container-left-nav-list-item'}>
                <Link href="/">Le projet du mois</Link>
              </li>
              <li className={'header-container-left-nav-list-item'}>
                <Link href="/">Les précédents projets</Link>
              </li>
              <li className={'header-container-left-nav-list-item'}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={'header-container-right'}>
          <ul className={'header-container-right-list'}>
            <li className={'header-container-right-list-item'}>
              <Link href="/">
                <div className={'header-container-right-list-item-icon'}>
                  <img src="/icons/user.svg" alt="user" />
                </div>
                Connexion
              </Link>
            </li>
            <li className={'header-container-right-list-item'}>
              <Link href="/">
                <div className={'header-container-right-list-item-icon'}>
                  <img src="/icons/donation.svg" alt="donation" />
                </div>
                Soutenir
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
