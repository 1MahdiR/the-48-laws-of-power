import { useEffect, useState } from 'react';

import header_styles from '../styles/Header.module.css';

export default function Header() {
    const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
          setIsHeaderShrunk(true);
        } else {
          setIsHeaderShrunk(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <>
        <header>
          <div className={`${header_styles.header} ${(isHeaderShrunk ? header_styles.shrink : '')}`}>
            <h1 className="Hello">POWER!</h1>
          </div>
        </header>
      </>
    )
  }