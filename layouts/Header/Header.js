import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenCloseMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const router = useRouter();

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
              <li
                className={
                  'header-container-left-nav-list-item ' +
                  (router.pathname === '/association' ? 'active' : '')
                }
              >
                <Link href="/association">Le projet du mois</Link>
              </li>
              <li
                className={
                  'header-container-left-nav-list-item ' +
                  (router.pathname === '/contact' ? 'active' : '')
                }
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={'header-container-right'}>
          <button
            onClick={(e) => handleOpenCloseMenu()}
            className={
              'header-container-right-button-burgeur ' +
              (!mobileMenuOpen ? '' : 'open')
            }
          >
            <div></div>
            <div></div>
            <div></div>
            <img alt={'close'} src={'./icons/close.svg'} />
          </button>
          <ul className={'header-container-right-list'}>
            {/*  <li className={'header-container-right-list-item'}>
              <Link href="/">
                <div className={'header-container-right-list-item-icon'}>
                  <img src="/icons/user.svg" alt="user" />
                </div>
                Connexion
              </Link>
            </li> */}
            <li className={'header-container-right-list-item'}>
              <Link href="https://donate.stripe.com/cN2dSo4vW45A6li5kk">
                <div className={'header-container-right-list-item-icon'}>
                  <img src="/icons/donation.svg" alt="donation" />
                </div>
                Soutenir
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <aside className={'mobile-menu ' + (!mobileMenuOpen ? '' : ' open')}>
        <div className={'mobile-menu-container'}>
          <nav className={'mobile-menu-container-nav'}>
            <ul className={'mobile-menu-container-nav-list'}>
              <li className={'mobile-menu-container-nav-list-item'}>
                <Link href="/association">Le projet du mois</Link>
              </li>
              <li className={'mobile-menu-container-nav-list-item'}>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={'mobile-menu-container-nav-list-item icon'}>
                <Link href="https://donate.stripe.com/cN2dSo4vW45A6li5kk">
                  <div className={'mobile-menu-container-nav-list-item-icon'}>
                    <img src="/icons/donation.svg" alt="donation" />
                  </div>
                  Soutenir
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </header>
  );
};

export default Header;
