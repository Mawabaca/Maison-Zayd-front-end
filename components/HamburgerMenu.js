import React from 'react';
import styled from 'styled-components';

const BurgerMenu = styled.div`
  height: 100%;
  width: 2.5em;  /* Width of the entire burger menu */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.3em;  /* Add gap between bars */
`;

const BurgerBar = styled.div`
  width: 2em;  /* Width of the bars */
  height: 0.2em;  /* Height of the bars (making them thinner) */
  background-color: white;
  border-radius: 0.1em;  /* Adjusted border-radius for thinner bars */
  transition: all 0.5s ease;

  &:nth-child(1) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(0.3em, 0.3em)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    transform: ${({ isOpen }) => isOpen ? 'scale(0)' : 'scale(1)'};
  }
  &:nth-child(3) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(0.3em, -0.3em)' : 'rotate(0)'};
  }
`;

const HamburgerMenu = ({ isOpen, toggle }) => {
  return (
    <BurgerMenu onClick={toggle}>
      <BurgerBar isOpen={isOpen} />
      <BurgerBar isOpen={isOpen} />
      <BurgerBar isOpen={isOpen} />
    </BurgerMenu>
  );
};

export default HamburgerMenu;