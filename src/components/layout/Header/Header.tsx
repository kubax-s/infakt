import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'src/static/icons/logo.png';

const HeaderWrapper: FC<PropsWithChildren> = styled.header`
    margin: 48px 0px; 
`

const Header: FC = () => {
    return (
        <HeaderWrapper>
            <Link to="/">
                <img src={logo} alt="inFakt logo" />
            </Link>
        </HeaderWrapper>
    )
}

export default Header
