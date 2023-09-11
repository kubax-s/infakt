import styled from 'styled-components';

interface AvatarProps {
    src: string;
}

const Avatar = styled.img<AvatarProps>`
    content: url(${props => props.src});
    width: 64px;
    height: 64px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 16px;
`

export default Avatar