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
  &:hover {
    border: 1px black solid;
    border-radius: 10px;
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