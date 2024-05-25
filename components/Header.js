import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import SearchIcon from "./icons/SearchIcon";
import AccountIcon from "./icons/AccountIcon";
import PanierIcon from "./icons/PanierIcon";
import HamburgerMenu from "@/components/HamburgerMenu";

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
  align-items: center; 
  padding: 20px 0;
  max-height: 50px;
`;

const LeftSideIcons = styled.div`
  display: flex;
  align-items: center;
  a {
    display: inline-block;
    min-width: 25px;
    color: white;
    margin-left: 5px; 
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

const NavMenu = styled.nav`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: #b8887a;
  position: absolute;
  top: 70px;  
  left: 0;
  right: 0;
  z-index: 9;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    margin: 10px 0;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
`;

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <StyledHeader>
      <Center>
        <Wrapper>


          <LeftSideIcons>
          <HamburgerMenu isOpen={isNavOpen} toggle={toggleNav} />
            <NavMenu isOpen={isNavOpen}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
          </ul>
          </NavMenu>
            <Link href={"/search"}>
              <SearchIcon />
            </Link>
        </LeftSideIcons>

          <Logo href={"/"}>
            <img src="https://firebasestorage.googleapis.com/v0/b/zayd-ecommerce.appspot.com/o/assets%2FIMPORTANT.png?alt=media&token=35d13ea4-a19a-410c-ab20-df8e18b093a5" alt="Logo Home" />
          </Logo>

          <RightSideIcons>
            <Link href={"/account"}>
              <span></span>
              <AccountIcon />
            </Link>
            <Link href={"/cart"}>
              <PanierIcon />
            </Link>
          </RightSideIcons>

        </Wrapper>
      </Center>
    </StyledHeader>
  );
}