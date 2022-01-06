import styled from 'styled-components';
import { AnimatedBlob } from './Blob';

export const HomeRight = () => {
    return (
        <Container>
            <AnimatedBlob />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    svg {
        z-index: -1;
        left: 30vw;
        top: -50%;
        height: 200vh;
        position: fixed;
    }
`;
