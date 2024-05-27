import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #AC7C6B;
  margin: 0;
  padding: 0;
`;

const Video = styled.video`
  margin-bottom: 150px;
  width: 80%;
  height: 90%;
  border: none;
`;

const DiscoverButton = styled.button`
  position: absolute; 
  bottom: 200px; 
  right: 600px; 
  border: 3px solid white;
  padding: 15px 30px; /* Augmenter la taille du bouton */
  cursor: pointer;
  font-size: 1.7rem; /* Augmenter la taille de la police */
  color: white;
  background: transparent;
  letter-spacing: 10px; /* Espacement entre les lettres */
`;

const IntroductionPage = ({ onDiscover }) => {
  return (
    <IntroContainer>
      <Video autoPlay loop>
        <source src="https://firebasestorage.googleapis.com/v0/b/zayd-ecommerce.appspot.com/o/assets%2FCopie%20de%20Copie%20de%20LOGO%20VERSION%20FINALE.mp4?alt=media&token=2465dabb-9daf-481b-b14c-0c0c44e7d43a" type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </Video>
      <DiscoverButton onClick={onDiscover}>Découvrir</DiscoverButton>
    </IntroContainer>
  );
};

export default IntroductionPage;