import { NextPage } from 'next';
import styled from 'styled-components';
import { HomeLeft } from '../components/HomeLeft';

const Home: NextPage = () => {
    return (
        <Container>
            <HomeLeft />
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr;
`;

export default Home;
