import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { CartContextProvider } from '@/components/CartContext';
import { SessionProvider } from 'next-auth/react';
import WhatsappFloatButton from '@/components/WhatsappFloatButton';
import IntroductionPage from '@/components/IntroductionPage';
import {Josefin_Slab} from 'next/font/google';

const josefinslab = Josefin_Slab({ subsets: ['latin'] })


const GlobalStyles = createGlobalStyle`
  body {
    background-color: #eee;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
  hr {
    display: block;
    border: 0;
    border-top: 1px solid #ccc;
  }
`;

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introSeen = localStorage.getItem('introSeen');
    if (introSeen) {
      setShowIntro(false); 
    }
  }, []);

  const handleDiscover = () => {
    setShowIntro(false);
    localStorage.setItem('introSeen', 'true');
  };

  return (
    <>
    <main className={josefinslab.className}>
      <GlobalStyles />
      {showIntro ? (
        <IntroductionPage onDiscover={handleDiscover} />
      ) : (
        <SessionProvider session={session}>
          <CartContextProvider>
            <Component {...pageProps} />
            <WhatsappFloatButton />
          </CartContextProvider>
        </SessionProvider>
      )}
    </main>
    </>
  );
}
