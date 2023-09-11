import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Header } from './';

const LayoutWrapper: FC<PropsWithChildren> = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 4px;
    @media (max-width: 1300px) {
        padding: 0 24px 24px;
    }
`

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <LayoutWrapper>
            <Header />
            {children}
        </LayoutWrapper>
    );
};

export default Layout;
