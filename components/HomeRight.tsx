import styled from 'styled-components';
import { maxDevice } from '../constants/styles';
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
    ${maxDevice.mobile} {
        svg {
            left: 0vw;
            height: 150vh;
        }
    }
`;
