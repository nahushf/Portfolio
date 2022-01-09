import { NextPage } from 'next';
import styled from 'styled-components';
import { HomeLeft } from '../components/HomeLeft';
import { HomeRight } from '../components/HomeRight';

const Home: NextPage = () => {
    return (
        <Container>
            <HomeLeft />
            <HomeRight />
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export default Home;
