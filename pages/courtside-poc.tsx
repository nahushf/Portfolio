import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import BasketballAudio from '../components/BasketballAudio';

const POC = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <Container>
            <BasketballAudio />
        </Container>
    );
};

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export default POC;
