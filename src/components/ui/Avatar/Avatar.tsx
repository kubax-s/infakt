import styled from 'styled-components';

interface AvatarProps {
    $smSrc: string;
    $mdSrc: string;
}

const Avatar = styled.img<AvatarProps>`
    content: url(${props => props.$mdSrc});
    width: 64px;
    height: 64px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 16px;
    @media (max-width: 768px) {
        content: url(${props => props.$smSrc});
    }
`

export default Avatar