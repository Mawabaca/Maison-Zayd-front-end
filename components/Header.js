import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import SearchIcon from "./icons/SearchIcon";
import AccountIcon from "./icons/AccountIcon";
import PanierIcon from "./icons/PanierIcon";


const StyledHeader = styled.header`
  background-color: #b8887a;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  img {
    height: auto; 
    max-height: 140px; 
    width: auto; 
    transition: max-height 0.3s ease; 
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align items vertically */
  padding: 20px 0;
  max-height: 50px;
`;

const StyledNav = styled.nav`
  display: block;
  gap: 15px;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-300px")}; 
  bottom: 0;
  width: 300px; 
  background-color: #222;
  transition: left 0.3s ease; 
  z-index: 100;
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 35px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
`;

const LeftSideIcons = styled.div`
  display: flex;
  align-items: center;
  a {
    display: inline-block;
    min-width: 25px;
    color: white;
    margin-left: 10px; 
  }
`;

const RightSideIcons = styled.div`
  display: flex;
  align-items: center;
  a {
    display: inline-block;
    min-width: 25px;
    color: white;
    margin-left: 10px; 
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <LeftSideIcons>
            <NavButton onClick={() => setIsNavOpen(!isNavOpen)}>
              <BarsIcon />
            </NavButton>
            <Link href={"/search"}>
              <SearchIcon />
            </Link>
          </LeftSideIcons>

          <Logo href={"/products"}>
            <img src="https://firebasestorage.googleapis.com/v0/b/zayd-ecommerce.appspot.com/o/assets%2FIMPORTANT.png?alt=media&token=35d13ea4-a19a-410c-ab20-df8e18b093a5" alt="Logo Home" />
          </Logo>

          <RightSideIcons>
            <Link href={"/account"}>
              <AccountIcon />
            </Link>
            <Link href={"/cart"}>
              <PanierIcon />
            </Link>
          </RightSideIcons>

          <StyledNav isOpen={isNavOpen}>
            {/* Mettez ici vos liens de navigation */}
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}