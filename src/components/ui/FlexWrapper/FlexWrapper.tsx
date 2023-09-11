import styled from 'styled-components';

interface FlexWrapperProps {
    $direction?: string;
    $justify?: string;
    $align?: string;
    $gap?: string;
}

const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.$direction || 'row'};
    justify-content: ${props => props.$justify || 'flex-start'};
    align-items: ${props => props.$align || 'flex-start'};
    gap: ${props => props.$gap || '0'};
    width: 100%;
`

export default FlexWrapper
