import { NextPage } from 'next';
import styled from 'styled-components';
import { HomeContent } from '../components/HomeLeft';
import { Navigation } from '../components/reusableComponents';

const Home: NextPage = () => {
    return (
        <Container>
            <Navigation />
            <HomeContent />
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
