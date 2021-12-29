import SimplexNoise from 'simplex-noise';
import { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { HomeLeft } from '../components/HomeLeft';
import { spline } from '../scripts/spline';
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
    height: 100%;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export default Home;
