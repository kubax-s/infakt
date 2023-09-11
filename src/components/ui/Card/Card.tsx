import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Card: FC<PropsWithChildren> = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 376px;
    padding: 24px;
    border-radius: 16px;
    border: 1px solid rgba(228,230,232, 1);
    box-shadow: 0px 1px 3px rgba(0,0,0, 0.12);
    opacity: 1;
    background-color: rgba(255,255,255, 1);
    gap: 24px;
`

export default Card
