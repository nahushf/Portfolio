import { NextPage } from 'next';
import styled from 'styled-components';
import { HomeContent } from '../components/HomeLeft';
import { Navigation } from '../components/reusableComponents';
import { HOME_SHOW_VARIANT } from '../constants/styles';

const Home: NextPage = () => {
    return (
        <Container>
            <Navigation variants={HOME_SHOW_VARIANT(1.7)} />
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
