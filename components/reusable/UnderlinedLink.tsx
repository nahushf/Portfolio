import styled from 'styled-components';

export const UnderlinedLink = styled.a`
    color: ${(props) => props.theme.empText};
    text-decoration: underline;
    cursor: pointer;
    &:active {
        color: ${props => props.theme.paragraph};
    }
`;
