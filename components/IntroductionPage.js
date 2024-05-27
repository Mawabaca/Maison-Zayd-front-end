import styled from "styled-components";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #b8887a;
  margin: 0;
  padding: 0;
`;

const Video = styled.video`
  width: 80%;
  height: auto;
  border: none;
`;

const DiscoverButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

const IntroductionPage = ({ onDiscover }) => {
  return (
    <IntroContainer>
      <Video autoPlay loop>
        <source src="https://storage.googleapis.com/zayd-ecommerce.appspot.com/assets/Copie%20de%20Copie%20de%20LOGO%20VERSION%20FINALE.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <DiscoverButton onClick={onDiscover}>Découvrir</DiscoverButton>
    </IntroContainer>
  );
};

export default IntroductionPage;