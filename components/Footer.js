import styled from 'styled-components';
import React from 'react';
import { FaTwitterSquare, FaFacebookSquare, FaPinterestSquare, FaInstagramSquare } from 'react-icons/fa';

const FooterHeader = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
`;

const FooterContainer = styled.div`
  background-color: #1c1c1c;
  color: #ffffff;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 2px solid #d4bbb4;
  text-align: center;
  margin-top: 50px;
`;

const FooterBlock = styled.div`
  flex: 1 1 30%;
  margin-bottom: 20px;
`;

const FooterInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
`;

const FooterButton = styled.button`
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const SocialIconLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  margin: 0 10px;
`;

const CopyrightText = styled.p`
  width: 100%;
  text-align: center;
  color: #ffffff;
  margin: 10px 0;
  border-top: solid 1px;
  border-top-color: rgba(255,255,255,0.66);
  padding-top:15px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterBlock>
        <FooterHeader>Accès rapide</FooterHeader>
        <FooterLink href="">Notre histoire</FooterLink>
        <FooterLink href="">Avis</FooterLink>
        <FooterLink href="">La boutique</FooterLink>
        {/* Ajoutez d'autres liens ici */}
      </FooterBlock>
      <FooterBlock>
        <FooterHeader>Suivez-nous</FooterHeader>
        <SocialIcons>
          <SocialIconLink href="https://maisonsikha.fr/products/berangere" target="_blank">
            <FaFacebookSquare size={30} />
          </SocialIconLink>
          <SocialIconLink href="https://maisonsikha.fr/products/berangere" target="_blank">
            <FaTwitterSquare size={30} />
          </SocialIconLink>
          <SocialIconLink href="https://maisonsikha.fr/products/berangere" target="_blank">
            <FaInstagramSquare size={30} />
          </SocialIconLink>
          <SocialIconLink href="https://maisonsikha.fr/products/berangere" target="_blank">
            <FaPinterestSquare size={30} />
          </SocialIconLink>
        </SocialIcons>
        <FooterInput type="text" placeholder="Nom" />
        <FooterInput type="email" placeholder="Adresse email" />
        <FooterButton>Je m'abonne</FooterButton>
      </FooterBlock>
      <FooterBlock>
        <FooterHeader>Besoin d’aide</FooterHeader>
        <FooterLink href="">Nous contacter</FooterLink>
        <FooterLink href="">La livraison</FooterLink>
        <FooterLink href="">Retour, échange et rétractation</FooterLink>
        {/* Ajoutez d'autres liens ici */}
      </FooterBlock>
      <CopyrightText> Copyright © 2024 - Maison Zayd</CopyrightText>
    </FooterContainer>
  );
}

export default Footer;
