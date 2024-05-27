import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = styled.a`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  z-index: 500;
  &:hover {
    background-color: #20b358;
  }
`;

const WhatsappIcon = styled(FaWhatsapp)`
  width: 35px;
  height: 35px;
`;

const WhatsappFloatButton = () => {
  return (
    <WhatsappButton href="https://wa.me/33695146900" target="_blank">
      <WhatsappIcon />
    </WhatsappButton>
  );
}

export default WhatsappFloatButton;