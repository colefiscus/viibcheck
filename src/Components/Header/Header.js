import React from 'react';
import styled from 'styled-components/macro';
import mainLogo from '../../Images/main-logo.png';
import { NavLink } from 'react-router-dom';
import LoginButton from '../Auth0/LoginButton';
import LogoutButton from '../Auth0/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>
  }

  return ((
      <HeaderWrapper>
        <HeaderLink to="/">
          <Logo src={mainLogo} />
        </HeaderLink>
        <HeaderLink to="/sign-out">
          <LogoutButton />
        </HeaderLink>
        <HeaderLink to="/sign-in">
          <LoginButton />
        </HeaderLink>
        <HeaderLink to="faqs">
          <Button>FAQs</Button>
        </HeaderLink>
        <HeaderLink to="/contact">
          <Button>CONTACT</Button>
        </HeaderLink>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <img src={user.picture} alt={user.name} />
      </HeaderWrapper>
    )
  )
}

const HeaderWrapper = styled.header`
  background-color: #0591B8;
  padding-right: 8px;
  display: flex;
  align-items: center;
  height: 60px;
  gap: 2px;
  border-bottom: 3px solid #061826;
`;

const HeaderLink = styled(NavLink)`
  align-self: flex-end;

  &:first-of-type {
    margin-right: auto;
    align-self: center;
  }
`;

const Logo = styled.img`
  max-width: 275px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 12px 4px 12px;
  font-family: 'Biryani';
  font-weight: 200;
  line-height: 1;
  flex-shrink: 0;
  background-color: #FDFFFC;
  border-radius: 8px 8px 0px 0px;
  border-bottom: none;
  align-self: flex-end;
  cursor: pointer;
`;

export default Header;