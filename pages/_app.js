// pages/_app.js
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { CartContextProvider } from '@/components/CartContext';
import { SessionProvider } from 'next-auth/react';
import WhatsappFloatButton from '@/components/WhatsappFloatButton';
import IntroductionPage from '@/components/IntroductionPage';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
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

  const handleDiscover = () => {
    setShowIntro(false);
  };

  return (
    <>
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
    </>
  );
}