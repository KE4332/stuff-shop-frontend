import styled from 'styled-components'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'

const NavContainer = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #91eaff;
`
const HomeLogo = styled.img`
  height: 4em;
`

const StyledLink = styled(Link)`
  padding: 1em;
  margin: 1em;
  border: 1px solid rgba(0,0,0,0);
  border-radius: 10px;
  &:hover {
    border-color: black;
  }
`

function Header() {

    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={logo} />
            </Link>
            <div>
                <StyledLink to="/shops">
                  Shops
                </StyledLink>
                <StyledLink to="/articles">
                  Articles
                </StyledLink>
                <StyledLink to="/contact">
                  Contact
                </StyledLink>
            </div>

        </NavContainer>
    );
}

export default Header