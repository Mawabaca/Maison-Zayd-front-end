import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const IntroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #AC7C6B;
  margin: 0;
  padding: 0;
  animation: ${props => props.disappear ? slideOut : 'none'} 1s forwards;
`;

const Video = styled.video`
  margin-bottom: 150px;
  width: 100%;
  height: 100%;
  border: none;
`;

const DiscoverButton = styled.button`
  position: absolute;
  bottom: 200px;
  right: 540px;
  border: 3px solid white;
  padding: 15px 30px;
  cursor: pointer;
  font-size: 1.2rem;
  color: white;
  background: transparent;
  letter-spacing: 10px;
`;

const IntroductionPage = ({ onDiscover }) => {
  const [disappear, setDisappear] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const timeout = setTimeout(() => {
        if (!video.paused) {
          video.pause();
        }
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, []);

  const handleDiscoverClick = () => {
    setDisappear(true);
    const video = videoRef.current;
    if (video) {
      video.play();
    }
    setTimeout(() => {
      onDiscover();
    }, 500);
  };

  return (
    <IntroContainer disappear={disappear}>
      <Video ref={videoRef} autoPlay loop>
        <source src="https://firebasestorage.googleapis.com/v0/b/zayd-ecommerce.appspot.com/o/assets%2FCopie%20de%20Copie%20de%20LOGO%20VERSION%20FINALE.mp4?alt=media&token=2465dabb-9daf-481b-b14c-0c0c44e7d43a" type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </Video>
      <DiscoverButton onClick={handleDiscoverClick}>Découvrir</DiscoverButton>
    </IntroContainer>
  );
};

export default IntroductionPage;
