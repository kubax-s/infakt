import styled from 'styled-components';

interface TypographyProps {
    $color?: string;
    $fontSize?: string;
    $fontWeight?: string;
}

const Typography = styled.p<TypographyProps>`
    margin: 0 0 4px 0;
    color: ${props => props.$color || "#000000"};
    font-size: ${props => props.$fontSize || "16px"};
    font-weight: ${props => props.$fontWeight || "400"};
`

export default Typography
